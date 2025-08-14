# 微信域名拦截检测 API

## 1. 基本调用

::: tip
服务器不会记录您的任何请求，也不会窃取您的任何隐私！
:::

基本API地址

```txt
https://zeapi.ink/v1/txljjc.php
```

通过以下 URL 发送 GET 请求检测微信域名是否被拦截：

```txt
https://zeapi.ink/v1/txljjc.php?url=https://example.com
```

Shell 请求代码如下：

```shell
curl -X GET "https://zeapi.ink/v1/txljjc.php?url=https://example.com"
```

## 2. 请求参数说明

| 参数 | 类型   | 必填 | 默认值 | 说明                     |
|------|--------|------|--------|-------------------------|
| url  | string | 是   | 无     | 需要检测的域名 URL      |

## 3. JSON 响应格式

成功响应示例（域名正常）：

```json
{
    "code": 200,
    "msg": "域名正常"
}
```

成功响应示例（域名被封）：

```json
{
    "code": 202,
    "msg": "域名被封"
}
```

错误响应示例（参数为空）：

```json
{
    "code": 202,
    "msg": "请传入Url"
}
```

## 4. 响应字段说明

| 字段 | 类型   | 说明                                   |
|------|--------|---------------------------------------|
| code | int    | 状态码（200 表示正常，202 表示错误或域名被封） |
| msg  | string | 操作结果消息                         |