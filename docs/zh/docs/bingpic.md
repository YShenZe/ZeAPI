# Bing 每日壁纸

## 1. 基本调用
![API调用Demo](https://zeapi.ink/v1/bingpic.php?format=image)

> **请确保网络连接稳定以获取最佳体验。**

**基本 API 地址**

```url
https://zeapi.ink/v1/bingpic.php
```

通过 GET 请求获取 Bing 每日壁纸：

```url
https://zeapi.ink/v1/bingpic.php
```

**Shell 请求示例**

```shell
curl https://zeapi.ink/v1/bingpic.php
```

**获取 JSON 格式输出**

在 URL 中添加 `format=json` 参数以获取 JSON 格式的壁纸信息：

```url
https://zeapi.ink/v1/bingpic.php?format=json
```

**Shell 请求示例（JSON 格式）**

```shell
curl https://zeapi.ink/v1/bingpic.php?format=json
```

**POST 请求示例（JSON 格式）**

通过 POST 请求发送 JSON 数据获取壁纸信息：

```shell
curl -X POST -H "Content-Type: application/json" -d '{"format":"json"}' https://zeapi.ink/v1/bingpic.php
```

## 2. 请求参数说明

| 参数   | 类型   | 必填 | 默认值 | 说明                              |
|--------|--------|------|--------|----------------------------------|
| format | string | 否   | image  | 输出格式，可选值：`json`（返回壁纸信息）或 `image`（直接返回壁纸图片） |

## 3. JSON 响应格式

**成功响应示例（JSON 格式）**

```json
{
    "status": "success",
    "url": "https://www.bing.com/path/to/image.jpg",
    "title": "壁纸标题",
    "description": "壁纸版权信息"
}
```

**成功响应示例（image 格式）**

直接返回壁纸图片的二进制数据，`Content-Type` 根据图片类型设置（例如 `image/jpeg`）。

**错误响应示例（无法获取壁纸数据）**

```json
{ "code": 500, "error": "无法获取壁纸数据" }
```

**错误响应示例（参数错误）**

```json
{ "code": 400, "error": "无效的 format 参数" }
```

## 4. 响应字段说明

| 字段        | 类型   | 说明                                          |
|-------------|--------|----------------------------------------------|
| code        | int    | 响应状态码（200 表示成功，400 表示参数错误，500 表示服务器错误） |
| status      | string | 操作结果状态（仅 JSON 格式，`success` 表示成功） |
| error       | string | 错误信息（仅在出错时返回）                   |
| url         | string | 壁纸的完整 URL（仅 JSON 格式） |
| title       | string | 壁纸的标题（仅 JSON 格式） |
| description | string | 壁纸的描述（仅 JSON 格式） |