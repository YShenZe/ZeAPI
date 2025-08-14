# Retrieve QQ Nickname and Avatar

## 1. Basic Usage
Use the following URL to retrieve a QQ nickname and avatar:

```txt
https://zeapi.ink/v1/qqinfo.php?qq=94113786&size=100
```

## 2. Request Parameters
| Parameter | Type   | Required | Default Value | Description                              |
|-----------|--------|----------|---------------|------------------------------------------|
| qq        | string | Yes      | None          | The QQ number to query                   |
| size      | int    | No       | 100           | Avatar size (pixels, equal width and height) |

**Size Parameter Mapping**:
| Size Value | Actual Size |
|------------|-------------|
| 1          | 40×40       |
| 2          | 40×40       |
| 3          | 100×100     |
| 4          | 140×140     |
| 5          | 640×640     |
| 40         | 40×40       |
| 100        | 100×100     |

## 3. JSON Response Format

**Success Response Example**:
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

**Error Response Example**:
```json
{
    "status": "error",
    "message": "Missing or invalid parameter: qq"
}
```

## 4. Response Fields Description
| Field          | Type   | Description                              |
|----------------|--------|------------------------------------------|
| status         | string | Request status (success/error)           |
| message        | string | Error message (returned only when status=error) |
| data.qq        | string | Queried QQ number                       |
| data.nickname  | string | QQ nickname                             |
| data.avatar    | string | Base64-encoded avatar image data        |
| data.size      | int    | Actual size of the returned avatar      |