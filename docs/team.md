<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.mengze.vip/gh/YShenZe/Blog-Static-Resource@main/images/1746460967151.jpg',
    name: 'YShenZe',
    title: '万般皆是命',
    links: [
      { icon: 'github', link: 'https://github.com/YShenZe' },
      { icon: 'x', link: 'https://x.com/MengZe2' }
    ]
  },
]
</script>

# 梦泽公共API

这是一个由梦泽个人开发、维护的公共API服务，所有API均为梦泽自己开发，数据来源网络，目前正在持续更新，如果你想赞助我：
[![mm_reward_qrcode_1743497808845.png](https://cdn.mengze.vip/gh/YShenZe/Blog-Static-Resource@main/images/mm_reward_qrcode_1743497808845.png)](https://cdn.mengze.vip/gh/YShenZe/Blog-Static-Resource@main/images/mm_reward_qrcode_1743497808845.png)

官方QQ群：940994905

<GoogleArtFont />

<VPTeamMembers size="small" :members="members" />