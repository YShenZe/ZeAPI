# Random Anime Image API

## 1. Basic Usage
![API Call Demo](https://zeapi.ink/v1/sjecy.php)

> **Since image files are stored on the server, ensure a stable network connection for the best experience.**

**Base API URL**


```txt
https://zeapi.ink/v1/sjecy.php
```

Retrieve a random anime image via GET request:


```txt
https://zeapi.ink/v1/sjecy.php
```

**Shell Request Example**

```shell
curl https://zeapi.ink/v1/sjecy.php
```

**Retrieve JSON Format Output**

Add the `format=json` parameter to the URL to get image information in JSON format:


```txt
https://zeapi.ink/v1/sjecy.php?format=json
```

**Shell Request Example (JSON Format)**

```shell
curl https://zeapi.ink/v1/sjecy.php?format=json
```

**POST Request Example (JSON Format)**

Retrieve image information by sending JSON data via POST request:

```shell
curl -X POST -H "Content-Type: application/json" -d '{"format":"json"}' https://zeapi.ink/v1/sjecy.php
```

## 2. Request Parameters

| Parameter | Type   | Required | Default Value | Description                              |
|-----------|--------|----------|---------------|------------------------------------------|
| format    | string | No       | image         | Output format, options: `json` (returns image info) or `image` (returns raw image data) |

## 3. JSON Response Format

**Success Response Example (JSON Format)**

```json
{
    "status": "success",
    "image": "img_123.jpg",
    "url": "https://zeapi.ink/v1/images/img_123.jpg"
}
```

**Success Response Example (image Format)**

Returns the raw binary image data with the `Content-Type` set based on the image extension (e.g., `image/jpeg`).

**Error Response Example (Image Not Found)**

```json
{ "code": 404, "error": "Image not found: img_123.jpg" }
```

**Error Response Example (Server Error)**

```json
{ "code": 500, "error": "Server error: [error description]" }
```

## 4. Response Fields Description

| Field     | Type   | Description                                          |
|-----------|--------|----------------------------------------------|
| code      | int    | Response status code (200 for success, 404 for image not found, 500 for server error) |
| status    | string | Operation result status (JSON format only, `success` for successful requests) |
| error     | string | Error message (returned only on error)       |
| image     | string | Image filename (JSON format only, e.g., `img_123.jpg`) |
| url       | string | Full URL of the image (JSON format only, e.g., `https://zeapi.ink/v1/images/img_123.jpg`) |