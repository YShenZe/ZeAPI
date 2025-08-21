# UUID 生成器 API
## 1. 基本调用

::: tip
此 API 用于生成符合 RFC 4122 标准的 UUID v4（随机 UUID）。支持生成单个或多个 UUID。
:::

基本 API 地址

```txt
https://zeapi.ink/v1/uuid.php
```

通过以下 GET 请求生成 UUID：

```txt
https://zeapi.ink/v1/uuid.php
```

或通过 GET 请求指定生成数量：

```txt
https://zeapi.ink/v1/uuid.php?count=5
```

或通过 POST 请求发送 JSON 数据：

```json
{
    "count": 5
}
```

Shell 请求代码如下：

```shell
curl -X GET "https://zeapi.ink/v1/uuid.php?count=5"
```

或使用 POST：

```shell
curl -X POST https://zeapi.ink/v1/uuid.php \
-H "Content-Type: application/json" \
-d '{"count": 5}'
```

## 2. 请求参数说明

| 参数  | 类型   | 必填 | 默认值 | 说明                              |
|-------|--------|------|--------|-----------------------------------|
| count | int    | 否   | 1      | 要生成的 UUID 数量（1 到 100）    |

::: tip
- GET 请求通过查询参数 `count` 指定生成数量。
- POST 请求通过 JSON 数据的 `count` 字段指定生成数量。
- 最大生成数量限制为 100，以防止资源滥用。
:::

## 3. JSON 响应格式

成功响应示例（单个 UUID）：

```json
{
    "status": "success",
    "data": [
        "123e4567-e89b-12d3-a456-426614174000"
    ]
}
```

成功响应示例（多个 UUID）：

```json
{
    "status": "success",
    "data": [
        "123e4567-e89b-12d3-a456-426614174000",
        "987fcdeb-1234-5678-9abc-def012345678",
        "456789ab-cdef-1234-5678-901234567890"
    ]
}
```

错误响应示例（无效 count 参数）：

```json
{
    "error": "Bad Request",
    "message": "Count must be between 1 and 100"
}
```

错误响应示例（不支持的请求方法）：

```json
{
    "error": "Method Not Allowed"
}
```

错误响应示例（服务器错误）：

```json
{
    "error": "Internal Server Error",
    "message": "Failed to generate UUID"
}
```

## 4. 响应字段说明

| 字段        | 类型   | 说明                                      |
|-------------|--------|------------------------------------------|
| status      | string | 请求状态，成功时为 `success`             |
| data        | array  | UUID 字符串列表                          |
| error       | string | 错误信息（仅在请求失败时返回）           |
| message     | string | 详细错误描述（仅在请求失败时返回）       |