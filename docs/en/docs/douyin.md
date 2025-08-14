# Douyin Hot Search API

## 1. Basic Usage

::: tip
The server does not log any requests or collect any private information!
:::

Base API URL

```txt
https://zeapi.ink/v1/douyin.php
```

Send a GET request to retrieve Douyin hot search data:

```txt
https://zeapi.ink/v1/douyin.php
```

Shell request example:

```shell
curl -X GET https://zeapi.ink/v1/douyin.php
```

## 2. Request Parameters

This API does not require additional request parameters. Simply call it using a GET request.

## 3. JSON Response Format

Success response example:

```json
{
    "success": true,
    "title": "Douyin Hot Search",
    "update_time": "2025-08-14 20:38:00",
    "data": [
        {
            "index": 1,
            "title": "Hot Keyword 1",
            "hot": "123.4万",
            "url": "https://www.douyin.com/search/Hot%20Keyword%201",
            "mobilUrl": "https://www.douyin.com/search/Hot%20Keyword%201"
        },
        {
            "index": 2,
            "title": "Hot Keyword 2",
            "hot": "89.5万",
            "url": "https://www.douyin.com/search/Hot%20Keyword%202",
            "mobilUrl": "https://www.douyin.com/search/Hot%20Keyword%202"
        }
    ]
}
```

Error response example (data fetch failure):

```json
{
    "success": false,
    "message": "Failed to fetch Douyin hot search data"
}
```

## 4. Response Fields Description

| Field         | Type    | Description                                   |
|---------------|---------|-----------------------------------------------|
| success       | boolean | Request status (true/false)                   |
| title         | string  | Hot search title, fixed as "Douyin Hot Search" |
| update_time   | string  | Data update time (format: YYYY-MM-DD HH:MM:SS) |
| data          | array   | List of hot search items                      |
| data.index    | int     | Hot search ranking                            |
| data.title    | string  | Hot search keyword                            |
| data.hot      | string  | Hot search popularity (in "万" units, 1 decimal place) |
| data.url      | string  | Web search URL for the hot search keyword     |
| data.mobilUrl | string  | Mobile search URL for the hot search keyword  |
| message       | string  | Result message (returned only on error)       |