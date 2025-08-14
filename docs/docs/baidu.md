# 百度热点 API

## 1. 基本调用

::: tip
服务器不会记录您的任何请求，也不会窃取您的任何隐私！
:::

基本API地址

```txt
https://zeapi.ink/v1/baidu.php
```

通过以下 URL 直接发送 GET 请求获取百度热点数据：

```txt
https://zeapi.ink/v1/baidu.php
```

Shell 请求代码如下：

```shell
curl -X GET https://zeapi.ink/v1/baidu.php
```

## 2. 请求参数说明

该 API 不需要额外的请求参数，直接通过 GET 请求调用即可。

## 3. JSON 响应格式

成功响应示例：

```json
{
    "success": true,
    "title": "百度热点",
    "update_time": "2025-08-14 20:40:00",
    "data": [
        {
            "index": 1,
            "title": "热点关键词1",
            "desc": "热点关键词1的描述",
            "pic": "https://example.com/image1.jpg",
            "hot": "123.4万",
            "url": "https://www.baidu.com/s?wd=热点关键词1",
            "mobilUrl": "https://m.baidu.com/s?wd=热点关键词1"
        },
        {
            "index": 2,
            "title": "热点关键词2",
            "desc": "热点关键词2的描述",
            "pic": "https://example.com/image2.jpg",
            "hot": "89.5万",
            "url": "https://www.baidu.com/s?wd=热点关键词2",
            "mobilUrl": "https://m.baidu.com/s?wd=热点关键词2"
        }
    ]
}
```

错误响应示例（数据获取失败）：

```json
{
    "success": false,
    "message": "Failed to fetch Baidu hot search data"
}
```

## 4. 响应字段说明

| 字段         | 类型    | 说明                                   |
|--------------|---------|---------------------------------------|
| success      | boolean | 请求状态（true/false）                |
| title        | string  | 热点标题，固定为“百度热点”             |
| update_time  | string  | 数据更新时间（格式：YYYY-MM-DD HH:MM:SS） |
| data         | array   | 热点列表，包含多个热点条目             |
| data.index   | int     | 热点排名                              |
| data.title   | string  | 热点关键词                            |
| data.desc    | string  | 热点关键词的描述                      |
| data.pic     | string  | 热点关键词的图片链接                  |
| data.hot     | string  | 热点热度（以“万”为单位，保留1位小数） |
| data.url     | string  | 热点关键词的网页搜索链接              |
| data.mobilUrl| string  | 热点关键词的移动端搜索链接            |
| message      | string  | 操作结果消息（仅在错误时返回）        |