# Website Metadata Retrieval API
## 1. Basic Usage

::: tip
This API extracts website title, description, and icon information from a specified URL.
:::

Base API URL:

```txt
https://zeapi.ink/v1/siteinfo.php
```

Retrieve website metadata via GET request:

```txt
https://zeapi.ink/v1/siteinfo.php?url=https://baidu.com
```

Or via POST request with JSON data:

```json
{
    "url": "https://baidu.com"
}
```

Shell request examples:

```shell
curl -X GET "https://zeapi.ink/v1/siteinfo.php?url=https://baidu.com"
```

Or using POST:

```shell
curl -X POST https://zeapi.ink/v1/siteinfo.php \
-H "Content-Type: application/json" \
-d '{"url": "https://baidu.com"}'
```

## 2. Request Parameters

| Parameter | Type   | Required | Default | Description                        |
|-----------|--------|----------|---------|------------------------------------|
| url       | string | Yes      | None    | Full URL of the target website, e.g., `https://baidu.com` |

## 3. JSON Response Format

Success response example:

```json
{
    "url": "https://baidu.com",
    "title": "Baidu, you’ll know once you search",
    "description": "The world’s leading Chinese search engine, dedicated to helping users access information more conveniently and find what they seek.",
    "icons": [
        "https://baidu.com/favicon.ico",
        "https://baidu.com/static/favicon.png"
    ]
}
```

Error response example (missing URL parameter):

```json
{
    "error": "Missing url parameter"
}
```

Error response example (invalid URL format):

```json
{
    "error": "Invalid url format"
}
```

Error response example (unable to fetch page):

```json
{
    "error": "Unable to fetch target page"
}
```

## 4. Response Fields

| Field       | Type   | Description                                      |
|-------------|--------|--------------------------------------------------|
| url         | string | Requested website URL                            |
| title       | string | Website title (extracted from `<title>` tag)     |
| description | string | Website description (extracted from `<meta name="description">` or `og:description`) |
| icons       | array  | List of website icon URLs (including `<link rel="icon">` and default `/favicon.ico`) |
| error       | string | Error message (returned only on failure)        |