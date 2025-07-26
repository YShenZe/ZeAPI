# IP 地址归属地查询

## 1. 基本调用

::: tip
服务器不会记录您的任何请求，也不会窃取您的任何隐私！
:::

基本API地址
```url
https://zeapi.ink/v1/ipseek.php
```

通过以下 URL 或 POST 请求查询IP地址的归属地信息：
```url
https://zeapi.ink/v1/ipseek.php?ip=8.8.8.8
```

或通过 POST 请求发送 JSON 数据：
```json
{
    "ip": "8.8.8.8"
}
```

Shell请求代码如下：
```shell
curl -X POST https://zeapi.ink/v1/ipseek.php \
-H "Content-Type: application/json" \
-d '{"ip":"8.8.8.8"}'
```

## 2. 请求参数说明
| 参数     | 类型   | 必填 | 默认值                                | 说明                              |
|----------|--------|------|---------------------------------------|----------------------------------|
| ip       | string | 否   | 客户端IP地址                          | 要查询的IP地址（IPv4或IPv6）     |

## 3. JSON 响应格式
```json
{
    "status": "success",
    "ip": "8.8.8.8",
    "country": "美国",
    "region": "加利福尼亚",
    "city": "山景城",
    "isp": "Google LLC",
    "latitude": 37.751,
    "longitude": -97.822,
    "timezone": "America/Chicago"
}
```

错误响应示例（无效IP地址）：
```json
{
    "status": "error",
    "message": "Invalid IP address"
}
```

错误响应示例：
```json
{
    "status": "error",
    "message": "Failed to fetch IP information"
}
```

## 4. 响应字段说明
| 字段       | 类型   | 说明                              |
|------------|--------|----------------------------------|
| status     | string | 请求状态（success/error）        |
| ip         | string | 查询的IP地址                    |
| country    | string | 国家 |
| region     | string | 地区 |
| city       | string | 城市 |
| isp        | string | 互联网服务提供商 |
| latitude   | float  | 纬度 |
| longitude  | float  | 经度 |
| timezone   | string | 时区 |
| message    | string | 操作结果消息（仅在错误时返回）   |