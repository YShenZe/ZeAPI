import { defineConfig } from 'vitepress'
import { figure } from '@mdit/plugin-figure'
import { Feed } from 'feed'

export default defineConfig({
  // ========== 全局共享配置 ==========
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    // RSS 自动发现
    ['link', { 
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'ZeAPI Documentation Updates',
      href: '/feed.rss'
    }],
    ['link', { 
      rel: 'alternate',
      type: 'application/rss+xml',
      title: '梦泽API文档更新',
      href: '/zh/feed.rss'
    }],
    // SEO 优化
    ['meta', { name: 'author', content: 'ZeAPI Team' }],
    ['meta', { name: 'keywords', content: 'API, public API, free API, ZeAPI, documentation, REST API, web services' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@zeapi' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  lastUpdated: true,
  appearance: 'dark',
  
  // ========== 内置 Sitemap 配置 ==========
  sitemap: {
    hostname: 'https://zeapi.ink',
  },
  
  markdown: {
    config: (md) => {
      md.use(figure);
    },
    theme: {
      light: 'github-light',
      dark: 'dracula'
    },
    lineNumbers: true,
    // 图片优化配置
    image: {
      lazy: true,       // 启用懒加载
      webp: true,       // 自动生成 WebP
      sizes: '100vw',   // 响应式尺寸
      decoding: 'async', // 异步解码
      loading: 'lazy',  // 原生懒加载
      quality: 85       // 图片质量
    }
  },

  // ========== 多语言配置 ==========
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'ZeAPI Documentation',
      titleTemplate: ':title | ZeAPI',
      description: 'Comprehensive API documentation for ZeAPI services',
      link: '/',
      themeConfig: {
        siteTitle: 'ZeAPI',
        // 移动端导航标签
        mobileNav: {
          text: 'Menu',
          openIcon: 'i-material-symbols-menu',
          closeIcon: 'i-material-symbols-close'
        },
        // SEO 增强配置
        seo: {
          title: 'ZeAPI - Free Public API Services',
          description: 'API documentation for ZeAPI services including domain whois, QR code generation, IP geolocation, Minecraft server status and more.',
          ogImage: '/favicon.svg',
          twitterCard: 'summary_large_image',
          canonicalUrl: 'https://zeapi.ink',
          ogUrl: 'https://zeapi.ink',
          ogType: 'website'
        },
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'API List',
            items: [
              { text: 'All APIs', link: '/docs' },
              { text: 'Today in History', link: '/docs/today' },
              { text: 'Random Quote', link: '/docs/onesay' },
              { text: 'Domain Whois & Pricing', link: '/docs/whois' },
              { text: 'QR Code Generator', link: '/docs/qrcode' },
              { text: 'QQ Nickname & Avatar', link: '/docs/qqinfo' },
              { text: 'Minecraft Server Status', link: '/docs/mcstatus' },
              { text: 'TOTP Generator', link: '/docs/key2otp' },
              { text: 'Minecraft Skin/Cape', link: '/docs/mcinfo' },
              { text: 'ICP Lookup', link: '/docs/icpquery' },
              { text: 'IP Geolocation', link: '/docs/ipseek' },
              { text: 'Base64 ⇄ Text', link: '/docs/b64totext' },
              { text: 'Base64 ⇄ Image', link: '/docs/b64toimg' },
              { text: 'Random Anime Pic', link: '/docs/sjecy' },
              { text: 'Random Meme Pic', link: '/docs/sjmeme' },
              { text: 'PBKDF2 Generator', link: '/docs/pbkdf2' },
            ],
          },
          { text: 'About Me', link: '/team' },
          { text: 'GitHub', link: 'https://github.com/yshenze/zeapi' },
          { text: 'Blog', link: 'https://mengze.vip/' },
          { text: 'ShortURL', link: 'https://mzurl.xyz' },
        ],
        sidebar: {
          '/docs/': [
            {
              text: 'APIs',
              collapsed: false,
              items: [
                { text: 'Today in History', link: '/docs/today' },
                { text: 'Random Quote', link: '/docs/onesay' },
                { text: 'Domain Whois & Pricing', link: '/docs/whois' },
                { text: 'QR Code Generator', link: '/docs/qrcode' },
                { text: 'QQ Nickname & Avatar', link: '/docs/qqinfo' },
                { text: 'Minecraft Server Status', link: '/docs/mcstatus' },
                { text: 'TOTP Generator', link: '/docs/key2otp' },
                { text: 'Minecraft Skin/Cape', link: '/docs/mcinfo' },
                { text: 'ICP Lookup', link: '/docs/icpquery' },
                { text: 'IP Geolocation', link: '/docs/ipseek' },
                { text: 'Base64 ⇄ Text', link: '/docs/b64totext' },
                { text: 'Base64 ⇄ Image', link: '/docs/b64toimg' },
                { text: 'Random Anime Pic', link: '/docs/sjecy' },
                { text: 'Random Meme Pic', link: '/docs/sjmeme' },
                { text: 'PBKDF2 Generator', link: '/docs/pbkdf2' },
              ],
            },
            {
              text: 'Other',
              items: [
                { text: 'About Me', link: '/team' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/yshenze/zeapi/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: `Copyright © 2024-${new Date().getFullYear()} ZeAPI Team`,
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        outline: {
          level: 'deep',
          label: 'On this page'
        },
        returnToTopLabel: 'Return to top',
        darkModeSwitchLabel: 'Appearance',
      }
    },
    
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: '梦泽公共API文档',
      titleTemplate: ':title | 梦泽API',
      description: 'ZeAPI 服务的 API 文档',
      themeConfig: {
        siteTitle: '梦泽API',
        // 移动端导航标签
        mobileNav: {
          text: '菜单',
          openIcon: 'i-material-symbols-menu',
          closeIcon: 'i-material-symbols-close'
        },
        // SEO 增强配置
        seo: {
          title: '梦泽API - 免费公共服务接口',
          description: '提供域名查询、二维码生成、IP定位、我的世界信息查询、ICP备案查询等API服务',
          ogImage: '/zh/favicon.svg',
          twitterCard: 'summary_large_image',
          canonicalUrl: 'https://zeapi.ink/zh/',
          ogUrl: 'https://zeapi.ink/zh/',
          ogType: 'website'
        },
        nav: [
          { text: '首页', link: '/zh/' },
          {
            text: '接口列表',
            items: [
              { text: '所有接口总览', link: '/zh/docs' },
              { text: '历史上的今天', link: '/zh/docs/today' },
              { text: '随机一言', link: '/zh/docs/onesay' },
              { text: '域名 Whois + 查价', link: '/zh/docs/whois' },
              { text: '二维码生成', link: '/zh/docs/qrcode' },
              { text: '获取 QQ 昵称和头像', link: '/zh/docs/qqinfo' },
              { text: '我的世界服务器信息获取', link: '/zh/docs/mcstatus' },
              { text: 'TOTP 临时密码生成', link: '/zh/docs/key2otp' },
              { text: '我的世界皮肤/披风链接获取', link: '/zh/docs/mcinfo' },
              { text: '域名 ICP 备案查询', link: '/zh/docs/icpquery' },
              { text: 'IP 地址归属地查询', link: '/zh/docs/ipseek' },
              { text: 'Base64 ⇄ 文本', link: '/zh/docs/b64totext' },
              { text: 'Base64 ⇄ 图片', link: '/zh/docs/b64toimg' },
              { text: '随机二次元图片', link: '/zh/docs/sjecy' },
              { text: '随机 Meme 图片', link: '/zh/docs/sjmeme' },
              { text: 'PBKDF2 零知识密码生成', link: '/zh/docs/pbkdf2' },
            ],
          },
          { text: '关于本站', link: '/zh/team' },
          { text: 'GitHub', link: 'https://github.com/yshenze/zeapi' },
          { text: '站长博客', link: 'https://mengze.vip/' },
          { text: '公共短链接服务', link: 'https://mzurl.xyz' },
        ],
        sidebar: {
          '/zh/docs/': [
            {
              text: '接口列表',
              collapsed: false,
              items: [
                { text: '历史上的今天', link: '/zh/docs/today' },
                { text: '随机一言', link: '/zh/docs/onesay' },
                { text: '域名 Whois + 查价', link: '/zh/docs/whois' },
                { text: '二维码生成', link: '/zh/docs/qrcode' },
                { text: '获取 QQ 昵称和头像', link: '/zh/docs/qqinfo' },
                { text: '我的世界服务器信息获取', link: '/zh/docs/mcstatus' },
                { text: 'TOTP 临时密码生成', link: '/zh/docs/key2otp' },
                { text: '我的世界皮肤/披风链接获取', link: '/zh/docs/mcinfo' },
                { text: '域名 ICP 备案查询', link: '/zh/docs/icpquery' },
                { text: 'IP 地址归属地查询', link: '/zh/docs/ipseek' },
                { text: 'Base64 ⇄ 文本', link: '/zh/docs/b64totext' },
                { text: 'Base64 ⇄ 图片', link: '/zh/docs/b64toimg' },
                { text: '随机二次元图片', link: '/zh/docs/sjecy' },
                { text: '随机 Meme 图片', link: '/zh/docs/sjmeme' },
                { text: 'PBKDF2 零知识密码生成', link: '/zh/docs/pbkdf2' },
              ],
            },
            {
              text: '其他',
              items: [
                { text: '关于本站', link: '/zh/team' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/yshenze/zeapi/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        footer: {
          message: '基于 MIT 协议发布。',
          copyright: `版权所有 © 2024-${new Date().getFullYear()} ZeAPI 团队`,
        },
        lastUpdated: {
          text: '最后更新',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        outline: {
          level: 'deep',
          label: '本页目录'
        },
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '外观',
      }
    }
  },

  // ========== 全局主题配置 ==========
  themeConfig: {
    logo: '/favicon.svg',
    
    // 搜索功能增强
    search: {
      provider: 'local',
      options: {
        detailedView: true,  // 显示详细搜索结果
        disableQueryPersistence: false,
        maxSuggestions: 10,
        locales: {
          root: {
            placeholder: 'Search documentation...', // 搜索框提示文本
            translations: {
              button: {
                buttonText: 'Search...',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          },
          zh: {
            placeholder: '搜索文档...', // 中文搜索框提示
            translations: {
              button: {
                buttonText: '搜索文档...',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '没有找到结果：',
                resetButtonTitle: '清除搜索条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yshenze/zeapi' },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 3C8.46 3 10.13 4.58 10.35 6.5H21V9H10.35C10.13 10.92 8.46 12.5 6.5 12.5C4 12.5 2 10.5 2 8S4 3.5 6.5 3.5M6.5 5.5C5.4 5.5 4.5 6.4 4.5 7.5S5.4 9.5 6.5 9.5C7.6 9.5 8.5 8.6 8.5 7.5S7.6 5.5 6.5 5.5M6.5 11C8.46 11 10.13 12.58 10.35 14.5H21V17H10.35C10.13 18.92 8.46 20.5 6.5 20.5C4 20.5 2 18.5 2 16S4 11.5 6.5 11.5M6.5 13.5C5.4 13.5 4.5 14.4 4.5 15.5S5.4 17.5 6.5 17.5C7.6 17.5 8.5 16.6 8.5 15.5S7.6 13.5 6.5 13.5Z"/></svg>'
        },
        link: 'https://mzurl.xyz'
      }
    ],
    
    localeLinks: {
      items: [
        { text: 'English', link: '/' },
        { text: '简体中文', link: '/zh/' }
      ]
    },
    
    darkModeSwitchLabel: 'Appearance',
    returnToTopLabel: 'Return to top',
    outline: {
      level: 'deep',
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    
    // 社交媒体分享功能
    socialShare: {
      networks: [
        { name: 'twitter', icon: 'i-ri-twitter-x-fill', color: '#000000' },
        { name: 'facebook', icon: 'i-ri-facebook-fill', color: '#1877f2' },
        { name: 'reddit', icon: 'i-ri-reddit-fill', color: '#ff4500' },
        { name: 'whatsapp', icon: 'i-ri-whatsapp-fill', color: '#25d366' },
        { name: 'linkedin', icon: 'i-ri-linkedin-fill', color: '#0a66c2' },
        { name: 'telegram', icon: 'i-ri-telegram-fill', color: '#0088cc' },
        { name: 'email', icon: 'i-ri-mail-fill', color: '#ea4335' }
      ]
    }
  },

  // ========== 构建优化 ==========
  build: {
    minify: 'terser',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  
  // ========== 缓存配置 ==========
  cacheDir: './.vitepress/.vite',
  
  // ========== RSS 配置 (使用 feed 包) ==========
async buildEnd(siteConfig) {
  const { pages, outDir } = siteConfig
  const baseUrl = 'https://zeapi.ink'
  
  // 创建英文 RSS feed
  const enFeed = new Feed({
    title: 'ZeAPI Documentation Updates',
    description: 'Latest updates to ZeAPI documentation',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: `${baseUrl}/logo.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `Copyright © ${new Date().getFullYear()} ZeAPI Team`,
    updated: new Date(),
    generator: 'Feed for Node.js',
  })
  
  // 创建中文 RSS feed
  const zhFeed = new Feed({
    title: '梦泽API文档更新',
    description: '梦泽API文档的最新更新',
    id: `${baseUrl}/zh/`,
    link: `${baseUrl}/zh/`,
    language: 'zh',
    image: `${baseUrl}/zh/logo.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `版权所有 © ${new Date().getFullYear()} ZeAPI 团队`,
    updated: new Date(),
    generator: 'Feed for Node.js',
  })
  
  // 安全过滤页面
  const validPages = pages.filter(page => 
    page && 
    page.path && 
    typeof page.path === 'string'
  )
  
  // 添加页面到 RSS
  validPages
    .filter(page => 
      !page.path.startsWith('/404') && 
      !page.path.startsWith('/private'))
    .forEach(page => {
      // 添加默认值防止属性缺失
      const item = {
        title: page.title || 'Untitled',
        id: `${baseUrl}${page.path}`,
        link: `${baseUrl}${page.path}`,
        description: page.description || 'No description available',
        date: page.lastUpdated ? new Date(page.lastUpdated) : new Date(),
      }
      
      // 根据语言添加到对应的 feed
      if (page.lang === 'en-US') {
        enFeed.addItem(item)
      } else if (page.lang === 'zh-CN') {
        zhFeed.addItem(item)
      }
    })
  
  // 写入 RSS 文件
  const fs = await import('fs')
  const path = await import('path')
  
  // 确保目录存在
  const zhDir = path.join(outDir, 'zh')
  if (!fs.existsSync(zhDir)) {
    fs.mkdirSync(zhDir, { recursive: true })
  }
  
  // 写入英文 RSS
  fs.writeFileSync(
    path.join(outDir, 'feed.rss'),
    enFeed.rss2()
  )
  
  // 写入中文 RSS
  fs.writeFileSync(
    path.join(outDir, 'zh', 'feed.rss'),
    zhFeed.rss2()
  )
  
  console.log('RSS feeds generated successfully!')
},  
  // ========== PWA 支持 ==========
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'ZeAPI Documentation',
      short_name: 'ZeAPI Docs',
      description: 'API documentation for ZeAPI services',
      theme_color: '#3eaf7c',
      icons: [
        {
          src: '/favicon.svg',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/favicon.svg',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
})