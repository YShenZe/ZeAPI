# Base64 ⇄ Image Conversion API  

## 1. Basic Usage  
::: tip  
The server **does not record** any of your requests nor access your private data!  
:::  

**Base API URL**  

```txt  
https://zeapi.ink/v1/b64toimg.php  
```  

**Convert Base64 to Image via GET Request:**  

```txt  
https://zeapi.ink/v1/b64toimg.php?base64=<base64_to_decode>&type=jpeg  
```  

**Convert Image to Base64 via POST Request:**  
Upload an image file using `form-data` with the field name **`"image"`**.  

**Shell Request Example:**  
```shell  
curl -X POST https://zeapi.ink/v1/b64toimg.php -F "image=@/path/to/file"  
```  

---  

## 2. Request Parameters  

**GET Request Parameters:**  
| Parameter | Type   | Required | Default | Description                     |  
|-----------|--------|----------|---------|---------------------------------|  
| `base64`  | string | Yes      | None    | Base64-encoded image data       |  
| `type`    | string | Yes      | None    | Image type (e.g., jpeg, png, gif, bmp) |  

**POST Request:**  
Upload an image file with the field name **`"image"`**.  

---  

## 3. Response Format  

**GET Request:**  
- **Success**: Returns binary image data with `Content-Type: image/[type]`.  
- **Failure**: Returns JSON error message.  

**Error Examples:**  
```json  
// Missing parameters  
{  
    "status": "error",  
    "message": "Missing base64 or type parameter"  
}  

// Unsupported image type  
{  
    "status": "error",  
    "message": "Unsupported image type. Supported types: jpeg, png, gif, bmp"  
}  

// Invalid Base64  
{  
    "status": "error",  
    "message": "Invalid base64 string"  
}  
```  

**POST Request:**  
- **Success**: Returns JSON with Base64 string and MIME type.  
**Example:**  
```json  
{  
    "status": "success",  
    "base64": "encoded_string",  
    "type": "image/jpeg"  
}  
```  

- **Failure**: Returns JSON error message.  
**Error Examples:**  
```json  
// No image uploaded  
{  
    "status": "error",  
    "message": "No image uploaded or upload error"  
}  

// Non-image file  
{  
    "status": "error",  
    "message": "Uploaded file is not an image"  
}  
```  

---  

## 4. Response Field Descriptions  

**POST Success Response:**  
| Field   | Type   | Description                     |  
|---------|--------|---------------------------------|  
| `status` | string | `success`                       |  
| `base64` | string | Base64-encoded image data       |  
| `type`   | string | MIME type (e.g., `image/jpeg`) |  

**Error Response:**  
| Field     | Type   | Description   |  
|-----------|--------|---------------|  
| `status`  | string | `error`       |  
| `message` | string | Error details |  

---  