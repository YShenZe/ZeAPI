# 强制跳转QQ API

## 1. 基本调用

> **请确保在支持QQ协议的环境中使用此API，以获得最佳体验。**

**基本 API 地址**


```txt
https://zeapi.ink/v1/qzztqq.php
```

通过 GET 请求实现强制跳转到QQ的聊天界面、加好友界面或WPA临时会话：


```txt
https://zeapi.ink/v1/qzztqq.php?type=chat&uin=123456
```

**Shell 请求示例**

```shell
curl https://zeapi.ink/v1/qzztqq.php?type=chat&uin=123456
```

**获取 JSON 格式输出**

在 URL 中添加 `format=json` 参数以获取 JSON 格式的跳转信息：


```txt
https://zeapi.ink/v1/qzztqq.php?type=chat&uin=123456&format=json
```

**Shell 请求示例（JSON 格式）**

```shell
curl https://zeapi.ink/v1/qzztqq.php?type=chat&uin=123456&format=json
```

**POST 请求示例（JSON 格式）**

通过 POST 请求发送 JSON 数据获取跳转信息：

```shell
curl -X POST -H "Content-Type: application/json" -d '{"type":"chat","uin":"123456","format":"json"}' https://zeapi.ink/v1/qzztqq.php
```

## 2. 请求参数说明

| 参数   | 类型   | 必填 | 默认值   | 说明                              |
|--------|--------|------|----------|-----------------------------------|
| type   | string | 是   |          | 操作类型，可选值：`chat`（跳转到聊天界面）、`addfriend`（跳转到加好友界面）、`wpa`（WPA临时会话） |
| uin    | string | 是   |          | 目标QQ号码，必须为数字           |
| format | string | 否   | redirect | 输出格式，可选值：`json`（返回跳转信息）或 `redirect`（直接重定向到QQ界面） |

## 3. JSON 响应格式

**成功响应示例（JSON 格式）**

```json
{
    "status": "success",
    "type": "chat",
    "uin": "123456",
    "url": "mqqwpa://im/chat?chat_type=wpa&version=1&src_type=web&web_src=oicqzone.com&uin=123456"
}
```

**成功响应示例（redirect 格式）**

API 将返回一个 HTTP 302 重定向响应，客户端将自动跳转到对应的 QQ 界面。

**错误响应示例（参数错误）**

```json
{ "code": 400, "error": "Invalid uin or type." }
```

**错误响应示例（服务器错误）**

```json
{ "code": 500, "error": "Server error: [错误描述]" }
```

## 4. 响应字段说明

| 字段        | 类型   | 说明                                          |
|-------------|--------|----------------------------------------------|
| code        | int    | 响应状态码（200 表示成功，400 表示参数错误，500 表示服务器错误） |
| status      | string | 操作结果状态（仅 JSON 格式，`success` 表示成功） |
| error       | string | 错误信息（仅在出错时返回）                   |
| type        | string | 操作类型（仅 JSON 格式，例如 `chat`）        |
| uin         | string | 目标QQ号码（仅 JSON 格式，例如 `123456`）    |
| url         | string | 跳转的 URL（仅 JSON 格式，例如 `mqqwpa://im/chat?...`） |