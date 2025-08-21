# Epic Free Games Query API
## 1. Basic Usage

::: tip
This API retrieves information about current free games on the Epic Games Store, including game title, description, image, and promotion period.
:::

Base API URL:

```txt
https://zeapi.ink/v1/epicgame.php
```

Retrieve the free games list via GET request (defaults to `en-US` language and `US` country):

```txt
https://zeapi.ink/v1/epicgame.php
```

Or specify language and country via POST request with JSON data:

```json
{
    "locale": "zh-CN",
    "country": "CN"
}
```

Shell request examples:

```shell
curl -X GET "https://zeapi.ink/v1/epicgame.php"
```

Or using POST:

```shell
curl -X POST https://zeapi.ink/v1/epicgame.php \
-H "Content-Type: application/json" \
-d '{"locale": "zh-CN", "country": "CN"}'
```

## 2. Request Parameters

| Parameter | Type   | Required | Default | Description                       |
|-----------|--------|----------|---------|-----------------------------------|
| locale    | string | No       | en-US   | Language code, e.g., `zh-CN`, `en-US` |
| country   | string | No       | US      | Country code, e.g., `CN`, `US`    |

::: tip
GET requests use default parameters `locale=en-US` and `country=US`. POST requests require explicit `locale` and `country` specification.
:::

## 3. JSON Response Format

Success response example:

```json
{
  "status": "success",
  "data": [
    {
      "title": "Totally Reliable Delivery Service Standard Edition",
      "id": "9aa227e2ba294bb1a95c95fde892eb31",
      "description": "Buckle up your back brace and fire up the delivery truck, it's time to deliver! Join up to three friends and haphazardly get the job done in an interactive sandbox world. Delivery attempted, that's a Totally Reliable Delivery Service guarantee!",
      "image": "https://cdn1.epicgames.com/52b90f9a982a404781b189f6a7903226/offer/EGS_TotallyReliableDeliveryService_WereFiveGames_S1-2560x1440-47e6e9562d62705a75ea7b7096d0b8dc.jpg",
      "startDate": "2025-08-14T15:00:00.000Z",
      "endDate": "2025-08-21T15:00:00.000Z"
    },
    {
      "title": "Hidden Folks",
      "id": "8ea3500dc38e4f429702bf889c172d3d",
      "description": "Search for hidden folks in hand-drawn, interactive, miniature landscapes. Unfurl tent flaps, cut through bushes, slam doors, and poke some crocodiles! Rooooaaaarrrr!!!!!",
      "image": "https://cdn1.epicgames.com/spt-assets/7bfd56b0586348dcb139945d9e59f988/hidden-folks-1b7hh.png",
      "startDate": "2025-08-14T15:00:00.000Z",
      "endDate": "2025-08-21T15:00:00.000Z"
    }
  ]
}
```

Error response example (missing parameters in POST request):

```json
{
    "error": "Bad Request",
    "message": "Missing locale or country"
}
```

Error response example (failed to fetch data):

```json
{
    "error": "Internal Server Error",
    "message": "Failed to fetch data from Epic Games Store"
}
```

Error response example (unsupported request method):

```json
{
    "error": "Method Not Allowed"
}
```

## 4. Response Fields

| Field             | Type   | Description                                      |
|-------------------|--------|--------------------------------------------------|
| status            | string | Request status, `success` on success             |
| data              | array  | List of free games, containing game objects      |
| data[].title      | string | Game title                                      |
| data[].id         | string | Unique game identifier                          |
| data[].description | string | Game description                               |
| data[].image      | string | Game image URL                                  |
| data[].startDate  | string | Free promotion start time (ISO 8601 format)     |
| data[].endDate    | string | Free promotion end time (ISO 8601 format)       |
| error             | string | Error message (returned only on failure)        |
| message           | string | Detailed error description (returned only on failure) |