import type { RouterData } from "../types.js";
import { config } from "../config.js";
import { get } from "../utils/getData.js";
import { getTime } from "../utils/getTime.js";
import logger from "../utils/logger.js";

const WEIBO_TTL = 60;
const WEIBO_TIMEOUT = 12_000;
const MAX_RETRIES = 2;

export const handleRoute = async (_: undefined, noCache: boolean) => {
  const listData = await getList(noCache);
  const routeData: RouterData = {
    name: "weibo",
    title: "微博",
    type: "热搜榜",
    description: "实时热点，每分钟更新一次",
    link: "https://s.weibo.com/top/summary/",
    total: listData.data?.length || 0,
    ...listData,
  };
  return routeData;
};

interface WeiboItem {
  mid?: string;
  word?: string;
  word_scheme?: string;
  onboard_time?: number;
  /** 热度/阅读量 */
  num?: number | string;
  /** 1 表示广告/推广 */
  is_ad?: number;
  topic_ad?: number;
}

interface WeiboResponse {
  data?: {
    realtime?: WeiboItem[];
  };
  ok?: number;
}

const weiboHeaders = {
  Referer: "https://weibo.com/",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  Accept: "application/json, text/plain, */*",
};

/** 是否为广告/推广条目（可根据配置过滤） */
function isAdItem(item: WeiboItem): boolean {
  if (item.is_ad === 1) return true;
  if (item.topic_ad != null && item.topic_ad > 0) return true;
  const title = (item.word || item.word_scheme || "").trim();
  return title === "广告" || /^\[.*广告.*\]$/.test(title);
}

const getList = async (noCache: boolean) => {
  const url = "https://weibo.com/ajax/side/hotSearch";
  let lastError: unknown;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await get<WeiboResponse>({
        url,
        noCache: noCache || attempt > 0,
        ttl: WEIBO_TTL,
        timeout: WEIBO_TIMEOUT,
        headers: weiboHeaders,
      });

      const rawList = result.data?.data?.realtime;
      if (!Array.isArray(rawList)) {
        return { ...result, data: [] };
      }

      let list = rawList as WeiboItem[];
      if (config.FILTER_WEIBO_ADVERTISEMENT) {
        list = list.filter((item) => !isAdItem(item));
      }

      const data = list.map((v, index: number) => {
        const title = (v.word || v.word_scheme || "").trim() || `热搜${index + 1}`;
        const hot =
          typeof v.num === "number" ? v.num : typeof v.num === "string" ? parseInt(v.num, 10) : undefined;
        return {
          id: v.mid || v.word_scheme || `weibo-${index}`,
          title,
          desc: v.word_scheme || `#${title}#`,
          hot: Number.isNaN(hot as number) ? undefined : hot,
          timestamp: getTime(v.onboard_time || Date.now()),
          url: `https://s.weibo.com/weibo?q=${encodeURIComponent(title)}`,
          mobileUrl: `https://s.weibo.com/weibo?q=${encodeURIComponent(title)}`,
        };
      });

      return { ...result, data };
    } catch (err) {
      lastError = err;
      if (attempt < MAX_RETRIES) {
        const delay = (attempt + 1) * 1500;
        logger.warn(`[weibo] 请求失败，${delay}ms 后重试 (${attempt + 1}/${MAX_RETRIES})`);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }

  const errMsg = lastError instanceof Error ? lastError.message : String(lastError);
  logger.error(`[weibo] 多次请求失败，返回空列表: ${errMsg}`);
  return {
    fromCache: false,
    updateTime: new Date().toISOString(),
    data: [],
  };
};
