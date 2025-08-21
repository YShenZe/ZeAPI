# 网站元数据获取 API
## 1. 基本调用

::: tip
此 API 用于从指定 URL 提取网站标题、描述和图标信息。
:::

基本 API 地址

```txt
https://zeapi.ink/v1/siteinfo.php
```

通过以下 URL 或 POST 请求获取网站元数据：

```txt
https://zeapi.ink/v1/siteinfo.php?url=https://baidu.com
```

或通过 POST 请求发送 JSON 数据：
```json
{
    "url": "https://baidu.com"
}
```

Shell 请求代码如下：
```shell
curl -X GET "https://zeapi.ink/v1/siteinfo.php?url=https://baidu.com"
```

或使用 POST：
```shell
curl -X POST https://zeapi.ink/v1/siteinfo.php \
-H "Content-Type: application/json" \
-d '{"url": "https://baidu.com"}'
```

## 2. 请求参数说明
| 参数 | 类型   | 必填 | 默认值 | 说明                       |
|------|--------|------|--------|----------------------------|
| url  | string | 是   | 无     | 目标网站的完整 URL，例如 `https://baidu.com` |

## 3. JSON 响应格式
成功响应示例：
```json
{
    "url": "https://baidu.com",
    "title": "百度一下，你就知道",
    "description": "全球领先的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。",
    "icons": [
        "https://baidu.com/favicon.ico",
        "https://baidu.com/static/favicon.png"
    ]
}
```

错误响应示例（缺少 URL 参数）：
```json
{
    "error": "缺少参数 url"
}
```

错误响应示例（URL 格式不合法）：
```json
{
    "error": "url 格式不合法"
}
```

错误响应示例（无法抓取页面）：
```json
{
    "error": "无法抓取目标页面"
}
```

## 4. 响应字段说明
| 字段        | 类型     | 说明                                      |
|-------------|----------|------------------------------------------|
| url         | string   | 请求的网站 URL                          |
| title       | string   | 网站标题（从 `<title>` 标签提取）        |
| description | string   | 网站描述（从 `<meta name="description">` 或 `og:description` 提取） |
| icons       | array    | 网站图标 URL 列表（包括 `<link rel="icon">` 和默认 `/favicon.ico`） |
| error       | string   | 错误信息（仅在请求失败时返回）           |