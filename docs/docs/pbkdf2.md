# PBKDF2 Password Generation

## 1. Basic Usage

::: tip
The server will not log any of your requests or compromise your privacy! All password generation is performed in memory with no disk storage, ensuring zero-knowledge security.
:::

Base API URL:
```url
https://zeapi.ink/v1/pbkdf2.php
```

Generate a unique PBKDF2-based password using the following URL or POST request:
```url
https://zeapi.ink/v1/pbkdf2.php?master_password=mysecret&website_name=example.com&algorithm=sha256&iteration_length=10000&key_length=32
```

Or send JSON data via POST request:
```json
{
    "master_password": "mysecret",
    "website_name": "example.com",
    "algorithm": "sha256",
    "iteration_length": 10000,
    "key_length": 32
}
```

Shell request example:
```shell
curl -X POST https://zeapi.ink/v1/pbkdf2.php \
-H "Content-Type: application/json" \
-d '{
    "master_password": "mysecret",
    "website_name": "example.com",
    "algorithm": "sha256",
    "iteration_length": 10000,
    "key_length": 32
}'
```

## 2. Request Parameters
| Parameter         | Type   | Required | Default Value | Description                              |
|-------------------|--------|----------|---------------|------------------------------------------|
| master_password   | string | Yes      | None          | User's master password for generating a unique password |
| website_name      | string | Yes      | None          | Target website name or domain, used to generate the salt |
| algorithm         | string | No       | sha256        | PBKDF2 encryption algorithm, supports sha256, sha512 |
| iteration_length  | int    | No       | 10000         | PBKDF2 iteration count, recommended to be at least 1000 |
| key_length        | int    | No       | 32            | Generated password length (in bytes), recommended 16-64 |

## 3. JSON Response Format
Success response example:
```json
{
    "status": "success",
    "password": "generated_base64_encoded_password",
    "algorithm": "sha256",
    "iteration_length": 10000,
    "key_length": 32
}
```

Error response example (missing master password or website name):
```json
{
    "status": "error",
    "message": "Master password and website name are required"
}
```

Error response example (unsupported algorithm):
```json
{
    "status": "error",
    "message": "Unsupported algorithm"
}
```

Error response example (invalid iteration length or key length):
```json
{
    "status": "error",
    "message": "Invalid iteration length or key length"
}
```

## 4. Response Fields Description
| Field             | Type   | Description                              |
|-------------------|--------|------------------------------------------|
| status            | string | Request status (success/error)           |
| password          | string | Generated password (base64 encoded)      |
| algorithm         | string | Encryption algorithm used (sha256/sha512) |
| iteration_length  | int    | PBKDF2 iteration count                  |
| key_length        | int    | Generated password length (in bytes)     |
| message           | string | Operation result message (returned only on error) |