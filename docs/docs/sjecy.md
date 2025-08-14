# 随机二次元图片 API

## 1. 基本调用
![API调用Demo](https://zeapi.ink/v1/sjecy.php)

> **由于图片文件存储在服务器上，请确保网络连接稳定以获取最佳体验。**

**基本 API 地址**


```txt
https://zeapi.ink/v1/sjecy.php
```

通过 GET 请求获取随机二次元图片：


```txt
https://zeapi.ink/v1/sjecy.php
```

**Shell 请求示例**

```shell
curl https://zeapi.ink/v1/sjecy.php
```

**获取 JSON 格式输出**

在 URL 中添加 `format=json` 参数以获取 JSON 格式的图片信息：


```txt
https://zeapi.ink/v1/sjecy.php?format=json
```

**Shell 请求示例（JSON 格式）**

```shell
curl https://zeapi.ink/v1/sjecy.php?format=json
```

**POST 请求示例（JSON 格式）**

通过 POST 请求发送 JSON 数据获取图片信息：

```shell
curl -X POST -H "Content-Type: application/json" -d '{"format":"json"}' https://zeapi.ink/v1/sjecy.php
```

## 2. 请求参数说明

| 参数   | 类型   | 必填 | 默认值 | 说明                              |
|--------|--------|------|--------|----------------------------------|
| format | string | 否   | image  | 输出格式，可选值：`json`（返回图片信息）或 `image`（直接返回图片数据） |

## 3. JSON 响应格式

**成功响应示例（JSON 格式）**

```json
{
    "status": "success",
    "image": "img_123.jpg",
    "url": "https://zeapi.ink/v1/images/img_123.jpg"
}
```

**成功响应示例（image 格式）**

直接返回图片的二进制数据，`Content-Type` 根据图片扩展名设置（例如 `image/jpeg`）。

**错误响应示例（图片未找到）**

```json
{ "code": 404, "error": "Image not found: img_123.jpg" }
```

**错误响应示例（服务器错误）**

```json
{ "code": 500, "error": "Server error: [错误描述]" }
```

## 4. 响应字段说明

| 字段        | 类型   | 说明                                          |
|-------------|--------|----------------------------------------------|
| code        | int    | 响应状态码（200 表示成功，404 表示图片未找到，500 表示服务器错误） |
| status      | string | 操作结果状态（仅 JSON 格式，`success` 表示成功） |
| error       | string | 错误信息（仅在出错时返回）                   |
| image       | string | 图片文件名（仅 JSON 格式，例如 `img_123.jpg`） |
| url         | string | 图片的完整 URL（仅 JSON 格式，例如 `https://zeapi.ink/v1/images/img_123.jpg`） |