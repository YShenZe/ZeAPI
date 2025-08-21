# SSL证书信息查询 API

## 1. 基本调用

::: tip
此 API 用于查询指定域名的 SSL 证书信息，包括颁发者、有效期、序列号等。
:::

基本 API 地址

```txt
https://zeapi.ink/v1/sslinfo.php
```

通过以下 URL 或 POST 请求获取 SSL 证书信息：

```txt
https://zeapi.ink/v1/sslinfo.php?domain=zeapi.ink
```

或通过 POST 请求发送 JSON 数据：

```json
{
    "domain": "zeapi.ink"
}
```

Shell 请求代码如下：

```shell
curl -X GET "https://zeapi.ink/v1/sslinfo.php?domain=zeapi.ink"
```

或使用 POST：

```shell
curl -X POST https://zeapi.ink/v1/sslinfo.php \
-H "Content-Type: application/json" \
-d '{"domain": "zeapi.ink"}'
```

## 2. 请求参数说明

| 参数   | 类型   | 必填 | 默认值 | 说明                       |
|--------|--------|------|--------|----------------------------|
| domain | string | 是   | 无     | 目标域名，例如 `zeapi.ink` 或 `https://zeapi.ink` |

## 3. JSON 响应格式

成功响应示例：

```json
{
    "status": "success",
    "message": "",
    "data": {
        "domain": "zeapi.ink",
        "issuer": "Let's Encrypt",
        "commonName": "zeapi.ink",
        "validFrom": "2025-07-20 00:05:38",
        "validTo": "2025-10-18 00:05:37",
        "serialNumber": "0x057735F021EF18DF2AB614D06227EEEDDD27",
        "signatureType": "ecdsa-with-SHA384",
        "daysUntilExpiry": 57
    }
}
```

错误响应示例（缺少 domain 参数）：

```json
{
    "status": "error",
    "message": "请提供域名参数",
    "data": null
}
```

错误响应示例（域名格式不合法）：

```json
{
    "status": "error",
    "message": "无效的域名格式",
    "data": null
}
```

错误响应示例（无法连接或获取证书）：

```json
{
    "status": "error",
    "message": "无法连接到 zeapi.ink: Connection timed out",
    "data": null
}
```

## 4. 响应字段说明

| 字段            | 类型   | 说明                                      |
|-----------------|--------|------------------------------------------|
| status          | string | 请求状态，`success` 或 `error`           |
| message         | string | 错误信息（仅在请求失败时返回）           |
| data            | object | 证书信息（仅在请求成功时返回）           |
| data.domain     | string | 请求的域名                              |
| data.issuer     | string | 证书颁发者组织（从 issuer.O 提取）      |
| data.commonName | string | 证书通用名称（CN，从 subject.CN 提取）  |
| data.validFrom  | string | 证书有效起始时间（格式：YYYY-MM-DD HH:MM:SS） |
| data.validTo    | string | 证书有效截止时间（格式：YYYY-MM-DD HH:MM:SS） |
| data.serialNumber | string | 证书序列号                              |
| data.signatureType | string | 签名算法类型（如 ecdsa-with-SHA384）    |
| data.daysUntilExpiry | number | 证书距离过期的剩余天数                 |