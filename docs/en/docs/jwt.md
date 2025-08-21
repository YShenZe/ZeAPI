# JWT Parsing and Verification API
## 1. Basic Usage

::: tip
This API parses and verifies JWT (JSON Web Token, based on HS256 algorithm), returning the decoded payload or error information.
:::

Base API URL:

```txt
https://zeapi.ink/v1/jwt.php
```

Parse a JWT via GET request:

```txt
https://zeapi.ink/v1/jwt.php?token=your_jwt_token
```

Or via POST request with JSON data:

```json
{
    "token": "your_jwt_token"
}
```

Shell request examples:

```shell
curl -X GET "https://zeapi.ink/v1/jwt.php?token=your_jwt_token"
```

Or using POST:

```shell
curl -X POST https://zeapi.ink/v1/jwt.php \
-H "Content-Type: application/json" \
-d '{"token": "your_jwt_token"}'
```

## 2. Request Parameters

| Parameter | Type   | Required | Default | Description                   |
|-----------|--------|----------|---------|-------------------------------|
| token     | string | Yes      | None    | JWT token to parse and verify |

::: tip
- For GET requests, provide the JWT via the `token` query parameter.
- For POST requests, provide the JWT in the `token` field of the JSON data.
- The JWT must be signed with the HS256 algorithm, and the signature key must match the server’s key.
:::

## 3. JSON Response Format

Success response example:

```json
{
    "status": "success",
    "data": {
        "sub": "user123",
        "name": "John Doe",
        "iat": 1697059200,
        "exp": 1697062800
    }
}
```

Error response example (missing token parameter):

```json
{
    "error": "Bad Request",
    "message": "Missing token parameter"
}
```

Error response example (expired token):

```json
{
    "error": "Unauthorized",
    "message": "Token has expired"
}
```

Error response example (invalid signature):

```json
{
    "error": "Unauthorized",
    "message": "Invalid token signature"
}
```

Error response example (invalid token):

```json
{
    "error": "Bad Request",
    "message": "Invalid token"
}
```

## 4. Response Fields

| Field   | Type   | Description                                      |
|---------|--------|--------------------------------------------------|
| status  | string | Request status, `success` on success             |
| data    | object | Decoded JWT payload, containing claims (e.g., `sub`, `name`, `iat`, `exp`) |
| error   | string | Error message (returned only on failure)        |
| message | string | Detailed error description (returned only on failure) |