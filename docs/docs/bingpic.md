# Bing Daily Wallpaper API

## 1. Basic Usage
![API Usage Demo](https://zeapi.ink/v1/bingpic.php?format=image)

> **Note:** Since the image files are stored on the server, please ensure a stable network connection for the best experience.

### **Basic API Endpoint**
```url
https://zeapi.ink/v1/bingpic.php
```

You can retrieve the Bing daily wallpaper by sending a GET request to the endpoint above.

### **Shell Request Example**
```shell
curl https://zeapi.ink/v1/bingpic.php
```

### **Retrieve JSON Format Output**
To get the wallpaper information in JSON format, add the `format=json` parameter to the URL:

```url
https://zeapi.ink/v1/bingpic.php?format=json
```

### **Shell Request Example (JSON Format)**
```shell
curl https://zeapi.ink/v1/bingpic.php?format=json
```

### **POST Request Example (JSON Format)**
You can also send a POST request with JSON data to retrieve wallpaper information:

```shell
curl -X POST -H "Content-Type: application/json" -d '{"format":"json"}' https://zeapi.ink/v1/bingpic.php
```

---

## 2. Request Parameters

| Parameter | Type   | Required | Default | Description                              |
|-----------|--------|----------|---------|------------------------------------------|
| `format`  | string | No       | `image` | Output format. Options: `json` (returns wallpaper information) or `image` (returns the wallpaper image directly). |

---

## 3. JSON Response Format

### **Successful Response Example (JSON Format)**
```json
{
    "status": "success",
    "url": "https://www.bing.com/path/to/image.jpg",
    "title": "Wallpaper Title",
    "description": "Wallpaper Copyright Information"
}
```

### **Successful Response Example (Image Format)**
When the `format` parameter is set to `image` (or omitted, as it is the default), the API directly returns the binary data of the wallpaper image. The `Content-Type` header will match the image type (e.g., `image/jpeg`).

### **Error Response Example (Unable to Retrieve Wallpaper Data)**
```json
{ "code": 500, "error": "Unable to retrieve wallpaper data" }
```

### **Error Response Example (Invalid Parameter)**
```json
{ "code": 400, "error": "Invalid format parameter" }
```

---

## 4. Response Fields

| Field         | Type   | Description                                          |
|---------------|--------|------------------------------------------------------|
| `code`        | int    | Response status code: `200` for success, `400` for invalid parameter, `500` for server error. |
| `status`      | string | Operation result status (only in JSON format; `success` indicates success). |
| `error`       | string | Error message (only returned on error).              |
| `url`         | string | Full URL of the wallpaper (only in JSON format).     |
| `title`       | string | Title of the wallpaper (only in JSON format).        |
| `description` | string | Description of the wallpaper (only in JSON format).  |