import { config } from "../config.js";

/** 按 IP 的请求计数，key 为 IP，value 为 { count, resetAt } */
const store = new Map<string, { count: number; resetAt: number }>();

const windowMs = config.RATE_LIMIT_WINDOW_MS;
const max = config.RATE_LIMIT_MAX;

/**
 * 检查是否超过限流，若未超限则计数+1
 * @param key 一般为客户端 IP
 * @returns true 表示允许请求，false 表示应拒绝（429）
 */
export function checkRateLimit(key: string): boolean {
  if (max <= 0) return true;
  const now = Date.now();
  let entry = store.get(key);
  if (!entry) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (now >= entry.resetAt) {
    entry = { count: 1, resetAt: now + windowMs };
    store.set(key, entry);
    return true;
  }
  if (entry.count >= max) return false;
  entry.count += 1;
  return true;
}

/** 定期清理过期条目，避免 Map 无限增长 */
setInterval(() => {
  const now = Date.now();
  for (const [k, v] of store.entries()) {
    if (now >= v.resetAt) store.delete(k);
  }
}, Math.min(windowMs, 60_000));
