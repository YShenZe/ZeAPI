# 我的世界服务器信息获取

## 1. 基本调用
通过以下 URL 获取 Minecraft 服务器的状态信息：

```txt
https://zeapi.ink/v1/mcstatus.php
```

### 查询 Java 版
```txt
https://zeapi.ink/v1/mcstatus.php?server=9.rwmc.top&port=25565&type=Java
```

### 查询基岩版
```txt
https://zeapi.ink/v1/mcstatus.php?server=9.rwmc.top&port=19132&type=be
```

## 2. 请求参数说明
| 参数   | 类型   | 必填 | 默认值       | 说明                              |
|--------|--------|------|--------------|----------------------------------|
| server | string | 是   | 无           | Minecraft 服务器地址（如 9.rwmc.top） |
| port   | int    | 否   | Java: 25565<br>Bedrock: 19132 | 服务器端口号                     |
| type   | string | 是   | 无           | 服务器类型（`Java` 或 `be`）      |

**说明**：
- `port`：如果未提供，则根据 `type` 设置默认值（Java 版为 25565，Bedrock 版为 19132）。
- `type`：必须为 `Java`（Java 版服务器）或 `be`（Bedrock 版服务器）。
- `port` 必须为 1 到 65535 之间的有效整数，否则返回错误。

## 3. JSON 响应格式

### 成功响应示例（Java 版服务器，在线）
```json
{
    "status": "success",
    "data": {
        "online": true,
        "host": "9.rwmc.top",
        "port": 25565,
        "players_online": 0,
        "max_players": 20,
        "motd": "RunicWonders\\n生存服务器，开荒中",
        "version": "1.21.4",
        "protocol": 769,
        "players": [],
        "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJ...",
        "delay": 72
    }
}
```

### 成功响应示例（Bedrock 版服务器，在线）
```json
{
    "status": "success",
    "data": {
        "online": true,
        "host": "mc.rwmc.top",
        "port": 19132,
        "players_online": 2025,
        "max_players": 9223372036854775807,
        "motd": "RunicWonders;818",
        "version": "0",
        "protocol": 1,
        "players": []
    }
}
```

### 服务器离线示例
```json
{
    "status": "success",
    "data": {
        "online": false,
        "host": "invalid.server.com",
        "port": 25565
    }
}
```

### 错误响应示例
```json
{
    "status": "error",
    "message": "Missing or invalid parameter: server or type",
    "host": null,
    "port": null
}
```

## 4. 响应字段说明
| 字段                | 类型   | 说明                                                                 |
|---------------------|--------|--------------------------------------------------------------------|
| status              | string | 请求状态（`success` 或 `error`）                                   |
| message             | string | 错误信息（仅在 `status=error` 时返回）                             |
| data.online         | bool   | 服务器是否在线                                                     |
| data.host           | string | 服务器地址                                                         |
| data.port           | int    | 服务器端口号                                                       |
| data.players_online | int    | 当前在线玩家数量（仅在线服务器返回）                               |
| data.max_players    | int    | 最大玩家数量（仅在线服务器返回）                                   |
| data.motd           | string | 服务器 MOTD（消息），已清理为纯文本，换行符转为 `\n`              |
| data.version        | string | 服务器版本（仅在线服务器返回）                                     |
| data.protocol       | int    | 服务器协议版本（Java 版返回，Bedrock 版可能返回）                 |
| data.players        | array  | 在线玩家名称列表（仅 Java 版支持，Bedrock 版为空）                 |
| data.favicon        | string | 服务器图标的 Base64 编码（仅 Java 版返回，离线或 Bedrock 版为 null） |
| data.delay          | int    | 连接延迟（毫秒，仅 Java 版返回，Bedrock 版为 null）                |