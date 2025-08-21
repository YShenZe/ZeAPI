---
layout: home

hero:
  name: 梦泽公共API文档中心
  text: 只为提供专业的公共API服务集成平台
  tagline: 免费开源 · 高效稳定 · 即插即用 · 无需认证
  image:
    src: /Logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: 立即探索接口
      link: /docs/today
    - theme: brand
      text: 开发者博客
      link: https://mengze.vip/

features:
  - title: 历史上的今天
    link: /docs/today
    details: 该接口提供历史事件查询功能，支持按日期检索重大事件、名人诞辰及历史事实，适用于教育、内容生成及日历应用集成。

  - title: 随机一言
    link: /docs/onesay
    details: 随机返回精选名人名言或网络金句，支持多语种及主题过滤，适用于励志应用、社交分享及每日推送服务。

  - title: 域名Whois+查价
    link: /docs/whois
    details: 集成Whois查询与实时定价，支持域名注册信息检索、可用性检查及多注册商价格比较，助力域名管理与电商平台。

  - title: 二维码生成
    link: /docs/qrcode
    details: 高效生成自定义二维码，支持文本、URL、WiFi配置等多种数据类型，高分辨率输出及纠错级别调整，适用于营销与支付场景。

  - title: 获取QQ昵称和头像
    link: /docs/qqinfo
    details: 通过QQ号码检索用户昵称及高清头像，支持批量查询与缓存优化，适用于社交应用集成及用户身份验证。

  - title: 我的世界服务器信息获取
    link: /docs/mcstatus
    details: 实时监控Minecraft服务器状态，包括在线玩家、版本信息及延迟指标，支持Java Edition与Bedrock Edition，适用于游戏监控平台。

  - title: TOTP 临时密码生成
    link: /docs/key2otp
    details: 基于RFC 6238标准生成时间敏感一次性密码（TOTP），支持自定义密钥及时间步长，增强双因素认证安全性。

  - title: 我的世界皮肤披风链接获取
    link: /docs/mcinfo
    details: 根据玩家用户名或UUID检索皮肤及披风资源直链，支持正版验证及自定义渲染，适用于游戏社区与个性化服务。

  - title: 域名 ICP 备案查询
    link: /docs/icpquery
    details: 查询中国大陆域名ICP备案详情，包括备案号、主办单位及审核状态，符合监管要求，适用于合规检查工具。

  - title: IP 地址归属地查询
    link: /docs/ipseek
    details: 支持IPv4/IPv6地址解析，返回地理位置、ISP、ASN及经纬度信息，高精度数据库更新，适用于日志分析及反欺诈系统。

  - title: Base64 转文本 / 文本转 Base64
    link: /docs/b64totext
    details: 提供RFC 4648兼容的Base64编码/解码服务，支持UTF-8及多字节字符，适用于数据传输及加密应用。

  - title: Base64 和图片互转
    link: /docs/b64toimg
    details: 实现图像与Base64字符串的双向转换，支持JPEG/PNG等多种格式、实时预览及批量处理，优化移动端集成。
    
  - title: 随机二次元图片
    link: /docs/sjecy
    details: 精选集合超过1250张高清二次元壁纸，支持随机选取及分辨率过滤，适用于桌面美化及内容推荐引擎。
    
  - title: 随机Meme图片
    link: /docs/sjmeme
    details: 精选169张幽默Meme图像，支持随机分发及标签分类，增强社交媒体互动与娱乐应用体验。
    
  - title: PBKDF2密码生成
    link: /docs/pbkdf2
    details: 遵循RFC 8018的PBKDF2密钥派生函数，支持自定义迭代次数、盐值及哈希算法，确保密码存储安全最佳实践。
    
  - title: 强制转跳QQ
    link: /docs/qzztqq
    details: 通过QQ号码生成直接跳转链接，支持加好友、私聊及群聊场景，简化用户交互并提升移动端兼容性。
    
  - title: Bing每日壁纸
    link: /docs/bingpic
    details: 检索Bing每日高清壁纸，支持JSON响应包括图像URL、版权信息及描述，适用于动态背景及内容聚合服务。
    
  - title: 抖音热搜
    link: /docs/douyin
    details: 获取抖音实时热搜榜单，包含排名、关键词、热度及搜索链接，适用于社交媒体监控与趋势分析。
    
  - title: 百度热点
    link: /docs/baidu
    details: 提供百度实时热点数据，包括关键词、描述、图片及热度值，支持网页与移动端搜索链接，适用于内容聚合与趋势跟踪。
    
  - title: 微信域名拦截检测
    link: /docs/txljjc
    details: 检测指定域名是否被微信拦截，返回状态码及结果信息，适用于合规性检查及链接安全性验证。

  - title: UUID 生成器
    link: /docs/uuid
    details: 生成符合RFC 4122标准的通用唯一标识符(UUID)，支持多个版本(v1/v4)及批量生成，适用于分布式系统标识与数据去重。

  - title: SSL证书信息查询
    link: /docs/sslinfo
    details: 查询域名的SSL/TLS证书详细信息，包括颁发机构、有效期、加密算法及证书链，适用于安全审计与证书监控。

  - title: 网站元数据获取
    link: /docs/siteinfo
    details: 提取网站标题、描述、关键词、图标及开放图谱等元数据，支持自定义User-Agent及超时设置，适用于内容分析与SEO工具。

  - title: JWT 解析与验证
    link: /docs/jwt
    details: 解析JSON Web Token(JWT)并验证签名有效性，支持HS256/RS256等算法，返回载荷信息及验证结果，适用于身份验证调试。

  - title: Epic 免费游戏查询
    link: /docs/epicgame
    details: 获取Epic Games商店当前免费游戏信息，包括标题、描述、原价、免费期限及封面图片，适用于游戏资讯聚合与推送服务。
    
  - title: 更多接口开发中
    details: 我们正在持续扩展API集合，包括AI集成及高级数据分析功能，敬请关注更新日志以获取最新进展。

---

<hr />

欢迎探索梦泽API平台：专为开发者设计的**免费开源API服务集合**，无需注册或API密钥，即可访问多样化接口，涵盖历史查询、实用工具、游戏辅助及内容生成等领域。

## 为何选择梦泽API？
- 🚀 **无缝集成**：RESTful设计，支持JSON/XML等多种格式，无需复杂配置。
- ⚡ **高性能保障**：全球CDN加速，99.9% uptime SLA，确保低延迟响应。
- 📦 **数据高效**：最小化payload，支持分页及压缩，优化带宽利用。
- 🆓 **完全开源**：MIT许可，源代码公开于GitHub，鼓励社区贡献与自定义。
- 🔒 **安全优先**：HTTPS加密、速率限制及输入验证，保护您的应用免受威胁。

所有接口均经过严格测试，适用于生产环境，并提供详细文档与示例代码。立即开始您的集成之旅，提升项目效率！

<Confetti />