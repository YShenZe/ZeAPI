# Base64 ⇄ 图片

## 1. 基本调用

::: tip
服务器不会记录您的任何请求，也不会窃取您的任何隐私！
:::

**基本API地址**
```url
https://zeapi.ink/v1/b64toimg.php
```

**通过GET请求将base64转换为图片：**
```url
https://zeapi.ink/v1/b64toimg.php?base64=<要解码的base64内容>&type=jpeg
```

**通过POST请求将图片转换为base64：**
使用form-data上传图片文件，字段名为"image"

**Shell请求代码如下**
```shell
curl -X POST https://zeapi.ink/v1/b64toimg.php -F "image=@文件路径"
```

## 2. 请求参数说明

**GET请求参数：**
| 参数   | 类型   | 必填 | 默认值 | 说明                        |
|--------|--------|------|--------|----------------------------|
| base64 | string | 是   | 无     | base64编码的图片数据       |
| type   | string | 是   | 无     | 图片类型，如jpeg, png, gif, bmp |

**POST请求：**
上传图片文件，字段名为"image"

## 3. 响应格式

**GET请求：**
- **成功时**：返回图片二进制数据，`Content-Type`为`image/[type]`  
- **失败时**：返回JSON格式的错误信息

**错误响应示例（缺少参数）：**
```json
{
    "status": "error",
    "message": "Missing base64 or type parameter"
}
```

**错误响应示例（不支持的图片类型）：**
```json
{
    "status": "error",
    "message": "Unsupported image type. Supported types: jpeg, png, gif, bmp"
}
```

**错误响应示例（无效的base64字符串）：**
```json
{
    "status": "error",
    "message": "Invalid base64 string"
}
```

**POST请求：**
- **成功时**：返回JSON格式的base64编码和图片类型  
**成功响应示例：**
```json
{
    "status": "success",
    "base64": "encoded_string",
    "type": "image/jpeg"
}
```

- **失败时**：返回JSON格式的错误信息  
**错误响应示例（未上传图片）：**
```json
{
    "status": "error",
    "message": "No image uploaded or upload error"
}
```

**错误响应示例（上传的文件不是图片）：**
```json
{
    "status": "error",
    "message": "Uploaded file is not an image"
}
```

## 4. 响应字段说明

**POST请求成功响应：**
| 字段   | 类型   | 说明                        |
|--------|--------|----------------------------|
| status | string | 请求状态，success          |
| base64 | string | base64编码的图片数据       |
| type   | string | 图片的MIME类型，如image/jpeg |

**错误响应：**
| 字段    | 类型   | 说明                        |
|---------|--------|----------------------------|
| status  | string | 请求状态，error            |
| message | string | 错误信息                   |

---