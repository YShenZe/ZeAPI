# Epic 免费游戏查询 API
## 1. 基本调用

::: tip
此 API 用于查询 Epic Games Store 当前的免费游戏信息，包括游戏标题、描述、图片和促销时间。
:::

基本 API 地址

```txt
https://zeapi.ink/v1/epicgame.php
```

通过以下 GET 请求获取免费游戏列表（默认使用 `en-US` 语言和 `US` 地区）：

```txt
https://zeapi.ink/v1/epicgame.php
```

或通过 POST 请求发送 JSON 数据以指定语言和地区：

```json
{
    "locale": "zh-CN",
    "country": "CN"
}
```

Shell 请求代码如下：

```shell
curl -X GET "https://zeapi.ink/v1/epicgame.php"
```

或使用 POST：

```shell
curl -X POST https://zeapi.ink/v1/epicgame.php \
-H "Content-Type: application/json" \
-d '{"locale": "zh-CN", "country": "CN"}'
```

## 2. 请求参数说明

| 参数    | 类型   | 必填 | 默认值  | 说明                       |
|---------|--------|------|---------|----------------------------|
| locale  | string | 否   | en-US   | 语言代码，例如 `zh-CN`、`en-US` |
| country | string | 否   | US      | 国家代码，例如 `CN`、`US`  |

::: tip
GET 请求使用默认参数 `locale=en-US` 和 `country=US`。POST 请求需要明确指定 `locale` 和 `country`。
:::

## 3. JSON 响应格式

成功响应示例：

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

错误响应示例（POST 请求缺少参数）：

```json
{
    "error": "Bad Request",
    "message": "Missing locale or country"
}
```

错误响应示例（无法获取数据）：

```json
{
    "error": "Internal Server Error",
    "message": "Failed to fetch data from Epic Games Store"
}
```

错误响应示例（不支持的请求方法）：

```json
{
    "error": "Method Not Allowed"
}
```

## 4. 响应字段说明

| 字段        | 类型   | 说明                                      |
|-------------|--------|------------------------------------------|
| status      | string | 请求状态，成功时为 `success`             |
| data        | array  | 免费游戏列表，包含多个游戏对象           |
| data[].title | string | 游戏标题                                |
| data[].id   | string | 游戏唯一标识                            |
| data[].description | string | 游戏描述                         |
| data[].image | string | 游戏图片 URL                            |
| data[].startDate | string | 免费促销开始时间（ISO 8601 格式）       |
| data[].endDate | string | 免费促销结束时间（ISO 8601 格式）       |
| error       | string | 错误信息（仅在请求失败时返回）           |
| message     | string | 详细错误描述（仅在请求失败时返回）       |