import { defineConfig } from 'vitepress'
import { figure } from '@mdit/plugin-figure'

export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/Logo.svg' }],
    ['meta', { name: 'author', content: 'ZeAPI Team' }],
    ['meta', { name: 'keywords', content: 'API, public API, free API, ZeAPI, documentation, REST API, web services' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@zeapi' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.mengze.vip/npm/@fortawesome/fontawesome-free@6/css/all.min.css' }]
  ],
  appearance: true,
  sitemap: {
    hostname: 'https://zeapi.ink',
  },
  markdown: {
    config: (md) => {
      md.use(figure);
    },
    theme: { light: 'github-light', dark: 'dracula' },
    lineNumbers: true,
    image: {
      lazy: true,
      webp: true,
      sizes: '100vw',
      decoding: 'async',
      loading: 'lazy',
      quality: 85
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '梦泽公共API文档',
      titleTemplate: ':title | 梦泽API',
      description: 'ZeAPI 服务的 API 文档',
      link: '/',
      head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { href: 'https://fonts.googleapis.com/css2?family=Source+Han+Sans+SC:wght@400&display=swap', rel: 'stylesheet' }],
        ['style', {}, 'body { font-family: "Source Han Sans SC", sans-serif; }'],
      ],
      themeConfig: {
        siteTitle: '',
        mobileNav: {
          text: '菜单',
          openIcon: 'fa-solid fa-bars',
          closeIcon: 'fa-solid fa-xmark'
        },
        seo: {
          title: '梦泽API - 免费公共服务接口',
          description: '提供域名查询、二维码生成、IP定位、我的世界信息查询、ICP备案查询等API服务',
          ogImage: '/Logo.svg',
          twitterCard: 'summary_large_image',
          canonicalUrl: 'https://zeapi.ink/',
          ogUrl: 'https://zeapi.ink/',
          ogType: 'website'
        },
        nav: [
          { text: '<i class="fa-solid fa-house" aria-hidden="true"></i> 首页', link: '/' },
          {
            text: '<i class="fa-solid fa-plug" aria-hidden="true"></i> 接口列表',
            items: [
              { text: '<i class="fa-solid fa-list-ul" aria-hidden="true"></i> 所有接口总览', link: '/docs' },
              { text: '<i class="fa-solid fa-calendar-day" aria-hidden="true"></i> 历史上的今天', link: '/docs/today' },
              { text: '<i class="fa-solid fa-quote-right" aria-hidden="true"></i> 随机一言', link: '/docs/onesay' },
              { text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> 域名 Whois + 查价', link: '/docs/whois' },
              { text: '<i class="fa-solid fa-qrcode" aria-hidden="true"></i> 二维码生成', link: '/docs/qrcode' },
              { text: '<i class="fa-solid fa-user-circle" aria-hidden="true"></i> 获取 QQ 昵称和头像', link: '/docs/qqinfo' },
              { text: '<i class="fa-solid fa-cube" aria-hidden="true"></i> 我的世界服务器信息获取', link: '/docs/mcstatus' },
              { text: '<i class="fa-solid fa-clock" aria-hidden="true"></i> TOTP 临时密码生成', link: '/docs/key2otp' },
              { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> 我的世界皮肤/披风链接获取', link: '/docs/mcinfo' },
              { text: '<i class="fa-solid fa-file-lines" aria-hidden="true"></i> 域名 ICP 备案查询', link: '/docs/icpquery' },
              { text: '<i class="fa-solid fa-map-marker" aria-hidden="true"></i> IP 地址归属地查询', link: '/docs/ipseek' },
              { text: '<i class="fa-solid fa-font" aria-hidden="true"></i> Base64 ⇄ 文本', link: '/docs/b64totext' },
              { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Base64 ⇄ 图片', link: '/docs/b64toimg' },
              { text: '<i class="fa-solid fa-images" aria-hidden="true"></i> 随机二次元图片', link: '/docs/sjecy' },
              { text: '<i class="fa-solid fa-face-smile" aria-hidden="true"></i> 随机 Meme 图片', link: '/docs/sjmeme' },
              { text: '<i class="fa-solid fa-lock" aria-hidden="true"></i> PBKDF2 零知识密码生成', link: '/docs/pbkdf2' },
              { text: '<i class="fa-solid fa-link" aria-hidden="true"></i> QQ 强制转跳', link: '/docs/qzztqq' },
              { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Bing 每日壁纸', link: '/docs/bingpic' },
              { text: '<i class="fa-solid fa-chart-line" aria-hidden="true"></i> 抖音热搜', link: '/docs/douyin' },
              { text: '<i class="fa-solid fa-chart-line" aria-hidden="true"></i> 百度热点', link: '/docs/baidu' },
              { text: '<i class="fa-solid fa-shield-halved" aria-hidden="true"></i> 微信域名拦截检测', link: '/docs/txljjc' },
              { text: '<i class="fa-solid fa-fingerprint" aria-hidden="true"></i> UUID 生成器', link: '/docs/uuid' },
              { text: '<i class="fa-solid fa-shield-halved" aria-hidden="true"></i> SSL证书信息查询', link: '/docs/sslinfo' },
              { text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> 网站元数据获取', link: '/docs/siteinfo' },
              { text: '<i class="fa-solid fa-key" aria-hidden="true"></i> JWT 解析与验证', link: '/docs/jwt' },
              { text: '<i class="fa-solid fa-gamepad" aria-hidden="true"></i> Epic 免费游戏查询', link: '/docs/epicgame' },
            ],
          },
          { text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> 关于本站', link: '/docs/team' },
          { text: '<i class="fa-solid fa-link" aria-hidden="true"></i> 友情链接', link: '/docs/links' },
          { text: '<i class="fa-brands fa-github" aria-hidden="true"></i> GitHub', link: 'https://github.com/yshenze/zeapi' },
          { text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> 站长博客', link: 'https://mengze.vip/' },
        ],
        sidebar: {
          '/docs/': [
            {
              text: '<i class="fa-solid fa-wrench" aria-hidden="true"></i> 通用工具',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-calendar-day" aria-hidden="true"></i> 历史上的今天', link: '/docs/today' },
                { text: '<i class="fa-solid fa-quote-right" aria-hidden="true"></i> 随机一言', link: '/docs/onesay' },
                { text: '<i class="fa-solid fa-qrcode" aria-hidden="true"></i> 二维码生成', link: '/docs/qrcode' },
                { text: '<i class="fa-solid fa-images" aria-hidden="true"></i> 随机二次元图片', link: '/docs/sjecy' },
                { text: '<i class="fa-solid fa-face-smile" aria-hidden="true"></i> 随机 Meme 图片', link: '/docs/sjmeme' },
                { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Bing 每日壁纸', link: '/docs/bingpic' },
                { text: '<i class="fa-solid fa-gamepad" aria-hidden="true"></i> Epic 免费游戏查询', link: '/docs/epicgame' },
              ],
            },
            {
              text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> 域名与IP服务',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> 域名 Whois + 查价', link: '/docs/whois' },
                { text: '<i class="fa-solid fa-file-lines" aria-hidden="true"></i> 域名 ICP 备案查询', link: '/docs/icpquery' },
                { text: '<i class="fa-solid fa-map-marker" aria-hidden="true"></i> IP 地址归属地查询', link: '/docs/ipseek' },
                { text: '<i class="fa-solid fa-shield-halved" aria-hidden="true"></i> SSL证书信息查询', link: '/docs/sslinfo' },
              ],
            },
            {
              text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> 社交媒体与网络',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-user-circle" aria-hidden="true"></i> 获取 QQ 昵称和头像', link: '/docs/qqinfo' },
                { text: '<i class="fa-solid fa-link" aria-hidden="true"></i> QQ 强制转跳', link: '/docs/qzztqq' },
                { text: '<i class="fa-solid fa-chart-line" aria-hidden="true"></i> 抖音热搜', link: '/docs/douyin' },
                { text: '<i class="fa-solid fa-chart-line" aria-hidden="true"></i> 百度热点', link: '/docs/baidu' },
                { text: '<i class="fa-solid fa-shield-halved" aria-hidden="true"></i> 微信域名拦截检测', link: '/docs/txljjc' },
                { text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> 网站元数据获取', link: '/docs/siteinfo' },
              ],
            },
            {
              text: '<i class="fa-solid fa-cube" aria-hidden="true"></i> 我的世界服务',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-cube" aria-hidden="true"></i> 我的世界服务器信息获取', link: '/docs/mcstatus' },
                { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> 我的世界皮肤/披风链接获取', link: '/docs/mcinfo' },
              ],
            },
            {
              text: '<i class="fa-solid fa-lock" aria-hidden="true"></i> 安全与编码',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-clock" aria-hidden="true"></i> TOTP 临时密码生成', link: '/docs/key2otp' },
                { text: '<i class="fa-solid fa-lock" aria-hidden="true"></i> PBKDF2 零知识密码生成', link: '/docs/pbkdf2' },
                { text: '<i class="fa-solid fa-font" aria-hidden="true"></i> Base64 ⇄ 文本', link: '/docs/b64totext' },
                { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Base64 ⇄ 图片', link: '/docs/b64toimg' },
                { text: '<i class="fa-solid fa-fingerprint" aria-hidden="true"></i> UUID 生成器', link: '/docs/uuid' },
                { text: '<i class="fa-solid fa-key" aria-hidden="true"></i> JWT 解析与验证', link: '/docs/jwt' },
              ],
            },
            {
              text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> 其他',
              items: [
                { text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> 关于本站', link: '/docs/team' },
                { text: '<i class="fa-solid fa-link" aria-hidden="true"></i> 友情链接', link: '/docs/links' },
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
          formatOptions: { dateStyle: 'full', timeStyle: 'medium' }
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
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'ZeAPI Documentation',
      titleTemplate: ':title | ZeAPI',
      description: 'Comprehensive API documentation for ZeAPI services',
      link: '/en/',
      head: [],
      themeConfig: {
        siteTitle: '',
        mobileNav: {
          text: 'Menu',
          openIcon: 'fa-solid fa-bars',
          closeIcon: 'fa-solid fa-xmark'
        },
        seo: {
          title: 'ZeAPI - Free Public API Services',
          description: 'API documentation for ZeAPI services including domain whois, QR code generation, IP geolocation, Minecraft server status and more.',
          ogImage: '/en/Logo.svg',
          twitterCard: 'summary_large_image',
          canonicalUrl: 'https://zeapi.ink/en/',
          ogUrl: 'https://zeapi.ink/en/',
          ogType: 'website'
        },
        nav: [
          { text: '<i class="fa-solid fa-house" aria-hidden="true"></i> Home', link: '/en/' },
          {
            text: '<i class="fa-solid fa-plug" aria-hidden="true"></i> API List',
            items: [
              { text: '<i class="fa-solid fa-list-ul" aria-hidden="true"></i> All APIs', link: '/en/docs' },
              { text: '<i class="fa-solid fa-calendar-day" aria-hidden="true"></i> Today in History', link: '/en/docs/today' },
              { text: '<i class="fa-solid fa-quote-right" aria-hidden="true"></i> Random Quote', link: '/en/docs/onesay' },
              { text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> Domain Whois & Pricing', link: '/en/docs/whois' },
              { text: '<i class="fa-solid fa-qrcode" aria-hidden="true"></i> QR Code Generator', link: '/en/docs/qrcode' },
              { text: '<i class="fa-solid fa-user-circle" aria-hidden="true"></i> QQ Nickname & Avatar', link: '/en/docs/qqinfo' },
              { text: '<i class="fa-solid fa-cube" aria-hidden="true"></i> Minecraft Server Status', link: '/en/docs/mcstatus' },
              { text: '<i class="fa-solid fa-clock" aria-hidden="true"></i> TOTP Generator', link: '/en/docs/key2otp' },
              { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Minecraft Skin/Cape', link: '/en/docs/mcinfo' },
              { text: '<i class="fa-solid fa-file-lines" aria-hidden="true"></i> ICP Lookup', link: '/en/docs/icpquery' },
              { text: '<i class="fa-solid fa-map-marker" aria-hidden="true"></i> IP Geolocation', link: '/en/docs/ipseek' },
              { text: '<i class="fa-solid fa-font" aria-hidden="true"></i> Base64 ⇄ Text', link: '/en/docs/b64totext' },
              { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Base64 ⇄ Image', link: '/en/docs/b64toimg' },
              { text: '<i class="fa-solid fa-images" aria-hidden="true"></i> Random Anime Pic', link: '/en/docs/sjecy' },
              { text: '<i class="fa-solid fa-face-smile" aria-hidden="true"></i> Random Meme Pic', link: '/en/docs/sjmeme' },
              { text: '<i class="fa-solid fa-lock" aria-hidden="true"></i> PBKDF2 Generator', link: '/en/docs/pbkdf2' },
              { text: '<i class="fa-solid fa-link" aria-hidden="true"></i> QQ Forced Redirect', link: '/en/docs/qzztqq' },
              { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Bing Daily Wallpaper', link: '/en/docs/bingpic' },
              { text: '<i class="fa-solid fa-chart-line" aria-hidden="true"></i> Douyin Hot Search', link: '/en/docs/douyin' },
              { text: '<i class="fa-solid fa-chart-line" aria-hidden="true"></i> Baidu Hot Search', link: '/en/docs/baidu' },
              { text: '<i class="fa-solid fa-shield-halved" aria-hidden="true"></i> WeChat Domain Block Detection', link: '/en/docs/txljjc' },
              { text: '<i class="fa-solid fa-fingerprint" aria-hidden="true"></i> UUID Generator', link: '/en/docs/uuid' },
              { text: '<i class="fa-solid fa-shield-halved" aria-hidden="true"></i> SSL Certificate Info', link: '/en/docs/sslinfo' },
              { text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> Website Metadata', link: '/en/docs/siteinfo' },
              { text: '<i class="fa-solid fa-key" aria-hidden="true"></i> JWT Parse & Verify', link: '/en/docs/jwt' },
              { text: '<i class="fa-solid fa-gamepad" aria-hidden="true"></i> Epic Free Games', link: '/en/docs/epicgame' },
            ],
          },
          { text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> About Me', link: '/en/docs/team' },
          { text: '<i class="fa-solid fa-link" aria-hidden="true"></i> Links', link: '/en/docs/links' },
          { text: '<i class="fa-brands fa-github" aria-hidden="true"></i> GitHub', link: 'https://github.com/yshenze/zeapi' },
          { text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> Blog', link: 'https://mengze.vip/' },
        ],
        sidebar: {
          '/en/docs/': [
            {
              text: '<i class="fa-solid fa-wrench" aria-hidden="true"></i> General Utilities',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-calendar-day" aria-hidden="true"></i> Today in History', link: '/en/docs/today' },
                { text: '<i class="fa-solid fa-quote-right" aria-hidden="true"></i> Random Quote', link: '/en/docs/onesay' },
                { text: '<i class="fa-solid fa-qrcode" aria-hidden="true"></i> QR Code Generator', link: '/en/docs/qrcode' },
                { text: '<i class="fa-solid fa-images" aria-hidden="true"></i> Random Anime Pic', link: '/en/docs/sjecy' },
                { text: '<i class="fa-solid fa-face-smile" aria-hidden="true"></i> Random Meme Pic', link: '/en/docs/sjmeme' },
                { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Bing Daily Wallpaper', link: '/en/docs/bingpic' },
                { text: '<i class="fa-solid fa-gamepad" aria-hidden="true"></i> Epic Free Games', link: '/en/docs/epicgame' },
              ],
            },
            {
              text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> Domain & IP Services',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> Domain Whois & Pricing', link: '/en/docs/whois' },
                { text: '<i class="fa-solid fa-file-lines" aria-hidden="true"></i> ICP Lookup', link: '/en/docs/icpquery' },
                { text: '<i class="fa-solid fa-map-marker" aria-hidden="true"></i> IP Geolocation', link: '/en/docs/ipseek' },
                { text: '<i class="fa-solid fa-shield-halved" aria-hidden="true"></i> SSL Certificate Info', link: '/en/docs/sslinfo' },
              ],
            },
            {
              text: '<i class="fa-solid fa-globe" aria-hidden="true"></i> Social Media & Web',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-user-circle" aria-hidden="true"></i> QQ Nickname & Avatar', link: '/en/docs/qqinfo' },
                { text: '<i class="fa-solid fa-link" aria-hidden="true"></i> QQ Forced Redirect', link: '/en/docs/qzztqq' },
                { text: '<i class="fa-solid fa-chart-line" aria-hidden="true"></i> Douyin Hot Search', link: '/en/docs/douyin' },
                { text: '<i class="fa-solid fa-chart-line" aria-hidden="true"></i> Baidu Hot Search', link: '/en/docs/baidu' },
                { text: '<i class="fa-solid fa-shield-halved" aria-hidden="true"></i> WeChat Domain Block Detection', link: '/en/docs/txljjc' },
                { text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> Website Metadata', link: '/en/docs/siteinfo' },
              ],
            },
            {
              text: '<i class="fa-solid fa-cube" aria-hidden="true"></i> Minecraft Services',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-cube" aria-hidden="true"></i> Minecraft Server Status', link: '/en/docs/mcstatus' },
                { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Minecraft Skin/Cape', link: '/en/docs/mcinfo' },
              ],
            },
            {
              text: '<i class="fa-solid fa-lock" aria-hidden="true"></i> Security & Encoding',
              collapsed: false,
              items: [
                { text: '<i class="fa-solid fa-clock" aria-hidden="true"></i> TOTP Generator', link: '/en/docs/key2otp' },
                { text: '<i class="fa-solid fa-lock" aria-hidden="true"></i> PBKDF2 Generator', link: '/en/docs/pbkdf2' },
                { text: '<i class="fa-solid fa-font" aria-hidden="true"></i> Base64 ⇄ Text', link: '/en/docs/b64totext' },
                { text: '<i class="fa-solid fa-image" aria-hidden="true"></i> Base64 ⇄ Image', link: '/en/docs/b64toimg' },
                { text: '<i class="fa-solid fa-fingerprint" aria-hidden="true"></i> UUID Generator', link: '/en/docs/uuid' },
                { text: '<i class="fa-solid fa-key" aria-hidden="true"></i> JWT Parse & Verify', link: '/en/docs/jwt' },
              ],
            },
            {
              text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> Other',
              items: [
                { text: '<i class="fa-solid fa-info-circle" aria-hidden="true"></i> About Me', link: '/en/docs/team' },
                { text: '<i class="fa-solid fa-link" aria-hidden="true"></i> Links', link: '/en/docs/links' },
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
          formatOptions: { dateStyle: 'full', timeStyle: 'medium' }
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
    }
  },
  themeConfig: {
    logo: '/Logo.svg',
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        disableQueryPersistence: false,
        maxSuggestions: 10,
        locales: {
          root: {
            placeholder: '搜索文档...',
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
          },
          en: {
            placeholder: 'Search documentation...',
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
          }
        }
      }
    }
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/yshenze/zeapi' },
  ],
  localeLinks: {
    items: [
      { text: '简体中文', link: '/' },
      { text: 'English', link: '/en/' }
    ]
  },
  darkModeSwitchLabel: 'Appearance',
  returnToTopLabel: 'Return to top',
  outline: { level: 'deep', label: 'On this page' },
  docFooter: { prev: 'Previous', next: 'Next' },
  lastUpdated: { text: 'Last updated', formatOptions: { dateStyle: 'full', timeStyle: 'medium' } },
  socialShare: {
    networks: [
      { name: 'twitter', icon: 'fa-brands fa-twitter', color: '#000000' },
      { name: 'facebook', icon: 'fa-brands fa-facebook', color: '#1877f2' },
      { name: 'reddit', icon: 'fa-brands fa-reddit', color: '#ff4500' },
      { name: 'whatsapp', icon: 'fa-brands fa-whatsapp', color: '#25d366' },
      { name: 'linkedin', icon: 'fa-brands fa-linkedin', color: '#0a66c2' },
      { name: 'telegram', icon: 'fa-brands fa-telegram', color: '#0088cc' },
      { name: 'email', icon: 'fa-solid fa-envelope', color: '#ea4335' }
    ]
  },
  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui'
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui'
      ],
    },
  },
  theme: './theme/index.js',
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
  cacheDir: './.vitepress/.vite',
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'ZeAPI',
      short_name: 'ZeAPI Docs',
      description: 'API documentation for ZeAPI services',
      theme_color: '#3eaf7c',
      icons: [
        {
          src: '/Logo.svg',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/Logo.svg',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/./i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/./i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-static-cache',
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 60 * 60 * 24 * 365
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