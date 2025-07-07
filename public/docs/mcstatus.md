### 1. 基本调用
通过以下 URL 获取 Minecraft 服务器的状态信息：

```url
https://zeapi.ink/v1/mcstatus.php
```

#### 查询Java版
通过以下 URL 获取 Minecraft Java 服务器的状态信息：

```url
https://zeapi.ink/v1/mcstatus.php?server=9.rwmc.top&port=25565&type=Java
```

#### 查询基岩版
通过以下 URL 获取 Minecraft Bedrock 服务器的状态信息：

```url
https://zeapi.ink/v1/mcstatus.php?server=9.rwmc.top&port=19132&type=be
```


### 2. 请求参数说明
| 参数   | 类型   | 必填 | 默认值       | 说明                              |
|--------|--------|------|--------------|----------------------------------|
| server | string | 是   | 无           | Minecraft 服务器地址（如 9.rwmc.top） |
| port   | int    | 否   | Java: 25565<br>Bedrock: 19132 | 服务器端口号                     |
| type   | string | 是   | 无           | 服务器类型（Java 或 be）         |

**说明**：
- `port`：如果未提供，则根据 `type` 设置默认值（Java 版为 25565，Bedrock 版为 19132）。
- `type`：必须为 `Java`（Java 版服务器）或 `be`（Bedrock 版服务器）。

### 3. JSON 响应格式

#### 成功响应示例（Java 版服务器，在线）
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
        "favicon": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAq6ElEQVR4Xn16BVRb6dZ25s5MDYuec+LuAiQkgRABgrs7xb3UqLt7O22p61...",
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

#### 成功响应示例（Bedrock 版服务器，在线）
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

#### 服务器离线示例
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

#### 错误响应示例
```json
{
    "status": "error",
    "message": "Missing or invalid parameter: server"
}
```

### 4. 响应字段说明
| 字段                | 类型   | 说明                                                                 |
|---------------------|--------|--------------------------------------------------------------------|
| status              | string | 请求状态（`success` 或 `error`）                                   |
| message             | string | 错误信息（仅在 `status=error` 时返回）                             |
| data.online         | bool   | 服务器是否在线                                                     |
| data.host           | string | 服务器地址                                                         |
| data.port           | int    | 服务器端口号                                                       |
| data.players_online | int    | 当前在线玩家数量                                                   |
| data.max_players    | int    | 最大玩家数量                                                       |
| data.motd           | string | 服务器 MOTD（消息）                                                |
| data.info           | object | 服务器详细信息（如版本、玩家信息等，结构因服务器类型而异）         |
| data.players        | array  | 在线玩家名称列表（可能为空）                                       |
| data.encoding       | string | 返回数据的字符编码（默认为 UTF-8）                                 |
| data.timeout        | int    | 连接超时时间（秒）                                                 |
| data.srv_resolved   | bool   | 是否启用了 SRV 记录解析                                            |
| data.favicon        | string | 服务器图标的 Base64 编码（仅 Java 版，离线或 Bedrock 版为 null）   |
| data.delay          | int    | 连接延迟（毫秒，仅 Java 版，Bedrock 版不返回）                     |
| data.protocol       | int    | 服务器协议版本（仅 Java 版，Bedrock 版不返回）                     |