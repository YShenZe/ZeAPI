# WeChat Domain Block Detection API

## 1. Basic Usage

::: tip
The server does not log any requests or collect any private information!
:::

Base API URL

```txt
https://zeapi.ink/v1/txljjc.php
```

Send a GET request to check if a domain is blocked by WeChat:

```txt
https://zeapi.ink/v1/txljjc.php?url=https://example.com
```

Shell request example:

```shell
curl -X GET "https://zeapi.ink/v1/txljjc.php?url=https://example.com"
```

## 2. Request Parameters

| Parameter | Type   | Required | Default | Description              |
|-----------|--------|----------|---------|--------------------------|
| url       | string | Yes      | None    | The URL to be checked for blocking |

## 3. JSON Response Format

Success response example (domain is not blocked):

```json
{
    "code": 200,
    "msg": "Domain is not blocked"
}
```

Success response example (domain is blocked):

```json
{
    "code": 202,
    "msg": "Domain is blocked"
}
```

Error response example (missing URL parameter):

```json
{
    "code": 202,
    "msg": "Please provide a URL"
}
```

## 4. Response Fields Description

| Field | Type   | Description                                      |
|-------|--------|--------------------------------------------------|
| code  | int    | Status code (200 for success, 202 for error or blocked domain) |
| msg   | string | Result message                                   |