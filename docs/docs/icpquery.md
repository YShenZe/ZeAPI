# 域名 ICP 备案查询

## 1. 基本调用

> **由于代码爬虫写的不是特别好，这也导致了这个接口很不稳定，时不时就无法查询**

**基本 API 地址**


```txt
https://icp.zeapi.ink/query/<域名>
```

通过 GET 请求查询企业或域名的 ICP 备案信息：


```txt
https://icp.zeapi.ink/query/qq.com
```

**Shell 请求示例**

```shell
curl https://icp.zeapi.ink/query/qq.com
```

**强制刷新缓存**

在 URL 中添加 `no_cache` 参数以强制刷新缓存：


```txt
https://icp.zeapi.ink/query/qq.com?no_cache
```

**Shell 请求示例（强制刷新缓存）**

```shell
    curl https://icp.zeapi.ink/query/qq.com?no_cache
```

## 2. 请求参数说明

| 参数      | 类型   | 必填 | 默认值 | 说明                              |
|-----------|--------|------|--------|----------------------------------|
| <域名> | string | 是   | 无     | 要查询的域名（如 qq.com） |

## 3. JSON 响应格式

**成功响应示例**

```json
{
    "code": 200,
    "data": [
        {
            "domain_approve_date": "2022-09-06 15:51:52",
            "domain_content_approved": "文化、文化、宗教、出版、文化、新闻、文化、宗教、宗教、新闻",
            "domain_licence": "粤B2-20090059",
            "domain_name": "qq.com",
            "domain_owner": "深圳市腾讯计算机系统有限公司",
            "domain_status": "否",
            "domain_type": "企业",
            "website_licence": "粤B2-20090059-5"
        }
    ],
    "msg": "success",
    "total": 1
}
```

**错误响应示例（未找到记录）**

```json
{ "code": 500, "msg": "查询出错" } 
```

**错误响应示例（无效的企业名或域名）**

```json
{ "code": 500, "msg": "查询出错" } 
```

## 4. 响应字段说明

| 字段                 | 类型   | 说明                                          |
|----------------------|--------|----------------------------------------------|
| code                 | int    | 响应状态码（200 表示成功，404 表示未找到，400 表示无效请求） |
| msg                  | string | 操作结果消息（success 或错误描述）            |
| data                 | array  | 包含查询结果的数组，可能包含多个备案记录       |
| data[].domain_approve_date | string | 域名备案审批时间（格式：YYYY-MM-DD HH:MM:SS） |
| data[].domain_content_approved | string | 备案许可的内容（如文化、新闻等）              |
| data[].domain_licence | string | 域名备案号                                   |
| data[].domain_name   | string | 查询的域名                                   |
| data[].domain_owner  | string | 域名所有人（企业或个人名称）                 |
| data[].domain_status | string | 域名状态（如“是”或“否”）                     |
| data[].domain_type   | string | 备案类型（如“企业”或“个人”）                 |
| data[].website_licence | string | 网站备案号                                   |
| total                | int    | 返回的记录总数                               |