# 抖音热搜 API

## 1. 基本调用

::: tip
服务器不会记录您的任何请求，也不会窃取您的任何隐私！
:::

基本API地址

```txt
https://zeapi.ink/v1/douyin.php
```

通过以下 URL 直接发送 GET 请求获取抖音热搜数据：

```txt
https://zeapi.ink/v1/douyin.php
```

Shell 请求代码如下：

```shell
curl -X GET https://zeapi.ink/v1/douyin.php
```

## 2. 请求参数说明

该 API 不需要额外的请求参数，直接通过 GET 请求调用即可。

## 3. JSON 响应格式

成功响应示例：

```json
{
    "success": true,
    "title": "抖音热搜",
    "update_time": "2025-08-14 20:38:00",
    "data": [
        {
            "index": 1,
            "title": "热搜关键词1",
            "hot": "123.4万",
            "url": "https://www.douyin.com/search/热搜关键词1",
            "mobilUrl": "https://www.douyin.com/search/热搜关键词1"
        },
        {
            "index": 2,
            "title": "热搜关键词2",
            "hot": "89.5万",
            "url": "https://www.douyin.com/search/热搜关键词2",
            "mobilUrl": "https://www.douyin.com/search/热搜关键词2"
        }
    ]
}
```

错误响应示例（数据获取失败）：

```json
{
    "success": false,
    "message": "Failed to fetch Douyin hot search data"
}
```

## 4. 响应字段说明

| 字段         | 类型    | 说明                                   |
|--------------|---------|---------------------------------------|
| success      | boolean | 请求状态（true/false）                |
| title        | string  | 热搜标题，固定为“抖音热搜”             |
| update_time  | string  | 数据更新时间（格式：YYYY-MM-DD HH:MM:SS） |
| data         | array   | 热搜列表，包含多个热搜条目             |
| data.index   | int     | 热搜排名                              |
| data.title   | string  | 热搜关键词                            |
| data.hot     | string  | 热搜热度（以“万”为单位，保留1位小数） |
| data.url     | string  | 热搜关键词的网页搜索链接              |
| data.mobilUrl| string  | 热搜关键词的移动端搜索链接            |
| message      | string  | 操作结果消息（仅在错误时返回）        |