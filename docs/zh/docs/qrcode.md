# 二维码生成

## 1. 基本调用
通过以下 URL 生成 QR 码图片：
```url
https://zeapi.ink/v1/qrcode.php?text=梦泽&size=100&margin=4&format=jpg
```

## 2. 请求参数说明
| 参数   | 类型   | 必填 | 默认值 | 说明                              |
|--------|--------|------|--------|----------------------------------|
| text   | string | 是   | 无     | 要编码的文本内容                  |
| size   | int    | 否   | 100    | QR 码图片尺寸（像素，宽高相等）  |
| margin | int    | 否   | 4      | QR 码边距（像素）                |
| format | string | 否   | jpg    | 图片格式（支持 jpg、png 等）     |

## 3. JSON 响应格式
成功响应示例：
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

错误响应示例（无效参数）：
```json
{
    "status": "error",
    "message": "Missing required parameter: text",
    "data": {}
}
```

## 4. 响应字段说明
| 字段          | 类型   | 说明                              |
|---------------|--------|----------------------------------|
| status        | string | 请求状态（success/error）        |
| message       | string | 操作结果消息（仅在错误时返回）   |
| data.text     | string | 输入的文本内容                   |
| data.image    | string | Base64 编码的 QR 码图片数据      |
| data.format   | string | 图片格式（jpg、png 等）          |
| data.size     | int    | QR 码图片尺寸（像素）            |
| data.margin   | int    | QR 码边距（像素）                |
