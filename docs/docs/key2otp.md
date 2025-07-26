# TOTP Temporary Password Generation

## 1. Basic Usage

::: tip
The server will not log any of your requests or compromise your privacy in any way!
:::

Base API URL:
```url
https://zeapi.ink/v1/key2otp.php
```

Generate a one-time password (OTP) using the following URL or POST request:
```url
https://zeapi.ink/v1/key2otp.php?secret=GEZDGNBVGY3TQOI&algorithm=sha1&digits=6&period=30
```

Or send JSON data via POST request:
```json
{
    "secret": "GEZDGNBVGY3TQOI",
    "algorithm": "sha1",
    "digits": 6,
    "period": 30
}
```

Shell request example:
```shell
curl -X POST https://zeapi.ink/v1/key2otp.php \
-d "secret=GEZDGNBVGY3TQOI=" \
-d "algorithm=sha256" \
-d "digits=6" \
-d "period=30"
```

## 2. Request Parameters
| Parameter  | Type   | Required | Default Value | Description                              |
|------------|--------|----------|---------------|------------------------------------------|
| secret     | string | Yes      | None          | Base32-encoded TOTP secret (only A-Z and 2-7 allowed) |
| algorithm  | string | No       | sha1          | Encryption algorithm, supports sha1, sha256, sha512 |
| digits     | int    | No       | 6             | OTP length, supports 6 to 8 digits       |
| period     | int    | No       | 30            | OTP validity period (seconds), range 1 to 300 seconds |

## 3. JSON Response Format
Success response example:
```json
{
    "status": "success",
    "otp": "123456",
    "algorithm": "sha1",
    "digits": 6,
    "period": 30,
    "expires_at": "2025-07-06 10:14:30"
}
```

Error response example (missing secret):
```json
{
    "status": "error",
    "message": "Missing secret parameter"
}
```

Error response example (invalid secret format):
```json
{
    "status": "error",
    "message": "Invalid secret format. Must contain only A-Z and 2-7 (base32)."
}
```

Error response example (unsupported algorithm):
```json
{
    "status": "error",
    "message": "Invalid algorithm. Supported values: sha1, sha256, sha512"
}
```

Error response example (invalid digits):
```json
{
    "status": "error",
    "message": "Invalid digits. Must be between 6 and 8."
}
```

Error response example (invalid period):
```json
{
    "status": "error",
    "message": "Invalid period. Must be between 1 and 300 seconds."
}
```

Error response example (failed to generate OTP):
```json
{
    "status": "error",
    "message": "Failed to generate OTP: [error message]"
}
```

## 4. Response Fields Description
| Field       | Type   | Description                              |
|-------------|--------|------------------------------------------|
| status      | string | Request status (success/error)           |
| otp         | string | Generated one-time password (TOTP)       |
| algorithm   | string | Encryption algorithm used (sha1/sha256/sha512) |
| digits      | int    | OTP length                              |
| period      | int    | OTP validity period (seconds)           |
| expires_at  | string | OTP expiration time (format: YYYY-MM-DD HH:MM:SS) |
| message     | string | Operation result message (returned only on error) |