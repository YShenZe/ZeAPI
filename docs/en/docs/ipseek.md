# IP Address Location Query

## 1. Basic Usage

::: tip
The server will not log any of your requests or compromise your privacy in any way!
:::

Base API URL:

```txt
https://zeapi.ink/v1/ipseek.php
```

Query IP address location information using the following URL or POST request:

```txt
https://zeapi.ink/v1/ipseek.php?ip=8.8.8.8
```

Or send JSON data via POST request:
```json
{
    "ip": "8.8.8.8"
}
```

Shell request example:
```shell
curl -X POST https://zeapi.ink/v1/ipseek.php \
-H "Content-Type: application/json" \
-d '{"ip":"8.8.8.8"}'
```

## 2. Request Parameters
| Parameter | Type   | Required | Default Value          | Description                          |
|-----------|--------|----------|------------------------|--------------------------------------|
| ip        | string | No       | Client IP address      | The IP address to query (IPv4 or IPv6) |

## 3. JSON Response Format
```json
{
    "status": "success",
    "ip": "8.8.8.8",
    "country": "United States",
    "region": "California",
    "city": "Mountain View",
    "isp": "Google LLC",
    "latitude": 37.751,
    "longitude": -97.822,
    "timezone": "America/Chicago"
}
```

Error response example (invalid IP address):
```json
{
    "status": "error",
    "message": "Invalid IP address"
}
```

Error response example:
```json
{
    "status": "error",
    "message": "Failed to fetch IP information"
}
```

## 4. Response Fields Description
| Field      | Type   | Description                              |
|------------|--------|------------------------------------------|
| status     | string | Request status (success/error)           |
| ip         | string | Queried IP address                      |
| country    | string | Country                                 |
| region     | string | Region                                  |
| city       | string | City                                    |
| isp        | string | Internet Service Provider               |
| latitude   | float  | Latitude                                |
| longitude  | float  | Longitude                               |
| timezone   | string | Timezone                                |
| message    | string | Operation result message (returned only on error) |