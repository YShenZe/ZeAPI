# Minecraft Server Status API

## 1. Basic Usage
Retrieve Minecraft server status information using the following URL:

```txt
https://zeapi.ink/v1/mcstatus.php
```

### Query Java Edition
```txt
https://zeapi.ink/v1/mcstatus.php?server=9.rwmc.top&port=25565&type=Java
```

### Query Bedrock Edition
```txt
https://zeapi.ink/v1/mcstatus.php?server=9.rwmc.top&port=19132&type=be
```

## 2. Request Parameters
| Parameter | Type   | Required | Default Value         | Description                              |
|-----------|--------|----------|-----------------------|------------------------------------------|
| server    | string | Yes      | None                  | Minecraft server address (e.g., 9.rwmc.top) |
| port      | int    | No       | Java: 25565<br>Bedrock: 19132 | Server port number                       |
| type      | string | Yes      | None                  | Server type (`Java` or `be`)             |

**Notes**:
- `port`: If not provided, defaults to 25565 for Java Edition or 19132 for Bedrock Edition based on `type`.
- `type`: Must be `Java` (Java Edition server) or `be` (Bedrock Edition server).
- `port` must be a valid integer between 1 and 65535, otherwise an error is returned.

## 3. JSON Response Format

### Success Response Example (Java Edition, Online)
```json
{
    "status": "success",
    "data": {
        "online": true,
        "host": "9.rwmc.top",
        "port": 25565,
        "players_online": 0,
        "max_players": 20,
        "motd": "RunicWonders\\nSurvival Server, Under Development",
        "version": "1.21.4",
        "protocol": 769,
        "players": [],
        "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJ...",
        "delay": 72
    }
}
```

### Success Response Example (Bedrock Edition, Online)
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

### Server Offline Example
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

### Error Response Example
```json
{
    "status": "error",
    "message": "Missing or invalid parameter: server or type",
    "host": null,
    "port": null
}
```

## 4. Response Fields
| Field               | Type   | Description                                                                |
|---------------------|--------|---------------------------------------------------------------------------|
| status              | string | Request status (`success` or `error`)                                      |
| message             | string | Error message (returned only when `status=error`)                         |
| data.online         | bool   | Whether the server is online                                               |
| data.host           | string | Server address                                                            |
| data.port           | int    | Server port number                                                        |
| data.players_online | int    | Number of online players (returned only for online servers)                |
| data.max_players    | int    | Maximum number of players (returned only for online servers)               |
| data.motd           | string | Server MOTD (message), cleaned to plain text with newlines as `\n`         |
| data.version        | string | Server version (returned only for online servers)                          |
| data.protocol       | int    | Server protocol version (returned for Java Edition, may return for Bedrock) |
| data.players        | array  | List of online player names (supported for Java Edition, empty for Bedrock) |
| data.favicon        | string | Base64-encoded server icon (returned for Java Edition, null for Bedrock or offline) |
| data.delay          | int    | Connection delay in milliseconds (returned for Java Edition, null for Bedrock) |