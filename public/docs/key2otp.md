### 1. 基本调用

> 服务器不会记录您的任何请求，也不会窃取您的任何隐私！

基本API地址
```url
https://zeapi.ink/v1/key2otp.php
```


通过以下 URL 或 POST 请求生成一次性密码（OTP）：
```url
https://zeapi.ink/v1/key2otp.php?secret=GEZDGNBVGY3TQOI&algorithm=sha1&digits=6&period=30
```

或通过 POST 请求发送 JSON 数据：
```json
{
    "secret": "GEZDGNBVGY3TQOI",
    "algorithm": "sha1",
    "digits": 6,
    "period": 30
}
```

Shell请求代码如下
```shell
curl -X POST https://zeapi.ink/v1/key2otp.php \
-d "secret=GEZDGNBVGY3TQOI=" \
-d "algorithm=sha256" \
-d "digits=6" \
-d "period=30"
```

### 2. 请求参数说明
| 参数      | 类型   | 必填 | 默认值 | 说明                              |
|-----------|--------|------|--------|----------------------------------|
| secret    | string | 是   | 无     | Base32 编码的 TOTP 密钥（只允许 A-Z 和 2-7） |
| algorithm | string | 否   | sha1   | 加密算法，支持 sha1、sha256、sha512 |
| digits    | int    | 否   | 6      | OTP 位数，支持 6 到 8 位         |
| period    | int    | 否   | 30     | OTP 有效期（秒），范围 1 到 300 秒 |

### 3. JSON 响应格式
成功响应示例：
```json
{
    "status": "success",
    "otp": "123456",
    "algorithm": "sha1",
    "digits": 6,
    "period": 30,
    "expires_at": "2025-07-06 10:14:30"
}
```

错误响应示例（缺少密钥）：
```json
{
    "status": "error",
    "message": "Missing secret parameter"
}
```

错误响应示例（无效密钥格式）：
```json
{
    "status": "error",
    "message": "Invalid secret format. Must contain only A-Z and 2-7 (base32)."
}
```

错误响应示例（不支持的算法）：
```json
{
    "status": "error",
    "message": "Invalid algorithm. Supported values: sha1, sha256, sha512"
}
```

错误响应示例（无效位数）：
```json
{
    "status": "error",
    "message": "Invalid digits. Must be between 6 and 8."
}
```

错误响应示例（无效有效期）：
```json
{
    "status": "error",
    "message": "Invalid period. Must be between 1 and 300 seconds."
}
```

错误响应示例（生成 OTP 失败）：
```json
{
    "status": "error",
    "message": "Failed to generate OTP: [错误信息]"
}
```

### 4. 响应字段说明
| 字段          | 类型   | 说明                              |
|---------------|--------|----------------------------------|
| status        | string | 请求状态（success/error）        |
| otp           | string | 生成的一次性密码（TOTP）         |
| algorithm     | string | 使用的加密算法（sha1/sha256/sha512） |
| digits        | int    | OTP 位数                        |
| period        | int    | OTP 有效期（秒）                |
| expires_at    | string | OTP 有效期时间（格式：YYYY-MM-DD HH:MM:SS） |
| message       | string | 操作结果消息（仅在错误时返回）   |