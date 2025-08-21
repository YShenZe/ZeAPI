# JWT 解析与验证 API
## 1. 基本调用

::: tip
此 API 用于解析和验证 JWT（JSON Web Token，基于 HS256 算法）。返回解码后的 payload 或错误信息。
:::

基本 API 地址

```txt
https://zeapi.ink/v1/jwt.php
```

通过以下 GET 请求解析 JWT：

```txt
https://zeapi.ink/v1/jwt.php?token=your_jwt_token
```

或通过 POST 请求发送 JSON 数据：

```json
{
    "token": "your_jwt_token"
}
```

Shell 请求代码如下：

```shell
curl -X GET "https://zeapi.ink/v1/jwt.php?token=your_jwt_token"
```

或使用 POST：

```shell
curl -X POST https://zeapi.ink/v1/jwt.php \
-H "Content-Type: application/json" \
-d '{"token": "your_jwt_token"}'
```

## 2. 请求参数说明

| 参数  | 类型   | 必填 | 默认值 | 说明                              |
|-------|--------|------|--------|-----------------------------------|
| token | string | 是   | 无     | 要解析和验证的 JWT 令牌          |

::: tip
- GET 请求通过查询参数 `token` 提供 JWT。
- POST 请求通过 JSON 数据的 `token` 字段提供 JWT。
- JWT 必须使用 HS256 算法签名，且签名密钥与服务器端一致。
:::

## 3. JSON 响应格式

成功响应示例：

```json
{
    "status": "success",
    "data": {
        "sub": "user123",
        "name": "John Doe",
        "iat": 1697059200,
        "exp": 1697062800
    }
}
```

错误响应示例（缺少 token 参数）：

```json
{
    "error": "Bad Request",
    "message": "Missing token parameter"
}
```

错误响应示例（令牌已过期）：

```json
{
    "error": "Unauthorized",
    "message": "Token has expired"
}
```

错误响应示例（无效签名）：

```json
{
    "error": "Unauthorized",
    "message": "Invalid token signature"
}
```

错误响应示例（无效令牌）：

```json
{
    "error": "Bad Request",
    "message": "Invalid token"
}
```

## 4. 响应字段说明

| 字段        | 类型   | 说明                                      |
|-------------|--------|------------------------------------------|
| status      | string | 请求状态，成功时为 `success`             |
| data        | object | 解码后的 JWT payload，包含令牌中的声明（如 `sub`, `name`, `iat`, `exp` 等） |
| error       | string | 错误信息（仅在请求失败时返回）           |
| message     | string | 详细错误描述（仅在请求失败时返回）       |