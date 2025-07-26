# Minecraft Skin/Cape URL Retrieval

## 1. Basic Usage

::: tip
The server will not log any of your requests or compromise your privacy in any way!
:::

**Base API URL**
```url
https://zeapi.ink/v1/mcinfo.php
```

Query Minecraft user UUID, skin, and cape information using the following URL or POST request:

**GET Request Example**:
```url
https://zeapi.ink/v1/mcinfo.php?username=jeb_
```

**POST Request Example** (sending JSON data):
```json
{
    "username": "jeb_"
}
```

**Shell Request Example**:
```shell
curl -X POST https://zeapi.ink/v1/mcinfo.php \
-H "Content-Type: application/json" \
-d '{"username":"jeb_"}'
```

---

## 2. Request Parameters

| Parameter  | Type   | Required | Default Value | Description                   |
|------------|--------|----------|---------------|-------------------------------|
| username   | string | Yes      | None          | Minecraft username            |

---

## 3. JSON Response Format

**Success Response Example**:
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

**Error Response Example (missing username)**:
```json
{
    "status": "error",
    "message": "Username is required"
}
```

**Error Response Example (invalid username or UUID not found)**:
```json
{
    "status": "error",
    "message": "Invalid username or UUID not found"
}
```

**Error Response Example (failed to fetch profile data)**:
```json
{
    "status": "error",
    "message": "Failed to fetch profile data"
}
```

**Error Response Example (no texture data found)**:
```json
{
    "status": "error",
    "message": "No texture data found"
}
```

**Error Response Example (server error)**:
```json
{
    "status": "error",
    "message": "Server error: [error message]"
}
```

---

## 4. Response Fields Description

| Field          | Type   | Description                              |
|----------------|--------|------------------------------------------|
| status         | string | Request status (success/error)           |
| message        | string | Operation result message                |
| data           | object | User information data (returned only on success) |
| data.username  | string | Minecraft username                      |
| data.uuid      | string | User's UUID                             |
| data.skin      | object | Skin information, contains url field (may be null) |
| data.skin.url  | string | URL of the skin texture (if exists)     |
| data.cape      | object | Cape information, contains url field (may be null) |
| data.cape.url  | string | URL of the cape texture (if exists)     |