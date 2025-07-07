## 1. 基本调用
通过以下URL获取QQ昵称与头像：
```url
https://api.yourdomain.com/qqinfo.php?qq=94113786&size=100
```

## 2. 请求参数说明
| 参数   | 类型   | 必填 | 默认值 | 说明                              |
|--------|--------|------|--------|----------------------------------|
| qq     | string | 是   | 无     | 要查询的QQ号码                   |
| size   | int    | 否   | 100    | 头像尺寸（像素，宽高相等）       |

**尺寸参数对应表**：
| size值 | 实际尺寸  |
|---------|----------|
| 1       | 40×40    |
| 2       | 40×40    |
| 3       | 100×100  |
| 4       | 140×140  |
| 5       | 640×640  |
| 40      | 40×40    |
| 100     | 100×100  |

## 3. JSON响应格式

**成功响应示例**：
```json
{
    "status": "success",
    "data": {
        "qq": "94113786",
        "nickname": "梦泽",
        "avatar": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQE...",
        "size": 100
    }
}
```

**错误响应示例**：
```json
{
    "status": "error",
    "message": "Missing or invalid parameter: qq"
}
```

## 4. 响应字段说明
| 字段          | 类型   | 说明                              |
|---------------|--------|----------------------------------|
| status        | string | 请求状态（success/error）        |
| message       | string | 错误信息（仅在status=error时返回）|
| data.qq       | string | 查询的QQ号码                     |
| data.nickname | string | QQ昵称                           |
| data.avatar   | string | Base64编码的头像图片数据         |
| data.size     | int    | 返回的头像实际尺寸               |