# Base64 ⇄ 文本

## 1. 基本调用

::: tip
服务器不会记录您的任何请求，也不会窃取您的任何隐私！
:::

**基本API地址**

```url
https://zeapi.ink/v1/b64totext.php
```

通过以下 URL 或 POST 请求进行base64编码或解码：

```url
https://zeapi.ink/v1/b64totext.php?operation=encode&data=Hello%20World
```

或通过 POST 请求发送 JSON 数据：

```json
{
    "operation": "decode",
    "data": "SGVsbG8gV29ybGQ="
}
```

**Shell请求代码如下**

```shell
curl -X POST https://zeapi.ink/v1/b64totext.php \
-d "operation=encode" \
-d "data=Hello World"
```

## 2. 请求参数说明

| 参数      | 类型   | 必填 | 默认值 | 说明                              |
|-----------|--------|------|--------|----------------------------------|
| operation | string | 是   | 无     | 操作类型，支持 "encode" 或 "decode" |
| data      | string | 是   | 无     | 需要处理的数据                    |

## 3. JSON 响应格式

**成功响应示例（编码）：**

```json
{
    "status": "success",
    "result": "SGVsbG8gV29ybGQ=",
    "operation": "encode"
}
```

**成功响应示例（解码）：**

```json
{
    "status": "success",
    "result": "Hello World",
    "operation": "decode"
}
```

**错误响应示例（缺少参数）：**

```json
{
    "status": "error",
    "message": "Missing operation or data parameter"
}
```

**错误响应示例（无效操作类型）：**

```json
{
    "status": "error",
    "message": "Invalid operation. Must be 'encode' or 'decode'."
}
```

**错误响应示例（解码失败）：**

```json
{
    "status": "error",
    "message": "Failed to decode base64 data: Invalid base64 string"
}
```

### 4. 响应字段说明

| 字段          | 类型   | 说明                              |
|---------------|--------|----------------------------------|
| status        | string | 请求状态（success/error）        |
| result        | string | 处理后的数据                     |
| operation     | string | 进行的操作类型（encode/decode）  |
| message       | string | 操作结果消息（仅在错误时返回）   |

---