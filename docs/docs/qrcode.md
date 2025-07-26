# QR Code Generation

## 1. Basic Usage
Generate a QR code image using the following URL:
```url
https://zeapi.ink/v1/qrcode.php?text=梦泽&size=100&margin=4&format=jpg
```

## 2. Request Parameters
| Parameter | Type   | Required | Default Value | Description                              |
|-----------|--------|----------|---------------|------------------------------------------|
| text      | string | Yes      | None          | Text content to encode                   |
| size      | int    | No       | 100           | QR code image size (pixels, equal width and height) |
| margin    | int    | No       | 4             | QR code margin (pixels)                  |
| format    | string | No       | jpg           | Image format (supports jpg, png, etc.)   |

## 3. JSON Response Format
Success response example:
```json
{
    "status": "success",
    "data": {
        "text": "梦泽",
        "image": "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAIAAAAABMCaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACAElEQVR4nO2cS4rEMAwFx0Pf/8rpbTYCCZUdpalaNjO2KcTDv3hd1/UnPf6fHsAvoEQAJQIoEUCJAEoEUCKAEgGUCKBEACUCfDJ/tNbCO76v2TvtU+1k2o+wEgGUCKBEgFQm3unsP1Yzq5N3J8dpJQIoEUCJAOVMvJPJjkw2RdkXtV/NO2qcEVYigBIBlAjQysTdZLJywrm5lQigRAAlAozIxEzG7d437GAlAigRQIkArUzcPUeLsrLa7+5xWokASgRQIkA5EyfM0TLzypPjtBIBlAigRIA1YT/u5JnyDqxEACUCKBEAu59Yna+dvCuT6bczTisRQIkASgRIZWLmfKN6TlLtt0o0nkz2eT/xAZQIoESA8jwxyo7q73c6edSZ31FrcCsRQIkASgRI7SdWs2xHPmZ+z4w56quDlQigRAAlApTPWE5+nxe1Ux0PldERViKAEgGUCPD6c2fqf/2272GUCKBEgNbaucOOfqtZmZl7Ok88hBIBlAgw4l0cKvtO7iHesRIBlAigRIBx7+Jk2t+xXu6so61EACUCKBFgxBsQGU7eVaxiJQIoEUCJACMykTrrqN7Rod4isxIBlAigRIBx7+J0cu2pM3QrEUCJAEoEeOW7OJ2s9Nu+oSgRQIkAI+4nvh0rEUCJAEoEUCKAEgGUCKBEACUCKBFAiQBKBPgCQDH81/oqtsQAAAAASUVORK5CYII=",
        "format": "jpg",
        "size": 100,
        "margin": 4
    }
}
```

Error response example (invalid parameter):
```json
{
    "status": "error",
    "message": "Missing required parameter: text",
    "data": {}
}
```

## 4. Response Fields Description
| Field         | Type   | Description                              |
|---------------|--------|------------------------------------------|
| status        | string | Request status (success/error)           |
| message       | string | Operation result message (returned only on error) |
| data.text     | string | Input text content                      |
| data.image    | string | Base64-encoded QR code image data       |
| data.format   | string | Image format (jpg, png, etc.)           |
| data.size     | int    | QR code image size (pixels)             |
| data.margin   | int    | QR code margin (pixels)                 |