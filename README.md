<div align="center">
<img alt="logo" height="120" src="./public/favicon.png" width="120"/>
<h2>今日热榜</h2>
<p>一个聚合热门数据的 API 接口</p>
<br />
<img src="https://img.shields.io/github/last-commit/imsyy/DailyHotApi" alt="last commit"/>
 <img src="https://img.shields.io/github/languages/code-size/imsyy/DailyHotApi" alt="code size"/>
 <img src="https://img.shields.io/docker/image-size/imsyy/dailyhot-api" alt="docker-image-size"/>
<img src="https://github.com/imsyy/DailyHotApi/actions/workflows/docker.yml/badge.svg" alt="Publish Docker image"/>
<img src="https://github.com/imsyy/DailyHotApi/actions/workflows/npm.yml/badge.svg" alt="Publish npm package"/>
</div>

## 🚩 特性

- 极快响应，便于开发
- 支持 RSS 模式和 JSON 模式
- 支持多种部署方式
- 简明的路由目录，便于新增

## 👀 示例

> 这里是使用该 API 的示例站点  
> 示例站点可能由于访问量或者长久未维护而访问异常  
> 若您也使用了本 API 搭建了网站，欢迎提交您的站点链接

- [今日热榜 - https://hot.imsyy.top/](https://hot.imsyy.top/)

## 📊 接口总览

<details>
<summary>查看全部接口</summary>

> 示例站点运行于海外服务器，部分国内站点可能存在访问异常，请以实际情况为准  
> 关于 **微博（weibo）** 等接口无法访问的说明，见下方 [接口访问说明](#-接口访问说明)

| **站点**         | **类别**     | **调用名称**   | **状态**                                                                                                                                                            |
| ---------------- | ------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 哔哩哔哩         | 热门榜       | bilibili       | ![https://api-hot.imsyy.top/bilibili](https://img.shields.io/website.svg?label=bilibili&url=https://api-hot.imsyy.top/bilibili&cacheSeconds=7200)                   |
| AcFun            | 排行榜       | acfun          | ![https://api-hot.imsyy.top/acfun](https://img.shields.io/website.svg?label=acfun&url=https://api-hot.imsyy.top/acfun&cacheSeconds=7200)                            |
| 微博             | 热搜榜       | weibo          | ![https://api-hot.imsyy.top/weibo](https://img.shields.io/website.svg?label=weibo&url=https://api-hot.imsyy.top/weibo&cacheSeconds=7200)                            |
| 知乎             | 热榜         | zhihu          | ![https://api-hot.imsyy.top/zhihu](https://img.shields.io/website.svg?label=zhihu&url=https://api-hot.imsyy.top/zhihu&cacheSeconds=7200)                            |
| 知乎日报         | 推荐榜       | zhihu-daily    | ![https://api-hot.imsyy.top/zhihu-daily](https://img.shields.io/website.svg?label=zhihu-daily&url=https://api-hot.imsyy.top/zhihu-daily&cacheSeconds=7200)          |
| 百度             | 热搜榜       | baidu          | ![https://api-hot.imsyy.top/baidu](https://img.shields.io/website.svg?label=baidu&url=https://api-hot.imsyy.top/baidu&cacheSeconds=7200)                            |
| 抖音             | 热点榜       | douyin         | ![https://api-hot.imsyy.top/douyin](https://img.shields.io/website.svg?label=douyin&url=https://api-hot.imsyy.top/douyin&cacheSeconds=7200)                         |
| 快手             | 热点榜       | kuaishou       | ![https://api-hot.imsyy.top/kuaishou](https://img.shields.io/website.svg?label=kuaishou&url=https://api-hot.imsyy.top/kuaishou&cacheSeconds=7200)                   |
| 豆瓣电影         | 新片榜       | douban-movie   | ![https://api-hot.imsyy.top/douban-movie](https://img.shields.io/website.svg?label=douban-movie&url=https://api-hot.imsyy.top/douban-movie&cacheSeconds=7200)       |
| 豆瓣讨论小组     | 讨论精选     | douban-group   | ![https://api-hot.imsyy.top/douban-group](https://img.shields.io/website.svg?label=douban-group&url=https://api-hot.imsyy.top/douban-group&cacheSeconds=7200)       |
| 百度贴吧         | 热议榜       | tieba          | ![https://api-hot.imsyy.top/tieba](https://img.shields.io/website.svg?label=tieba&url=https://api-hot.imsyy.top/tieba&cacheSeconds=7200)                            |
| 少数派           | 热榜         | sspai          | ![https://api-hot.imsyy.top/sspai](https://img.shields.io/website.svg?label=sspai&url=https://api-hot.imsyy.top/sspai&cacheSeconds=7200)                            |
| IT之家           | 热榜         | ithome         | ![https://api-hot.imsyy.top/ithome](https://img.shields.io/website.svg?label=ithome&url=https://api-hot.imsyy.top/ithome&cacheSeconds=7200)                         |
| IT之家「喜加一」 | 最新动态     | ithome-xijiayi | ![https://api-hot.imsyy.top/ithome-xijiayi](https://img.shields.io/website.svg?label=ithome-xijiayi&url=https://api-hot.imsyy.top/ithome-xijiayi&cacheSeconds=7200) |
| 简书             | 热门推荐     | jianshu        | ![https://api-hot.imsyy.top/jianshu](https://img.shields.io/website.svg?label=jianshu&url=https://api-hot.imsyy.top/jianshu&cacheSeconds=7200)                      |
| 果壳             | 热门文章     | guokr          | ![https://api-hot.imsyy.top/guokr](https://img.shields.io/website.svg?label=guokr&url=https://api-hot.imsyy.top/guokr&cacheSeconds=7200)                            |
| 澎湃新闻         | 热榜         | thepaper       | ![https://api-hot.imsyy.top/thepaper](https://img.shields.io/website.svg?label=thepaper&url=https://api-hot.imsyy.top/thepaper&cacheSeconds=7200)                   |
| 今日头条         | 热榜         | toutiao        | ![https://api-hot.imsyy.top/toutiao](https://img.shields.io/website.svg?label=toutiao&url=https://api-hot.imsyy.top/toutiao&cacheSeconds=7200)                      |
| 36 氪            | 热榜         | 36kr           | ![https://api-hot.imsyy.top/36kr](https://img.shields.io/website.svg?label=36kr&url=https://api-hot.imsyy.top/36kr&cacheSeconds=7200)                               |
| 51CTO            | 推荐榜       | 51cto          | ![https://api-hot.imsyy.top/51cto](https://img.shields.io/website.svg?label=51cto&url=https://api-hot.imsyy.top/51cto&cacheSeconds=7200)                            |
| CSDN             | 排行榜       | csdn           | ![https://api-hot.imsyy.top/csdn](https://img.shields.io/website.svg?label=csdn&url=https://api-hot.imsyy.top/csdn&cacheSeconds=7200)                               |
| NodeSeek         | 最新动态     | nodeseek       | ![https://api-hot.imsyy.top/nodeseek](https://img.shields.io/website.svg?label=nodeseek&url=https://api-hot.imsyy.top/nodeseek&cacheSeconds=7200)                   |
| 稀土掘金         | 热榜         | juejin         | ![https://api-hot.imsyy.top/juejin](https://img.shields.io/website.svg?label=juejin&url=https://api-hot.imsyy.top/juejin&cacheSeconds=7200)                         |
| 腾讯新闻         | 热点榜       | qq-news        | ![https://api-hot.imsyy.top/qq-news](https://img.shields.io/website.svg?label=qq-news&url=https://api-hot.imsyy.top/qq-news&cacheSeconds=7200)                      |
| 新浪网           | 热榜         | sina           | ![https://api-hot.imsyy.top/sina](https://img.shields.io/website.svg?label=sina&url=https://api-hot.imsyy.top/sina&cacheSeconds=7200)                               |
| 新浪新闻         | 热点榜       | sina-news      | ![https://api-hot.imsyy.top/sina-news](https://img.shields.io/website.svg?label=sina-news&url=https://api-hot.imsyy.top/sina-news&cacheSeconds=7200)                |
| 网易新闻         | 热点榜       | netease-news   | ![https://api-hot.imsyy.top/netease-news](https://img.shields.io/website.svg?label=netease-news&url=https://api-hot.imsyy.top/netease-news&cacheSeconds=7200)       |
| 吾爱破解         | 榜单         | 52pojie        | ![https://api-hot.imsyy.top/52pojie](https://img.shields.io/website.svg?label=52pojie&url=https://api-hot.imsyy.top/52pojie&cacheSeconds=7200)                      |
| 全球主机交流     | 榜单         | hostloc        | ![https://api-hot.imsyy.top/hostloc](https://img.shields.io/website.svg?label=hostloc&url=https://api-hot.imsyy.top/hostloc&cacheSeconds=7200)                      |
| 虎嗅             | 24小时       | huxiu          | ![https://api-hot.imsyy.top/huxiu](https://img.shields.io/website.svg?label=huxiu&url=https://api-hot.imsyy.top/huxiu&cacheSeconds=7200)                            |
| 酷安             | 热榜         | coolapk        | ![https://api-hot.imsyy.top/coolapk](https://img.shields.io/website.svg?label=coolapk&url=https://api-hot.imsyy.top/coolapk&cacheSeconds=7200)                      |
| 虎扑             | 步行街热帖   | hupu           | ![https://api-hot.imsyy.top/hupu](https://img.shields.io/website.svg?label=hupu&url=https://api-hot.imsyy.top/hupu&cacheSeconds=7200)                               |
| 爱范儿           | 快讯         | ifanr          | ![https://api-hot.imsyy.top/ifanr](https://img.shields.io/website.svg?label=ifanr&url=https://api-hot.imsyy.top/ifanr&cacheSeconds=7200)                            |
| 英雄联盟         | 更新公告     | lol            | ![https://api-hot.imsyy.top/lol](https://img.shields.io/website.svg?label=lol&url=https://api-hot.imsyy.top/lol&cacheSeconds=7200)                                  |
| 米游社           | 最新消息     | miyoushe       | ![https://api-hot.imsyy.top/miyoushe](https://img.shields.io/website.svg?label=miyoushe&url=https://api-hot.imsyy.top/miyoushe&cacheSeconds=7200)                   |
| 原神             | 最新消息     | genshin        | ![https://api-hot.imsyy.top/genshin](https://img.shields.io/website.svg?label=genshin&url=https://api-hot.imsyy.top/genshin&cacheSeconds=7200)                      |
| 崩坏3            | 最新动态     | honkai         | ![https://api-hot.imsyy.top/honkai](https://img.shields.io/website.svg?label=honkai&url=https://api-hot.imsyy.top/honkai&cacheSeconds=7200)                         |
| 崩坏：星穹铁道   | 最新动态     | starrail       | ![https://api-hot.imsyy.top/starrail](https://img.shields.io/website.svg?label=starrail&url=https://api-hot.imsyy.top/starrail&cacheSeconds=7200)                   |
| 微信读书         | 飙升榜       | weread         | ![https://api-hot.imsyy.top/weread](https://img.shields.io/website.svg?label=weread&url=https://api-hot.imsyy.top/weread&cacheSeconds=7200)                         |
| NGA              | 热帖         | ngabbs         | ![https://api-hot.imsyy.top/ngabbs](https://img.shields.io/website.svg?label=ngabbs&url=https://api-hot.imsyy.top/ngabbs&cacheSeconds=7200)                         |
| V2EX             | 主题榜       | v2ex           | ![https://api-hot.imsyy.top/v2ex](https://img.shields.io/website.svg?label=v2ex&url=https://api-hot.imsyy.top/v2ex&cacheSeconds=7200)                               |
| HelloGitHub      | Trending     | hellogithub    | ![https://api-hot.imsyy.top/hellogithub](https://img.shields.io/website.svg?label=hellogithub&url=https://api-hot.imsyy.top/hellogithub&cacheSeconds=7200)          |
| 中央气象台       | 全国气象预警 | weatheralarm   | ![https://api-hot.imsyy.top/weatheralarm](https://img.shields.io/website.svg?label=weatheralarm&url=https://api-hot.imsyy.top/weatheralarm&cacheSeconds=7200)       |
| 中国地震台       | 地震速报     | earthquake     | ![https://api-hot.imsyy.top/earthquake](https://img.shields.io/website.svg?label=earthquake&url=https://api-hot.imsyy.top/earthquake&cacheSeconds=7200)             |
| 历史上的今天     | 月-日        | history        | ![https://api-hot.imsyy.top/history](https://img.shields.io/website.svg?label=history&url=https://api-hot.imsyy.top/history&cacheSeconds=7200)                      |

</details>

## 📌 接口访问说明

部分接口（尤其是**微博 weibo**）在部署后可能出现无法访问、超时或返回空数据，常见原因如下：

| 原因 | 说明 |
|------|------|
| **网络与地域** | 微博等国内站点的接口（如 `weibo.com/ajax/side/hotSearch`）对境外 IP 或非大陆网络有限制，海外服务器部署时容易请求失败。 |
| **反爬与风控** | 站点会校验 Cookie、Referer、User-Agent 等，或对数据中心 IP、高频请求进行限流/封禁，导致接口暂时不可用。 |
| **接口变更** | 官方可能更换接口地址或返回结构，未同步更新时会出现解析失败或空数据。 |

**建议**：若需稳定获取微博热搜，请将 API 部署在**大陆境内服务器**，或通过代理使出口 IP 位于大陆；同时合理设置缓存（本项目微博接口默认缓存 60 秒），避免请求过于频繁。

其他国内站点（如知乎、百度、抖音等）在海外环境也可能存在类似情况，以实际部署环境为准。

## ⚙️ 使用

本项目支持 `Node.js` 调用，可在安装完成后调用 `serveHotApi` 来开启服务器

> 该方式无法使用部分需要 Puppeteer 环境的接口

```bash
pnpm add dailyhot-api
```

```js
import serveHotApi from "dailyhot-api";

/**
 * 启动服务器
 * @param {Number} [port] - 端口号
 * @returns {Promise<void>}
 */
serveHotApi(3000);
```

## ⚙️ 部署

具体使用说明可参考 [我的博客](https://blog.imsyy.top/posts/2024/0408)，下方仅讲解基础操作：

### 一键部署（Docker Compose 拉取）

仅需拉取镜像与配置文件即可完成部署，无需本地构建。镜像由 GitHub Actions 在 **push 到 main** 或 **发布 Release** 时自动构建并推送至 Docker Hub / GHCR。

**步骤：**

```bash
# 1. 克隆仓库（或仅下载 docker-compose.yml 与 .env.example）
git clone https://github.com/imsyy/DailyHotApi.git
cd DailyHotApi

# 2. 复制环境配置并按需修改（若不需要自定义配置，可执行 touch .env 创建空文件）
cp .env.example .env

# 3. 拉取镜像并启动
docker compose pull
docker compose up -d
```

访问 `http://<你的服务器IP>:6688` 即可。日志目录为 `./logs`，可通过 `docker compose logs -f` 查看输出。

**使用 GitHub Container Registry 镜像：** 编辑 `docker-compose.yml`，将 `image: imsyy/dailyhot-api:latest` 改为 `image: ghcr.io/imsyy/dailyhot-api:latest`。

**维护者：** 若 fork 本仓库并希望自动构建并推送镜像，需在 GitHub 仓库 **Settings → Secrets and variables → Actions** 中配置 `DOCKER_USERNAME` 与 `DOCKER_PASSWORD`（Docker Hub 凭证）。推送至 `main` 或发布 Release 后将自动构建并推送 `latest` / 版本标签。

### Docker 部署（其他方式）

> 安装及配置 Docker 将不在此处说明，请自行解决

#### 仅拉取镜像运行（不克隆仓库）

```bash
docker pull imsyy/dailyhot-api:latest
docker run --restart always -p 6688:6688 -d imsyy/dailyhot-api:latest
```

#### 本地构建后运行

```bash
docker build -t dailyhot-api .
docker run --restart always -p 6688:6688 -d dailyhot-api
# 或使用 Docker Compose（当前仓库内 compose 为拉取模式，本地构建请自行编写 compose 或使用上述 run 命令）
```

### 手动部署

最直接的方式，您可以按照以下步骤将 `DailyHotApi` 部署在您的电脑、服务器或者其他任何地方

#### 安装

```bash
git clone https://github.com/imsyy/DailyHotApi.git
cd DailyHotApi
```

安装依赖（推荐使用 pnpm）：

```bash
pnpm install
# 或 npm install
```

复制 `/.env.example` 为 `/.env` 并按需修改配置（可选：限流、Redis、缓存时长等见 `.env.example` 内注释）

#### 开发

```bash
pnpm run dev
# 或 npm run dev
```

成功启动后程序会在控制台输出可访问的地址

#### 编译运行

```bash
pnpm run build
pnpm run start
# 或 npm run build && npm run start
```

### pm2 部署

```bash
npm i pm2 -g
sh ./deploy.sh
```

成功启动后程序会在控制台输出可访问的地址

## ⚠️ 须知

- 本项目为避免频繁请求官方数据，默认对数据做了缓存（默认 60 分钟），可在 `.env` 中通过 `CACHE_TTL` 修改
- 部分接口（如微博）依赖国内站点接口，在**海外服务器**部署时可能无法访问，详见 [接口访问说明](#-接口访问说明)
- 部分接口使用 **页面爬虫 / 非公开接口**，若违反对应站点规则，请 **及时通知以去除该接口**
- 可选：通过环境变量 `RATE_LIMIT_MAX`、`RATE_LIMIT_WINDOW_MS` 开启按 IP 限流，防止滥用

## 📢 免责声明

- 本项目提供的 `API` 仅供开发者进行技术研究和开发测试使用。使用该 `API` 获取的信息仅供参考，不代表本项目对信息的准确性、可靠性、合法性、完整性作出任何承诺或保证。本项目不对任何因使用该 `API` 获取信息而导致的任何直接或间接损失负责。本项目保留随时更改 `API` 接口地址、接口协议、接口参数及其他相关内容的权利。本项目对使用者使用 `API` 的行为不承担任何直接或间接的法律责任
- 本项目并未与相关信息提供方建立任何关联或合作关系，获取的信息均来自公开渠道，如因使用该 `API` 获取信息而产生的任何法律责任，由使用者自行承担
- 本项目对使用 `API` 获取的信息进行了最大限度的筛选和整理，但不保证信息的准确性和完整性。使用 `API` 获取信息时，请务必自行核实信息的真实性和可靠性，谨慎处理相关事项
- 本项目保留对 `API` 的随时更改、停用、限制使用等措施的权利。任何因使用本 `API` 产生的损失，本项目不负担任何赔偿和责任

## 😘 鸣谢

特此感谢为本项目提供支持与灵感的项目

- [RSSHub](https://github.com/DIYgod/RSSHub)

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=imsyy/DailyHotApi&type=Date)](https://star-history.com/#imsyy/DailyHotApi&Date)
