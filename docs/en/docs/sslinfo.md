# SSL Certificate Information Lookup API

## 1. Basic Usage

::: tip
This API is used to query SSL certificate information for a specified domain, including the issuer, validity period, serial number, etc.
:::

Base API URL:

```txt
https://zeapi.ink/v1/sslinfo.php
```

Retrieve SSL certificate information via the following URL or a POST request:

```txt
https://zeapi.ink/v1/sslinfo.php?domain=zeapi.ink
```

Or send JSON data via a POST request:

```json
{
    "domain": "zeapi.ink"
}
```

The shell request code is as follows:

```shell
curl -X GET "https://zeapi.ink/v1/sslinfo.php?domain=zeapi.ink"
```

Or using POST:

```shell
curl -X POST https://zeapi.ink/v1/sslinfo.php \
-H "Content-Type: application/json" \
-d '{"domain": "zeapi.ink"}'
```

## 2. Request Parameter Description

| Parameter | Type   | Required | Default | Description                                  |
|-----------|--------|----------|---------|----------------------------------------------|
| domain    | string | Yes      | None    | The target domain, e.g., `zeapi.ink` or `https://zeapi.ink` |

## 3. JSON Response Format

Example of a successful response:

```json
{
    "status": "success",
    "message": "",
    "data": {
        "domain": "zeapi.ink",
        "issuer": "Let's Encrypt",
        "commonName": "zeapi.ink",
        "validFrom": "2025-07-20 00:05:38",
        "validTo": "2025-10-18 00:05:37",
        "serialNumber": "0x057735F021EF18DF2AB614D06227EEEDDD27",
        "signatureType": "ecdsa-with-SHA384",
        "daysUntilExpiry": 57
    }
}
```

Example of an error response (missing `domain` parameter):

```json
{
    "status": "error",
    "message": "Please provide the domain parameter",
    "data": null
}
```

Example of an error response (invalid domain format):

```json
{
    "status": "error",
    "message": "Invalid domain format",
    "data": null
}
```

Example of an error response (unable to connect or retrieve certificate):

```json
{
    "status": "error",
    "message": "Failed to connect to zeapi.ink: Connection timed out",
    "data": null
}
```

## 4. Response Field Description

| Field             | Type   | Description                                           |
|-------------------|--------|-------------------------------------------------------|
| status            | string | Request status, `success` or `error`                  |
| message           | string | Error message (returned only on request failure)      |
| data              | object | Certificate information (returned only on success)    |
| data.domain       | string | The requested domain                                  |
| data.issuer       | string | Certificate issuer organization (extracted from `issuer.O`) |
| data.commonName   | string | Certificate Common Name (CN, extracted from `subject.CN`) |
| data.validFrom    | string | Certificate validity start time (format: YYYY-MM-DD HH:MM:SS) |
| data.validTo      | string | Certificate validity end time (format: YYYY-MM-DD HH:MM:SS) |
| data.serialNumber | string | Certificate serial number                             |
| data.signatureType| string | Signature algorithm type (e.g., `ecdsa-with-SHA384`)  |
| data.daysUntilExpiry | number | Number of days remaining until the certificate expires |