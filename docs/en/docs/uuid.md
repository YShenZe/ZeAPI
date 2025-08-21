# UUID Generator API
## 1. Basic Usage

::: tip
This API generates UUID v4 (random UUID) compliant with RFC 4122. It supports generating single or multiple UUIDs.
:::

Base API URL:

```txt
https://zeapi.ink/v1/uuid.php
```

Generate a UUID via GET request:

```txt
https://zeapi.ink/v1/uuid.php
```

Generate multiple UUIDs by specifying count via GET:

```txt
https://zeapi.ink/v1/uuid.php?count=5
```

Or via POST request with JSON data:

```json
{
    "count": 5
}
```

Shell request examples:

```shell
curl -X GET "https://zeapi.ink/v1/uuid.php?count=5"
```

Or using POST:

```shell
curl -X POST https://zeapi.ink/v1/uuid.php \
-H "Content-Type: application/json" \
-d '{"count": 5}'
```

## 2. Request Parameters

| Parameter | Type | Required | Default | Description                          |
|-----------|------|----------|---------|--------------------------------------|
| count     | int  | No       | 1       | Number of UUIDs to generate (1-100) |

::: tip
- For GET requests, specify the number of UUIDs using the `count` query parameter.
- For POST requests, specify the number of UUIDs in the `count` field of the JSON data.
- The maximum number of UUIDs is limited to 100 to prevent resource abuse.
:::

## 3. JSON Response Format

Success response example (single UUID):

```json
{
    "status": "success",
    "data": [
        "123e4567-e89b-12d3-a456-426614174000"
    ]
}
```

Success response example (multiple UUIDs):

```json
{
    "status": "success",
    "data": [
        "123e4567-e89b-12d3-a456-426614174000",
        "987fcdeb-1234-5678-9abc-def012345678",
        "456789ab-cdef-1234-5678-901234567890"
    ]
}
```

Error response example (invalid count parameter):

```json
{
    "error": "Bad Request",
    "message": "Count must be between 1 and 100"
}
```

Error response example (unsupported request method):

```json
{
    "error": "Method Not Allowed"
}
```

Error response example (server error):

```json
{
    "error": "Internal Server Error",
    "message": "Failed to generate UUID"
}
```

## 4. Response Fields

| Field   | Type   | Description                                |
|---------|--------|--------------------------------------------|
| status  | string | Request status, `success` on success        |
| data    | array  | List of UUID strings                       |
| error   | string | Error message (returned only on failure)   |
| message | string | Detailed error description (returned only on failure) |