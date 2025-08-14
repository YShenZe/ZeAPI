# QQ Forced Redirect API

## 1. Basic Usage

> **Ensure you are in an environment that supports QQ protocols for the best experience.**

**Base API URL**


```txt
https://zeapi.ink/v1/qzztqq.php
```

Initiate a forced redirect to QQ's chat, add friend, or WPA temporary session interface via a GET request:


```txt
https://zeapi.ink/v1/qzztqq.php?type=chat&uin=123456
```

**Shell Request Example**

```shell
curl https://zeapi.ink/v1/qzztqq.php?type=chat&uin=123456
```

**Retrieve JSON Format Output**

Add the `format=json` parameter to the URL to get redirect information in JSON format:


```txt
https://zeapi.ink/v1/qzztqq.php?type=chat&uin=123456&format=json
```

**Shell Request Example (JSON Format)**

```shell
curl https://zeapi.ink/v1/qzztqq.php?type=chat&uin=123456&format=json
```

**POST Request Example (JSON Format)**

Send JSON data via a POST request to retrieve redirect information:

```shell
curl -X POST -H "Content-Type: application/json" -d '{"type":"chat","uin":"123456","format":"json"}' https://zeapi.ink/v1/qzztqq.php
```

## 2. Request Parameters

| Parameter | Type   | Required | Default   | Description                              |
|-----------|--------|----------|-----------|------------------------------------------|
| type      | string | Yes      |           | Operation type. Options: `chat` (redirect to chat interface), `addfriend` (redirect to add friend interface), `wpa` (WPA temporary session). |
| uin       | string | Yes      |           | Target QQ number, must be numeric.       |
| format    | string | No       | redirect  | Output format. Options: `json` (returns redirect info) or `redirect` (directly redirects to QQ interface). |

## 3. JSON Response Format

**Success Response Example (JSON Format)**

```json
{
    "status": "success",
    "type": "chat",
    "uin": "123456",
    "url": "mqqwpa://im/chat?chat_type=wpa&version=1&src_type=web&web_src=oicqzone.com&uin=123456"
}
```

**Success Response Example (redirect Format)**

The API returns an HTTP 302 redirect response, and the client will automatically redirect to the corresponding QQ interface.

**Error Response Example (Invalid Parameters)**

```json
{ "code": 400, "error": "Invalid uin or type." }
```

**Error Response Example (Server Error)**

```json
{ "code": 500, "error": "Server error: [error description]" }
```

## 4. Response Fields

| Field       | Type   | Description                                          |
|-------------|--------|-----------------------------------------------------|
| code        | int    | Response status code (200 for success, 400 for invalid parameters, 500 for server error). |
| status      | string | Operation result status (only in JSON format, `success` indicates success). |
| error       | string | Error message (returned only on error).             |
| type        | string | Operation type (only in JSON format, e.g., `chat`).  |
| uin         | string | Target QQ number (only in JSON format, e.g., `123456`). |
| url         | string | Redirect URL (only in JSON format, e.g., `mqqwpa://im/chat?...`). |