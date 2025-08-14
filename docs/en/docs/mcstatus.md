# Minecraft Server Information Retrieval

## 1. Basic Usage
Retrieve Minecraft server status information using the following URL:


```txt
https://zeapi.ink/v1/mcstatus.php
```

### Query Java Edition
Retrieve Minecraft Java server status information using the following URL:


```txt
https://zeapi.ink/v1/mcstatus.php?server=9.rwmc.top&port=25565&type=Java
```

### Query Bedrock Edition
Retrieve Minecraft Bedrock server status information using the following URL:


```txt
https://zeapi.ink/v1/mcstatus.php?server=9.rwmc.top&port=19132&type=be
```

## 2. Request Parameters
| Parameter | Type   | Required | Default Value       | Description                              |
|-----------|--------|----------|---------------------|------------------------------------------|
| server    | string | Yes      | None                | Minecraft server address (e.g., 9.rwmc.top) |
| port      | int    | No       | Java: 25565<br>Bedrock: 19132 | Server port number                       |
| type      | string | Yes      | None                | Server type (Java or be)                 |

**Notes**:
- `port`: If not provided, defaults to 25565 for Java Edition or 19132 for Bedrock Edition based on the `type`.
- `type`: Must be `Java` (Java Edition server) or `be` (Bedrock Edition server).

## 3. JSON Response Format

### Success Response Example (Java Edition Server, Online)
```json
{
    "online": true,
    "host": "9.rwmc.top",
    "port": 10024,
    "players_online": 0,
    "max_players": 1,
    "motd": "{\"text\":\"\",\"extra\":[{\"text\":\"R\",\"color\":\"dark_red\"},{\"text\":\"u\",\"color\":\"gold\"},{\"text\":\"n\",\"color\":\"gold\"},{\"text\":\"i\",\"color\":\"dark_green\"},{\"text\":\"c\",\"color\":\"dark_green\"},{\"text\":\"W\",\"color\":\"dark_green\"},{\"text\":\"o\",\"color\":\"dark_aqua\"},{\"text\":\"n\",\"color\":\"dark_blue\"},{\"text\":\"d\",\"color\":\"dark_blue\"},{\"text\":\"e\",\"color\":\"dark_blue\"},{\"text\":\"r\",\"color\":\"dark_purple\"},{\"text\":\"s\",\"color\":\"dark_red\"},\"\\n\",{\"text\":\"\\u751f\",\"color\":\"blue\"},{\"text\":\"\\u7535\",\"color\":\"blue\"},{\"text\":\"\\u670d\",\"color\":\"blue\"},{\"text\":\"\\u52a1\",\"color\":\"light_purple\"},{\"text\":\"\\u5668\",\"color\":\"light_purple\"},{\"text\":\"\\uff0c\",\"color\":\"light_purple\"},{\"text\":\"\\u5f00\",\"color\":\"red\"},{\"text\":\"\\u8352\",\"color\":\"red\"},{\"text\":\"\\u4e2d\",\"color\":\"red\"}]}",
    "info": {
        "version": {
            "name": "Leaves_lemwood 1.21.4",
            "protocol": 769
        },
        "favicon": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAq6ElEQVR4Xn16BVRb6dZ25s5MDYuec+LuAiQkgRABgrs7xb3UqLt7...",
        "description": {
            "text": "",
            "extra": [
                {
                    "text": "R",
                    "color": "dark_red"
                },
                {
                    "text": "u",
                    "color": "gold"
                },
                {
                    "text": "n",
                    "color": "gold"
                },
                {
                    "text": "i",
                    "color": "dark_green"
                },
                {
                    "text": "c",
                    "color": "dark_green"
                },
                {
                    "text": "W",
                    "color": "dark_green"
                },
                {
                    "text": "o",
                    "color": "dark_aqua"
                },
                {
                    "text": "n",
                    "color": "dark_blue"
                },
                {
                    "text": "d",
                    "color": "dark_blue"
                },
                {
                    "text": "e",
                    "color": "dark_blue"
                },
                {
                    "text": "r",
                    "color": "dark_purple"
                },
                {
                    "text": "s",
                    "color": "dark_red"
                },
                "\n",
                {
                    "text": "生",
                    "color": "blue"
                },
                {
                    "text": "电",
                    "color": "blue"
                },
                {
                    "text": "服",
                    "color": "blue"
                },
                {
                    "text": "务",
                    "color": "light_purple"
                },
                {
                    "text": "器",
                    "color": "light_purple"
                },
                {
                    "text": "，",
                    "color": "light_purple"
                },
                {
                    "text": "开",
                    "color": "red"
                },
                {
                    "text": "荒",
                    "color": "red"
                },
                {
                    "text": "中",
                    "color": "red"
                }
            ]
        },
        "players": {
            "max": 1,
            "online": 0
        },
        "preventsChatReports": true
    },
    "players": [],
    "encoding": "UTF-8",
    "timeout": 3,
    "srv_resolved": true,
    "favicon": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAq6ElEQVR4Xn16BVRb6dZ25s5MDYuec+LuAiQkgRABgrs7xb3UqLt7...",
    "delay": 72,
    "protocol": 769
}
```

### Success Response Example (Bedrock Edition Server, Online)
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
        "info": {
            "game_id": "MCPE",
            "hostname": "RunicWonders;818",
            "protocol": 1,
            "version": "0",
            "numplayers": 2025,
            "maxplayers": 9223372036854775807,
            "server_id": "rw",
            "map": "Survival",
            "game_mode": "1",
            "nintendo_limited": "19132",
            "ipv4port": 19133,
            "ipv6port": 0,
            "extra": ""
        },
        "encoding": "UTF-8",
        "timeout": 5,
        "srv_resolved": false,
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
        "port": 25565,
        "srv_resolved": true
    }
}
```

### Error Response Example
```json
{
    "status": "error",
    "message": "Missing or invalid parameter: server"
}
```

## 4. Response Fields Description
| Field                | Type   | Description                                                                 |
|----------------------|--------|-----------------------------------------------------------------------------|
| status               | string | Request status (`success` or `error`)                                       |
| message              | string | Error message (returned only when `status=error`)                          |
| data.online          | bool   | Whether the server is online                                                |
| data.host            | string | Server address                                                             |
| data.port            | int    | Server port number                                                         |
| data.players_online  | int    | Number of currently online players                                         |
| data.max_players     | int    | Maximum number of players                                                  |
| data.motd            | string | Server MOTD (message)                                                      |
| data.info            | object | Detailed server information (e.g., version, player info, varies by server type) |
| data.players         | array  | List of online player names (may be empty)                                  |
| data.encoding        | string | Character encoding of the response data (defaults to UTF-8)                |
| data.timeout         | int    | Connection timeout (seconds)                                                |
| data.srv_resolved    | bool   | Whether SRV record resolution was used                                      |
| data.favicon         | string | Base64-encoded server icon (Java Edition only, null for offline or Bedrock) |
| data.delay           | int    | Connection delay (milliseconds, Java Edition only, not returned for Bedrock) |
| data.protocol        | int    | Server protocol version (Java Edition only, not returned for Bedrock)       |