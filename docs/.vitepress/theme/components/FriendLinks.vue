<template>
  <div class="friend-links">
    <a
      v-for="link in links"
      :key="link.name"
      class="friend-card"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="friend-card__logo" :src="link.logo" :alt="link.name" />
      <div class="friend-card__text">
        <div class="friend-card__name">{{ link.name }}</div>
        <div class="friend-card__intro">{{ link.intro }}</div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
interface Link {
  name: string
  intro: string
  logo: string
  url: string
}

const links: Link[] = [
  {
    name: 'LineXic书屋',
    intro: '难离难舍，想抱紧些',
    logo: 'https:/www.linexic.top/avatar.webp',
    url: 'https://www.linexic.top'
  },
  {
    name: '烛影Sordの网络日志',
    intro: '烛影摇秋泪，西窗叠旧痕。',
    logo: 'https://cdn.boochi.cn/gh/inkdust-dev/blog-static@main/Image/sord-avatar.jpg',
    url: 'https://blog.sord.top/'
  },
  {
    name: 'Satell1te_LK\'s SPACE',
    intro: '记得给我的世界加上故事与咖啡',
    logo: 'https://q1.qlogo.cn/g?b=qq&nk=66870019&s=100',
    url: 'https://255650.xyz'
  },
  {
    name: 'VitePress',
    intro: 'Vite & Vue powered static site generator.',
    logo: 'https://vitepress.dev/vitepress-logo-large.svg',
    url: 'https://vitepress.dev'
  },
  {
    name: 'Vue',
    intro: 'The progressive JavaScript framework.',
    logo: 'https://vue.js.org/vue.svg',
    url: 'https://vuejs.org'
  },
  {
    name: '梦泽说全栈',
    intro: '三年码龄PHP/Nodejs/Vue3全栈开发者 个人记录博客',
    logo: 'http://q.qlogo.cn/headimg_dl?dst_uin=3268612069&spec=640&img_type=jpg',
    url: 'https://mengze.vip'
  },
  {
    name: '柠枺',
    intro: '世界源于灵魂的幻想',
    logo: 'http://lemwood.cn/logo.png',
    url: 'http://lemwood.cn/'
  },
  {
    name: '林柚云',
    intro: '专为海外华人服务的云服务器运营商',
    logo: 'https://www.lyvps.net/themes/web/www/upload/local680f63397dc62.png',
    url: 'https://www.lyvps.net/'
  }
]
</script>

<style scoped>
.friend-links {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}

.friend-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;
}

.friend-card:hover {
  background-color: var(--vp-c-bg-mute);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.friend-card__logo {
  max-width: 40px;
  max-height: 40px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
}

.friend-card__text {
  min-width: 0;
}

.friend-card__name {
  font-weight: 600;
  font-size: 16px;
  color: var(--vp-c-brand-1);
  line-height: 1.3;
}

.friend-card__intro {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-top: 2px;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .friend-links {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
