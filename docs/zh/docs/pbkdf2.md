# 零知识密码生成
## 1. 基本调用

::: tip
服务器不会记录您的任何请求，也不会窃取您的任何隐私！所有密码生成均在内存内完成，无落盘操作，确保零知识安全。
:::

基本API地址
```url
https://zeapi.ink/v1/pbkdf2.php
```

通过以下 URL 或 POST 请求生成基于 PBKDF2 的唯一密码：
```url
https://zeapi.ink/v1/pbkdf2.php?master_password=mysecret&website_name=example.com&algorithm=sha256&iteration_length=10000&key_length=32
```

或通过 POST 请求发送 JSON 数据：
```json
{
    "master_password": "mysecret",
    "website_name": "example.com",
    "algorithm": "sha256",
    "iteration_length": 10000,
    "key_length": 32
}
```

Shell 请求代码如下：
```shell
curl -X POST https://zeapi.ink/v1/pbkdf2.php \
-H "Content-Type: application/json" \
-d '{
    "master_password": "mysecret",
    "website_name": "example.com",
    "algorithm": "sha256",
    "iteration_length": 10000,
    "key_length": 32
}'
```

## 2. 请求参数说明
| 参数             | 类型   | 必填 | 默认值   | 说明                              |
|------------------|--------|------|----------|----------------------------------|
| master_password  | string | 是   | 无       | 用户的主密码，用于生成唯一密码    |
| website_name     | string | 是   | 无       | 目标网站名称或域名，用于生成盐值  |
| algorithm        | string | 否   | sha256   | PBKDF2 加密算法，支持 sha256、sha512 |
| iteration_length | int    | 否   | 10000    | PBKDF2 迭代次数，建议不少于 1000 |
| key_length       | int    | 否   | 32       | 生成密码的长度（字节），建议 16-64 |

## 3. JSON 响应格式
成功响应示例：
```json
{
    "status": "success",
    "password": "生成的base64编码密码",
    "algorithm": "sha256",
    "iteration_length": 10000,
    "key_length": 32
}
```

错误响应示例（缺少主密码或网站名）：
```json
{
    "status": "error",
    "message": "主密码和网站名是必填项"
}
```

错误响应示例（不支持的算法）：
```json
{
    "status": "error",
    "message": "不支持的算法"
}
```

错误响应示例（无效迭代长度或密钥长度）：
```json
{
    "status": "error",
    "message": "迭代长度或密钥长度无效"
}
```

## 4. 响应字段说明
| 字段             | 类型   | 说明                              |
|------------------|--------|----------------------------------|
| status           | string | 请求状态（success/error）        |
| password         | string | 生成的密码（base64 编码）        |
| algorithm        | string | 使用的加密算法（sha256/sha512）  |
| iteration_length | int    | PBKDF2 迭代次数                 |
| key_length       | int    | 生成密码的长度（字节）           |
| message          | string | 操作结果消息（仅在错误时返回）   |