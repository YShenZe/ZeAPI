### 1. 基本调用

> 服务器不会记录您的任何请求，也不会窃取您的任何隐私！

**基本 API 地址**
```url
https://zeapi.ink/v1/mcinfo.php
```

通过以下 URL 或 POST 请求查询 Minecraft 用户的 UUID、皮肤和披风信息：

**GET 请求示例**：
```url
https://zeapi.ink/v1/mcinfo.php?username=jeb_
```

**POST 请求示例**（发送 JSON 数据）：
```json
{
    "username": "jeb_"
}
```

**Shell 请求代码示例**：
```shell
curl -X POST https://zeapi.ink/v1/mcinfo.php \
-H "Content-Type: application/json" \
-d '{"username":"jeb_"}'
```

---

### 2. 请求参数说明

| 参数      | 类型   | 必填 | 默认值 | 说明                              |
|-----------|--------|------|--------|----------------------------------|
| username  | string | 是   | 无     | Minecraft 用户名                 |

---

### 3. JSON 响应格式

**成功响应示例**：
```json
{
    "status": "success",
    "message": "Fetch OK!",
    "data": {
        "username": "jeb_",
        "uuid": "853c80ef3c3749fdaa49938b674adae6",
        "skin": {
            "url": "http://textures.minecraft.net/texture/7fd9ba42a7c81eeea22f1524271ae85a8e045ce0af5a6ae16c6406ae917e68b5"
        },
        "cape": {
            "url": "http://textures.minecraft.net/texture/9e507afc56359978a3eb3e32367042b853cddd0995d17d0da995662913fb00f7"
        }
    }
}
```

**错误响应示例（缺少用户名）**：
```json
{
    "status": "error",
    "message": "Username is required"
}
```

**错误响应示例（无效用户名或 UUID 未找到）**：
```json
{
    "status": "error",
    "message": "Invalid username or UUID not found"
}
```

**错误响应示例（无法获取用户档案数据）**：
```json
{
    "status": "error",
    "message": "Failed to fetch profile data"
}
```

**错误响应示例（未找到纹理数据）**：
```json
{
    "status": "error",
    "message": "No texture data found"
}
```

**错误响应示例（服务器错误）**：
```json
{
    "status": "error",
    "message": "Server error: [错误信息]"
}
```

---

### 4. 响应字段说明

| 字段          | 类型   | 说明                              |
|---------------|--------|----------------------------------|
| status        | string | 请求状态（success/error）        |
| message       | string | 操作结果消息                    |
| data          | object | 用户信息数据（仅在成功时返回）   |
| data.username | string | Minecraft 用户名                 |
| data.uuid     | string | 用户的 UUID                     |
| data.skin     | object | 皮肤信息，包含 url 字段（可能为 null） |
| data.skin.url | string | 皮肤纹理的 URL（如果存在）       |
| data.cape     | object | 披风信息，包含 url 字段（可能为 null） |
| data.cape.url | string | 披风纹理的 URL（如果存在）       |