## 使用说明

### 基本调用
```url
https://example.com/api
```

### JSON 响应格式
成功响应示例：
```json
{
    "status": "success",
    "message": "Example"
}```

错误响应示例（无效域名）：
```json
{
    "status": "error",
    "message": "Example Error"
}
```

错误响应示例（查询失败）：
```json
{
    "status": "success",
    "message": "Example"
}
```

### 响应字段说明

| 字段            | 类型   | 说明                          |
|-----------------|--------|-----------------------------|
| Example          | string | Example    |