import { defineConfig } from 'vitepress'
import { figure } from '@mdit/plugin-figure'

export default defineConfig({
  // ========== 全局共享配置 ==========
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  lastUpdated: true,
  appearance: 'dark',
  
  markdown: {
    config: (md) => md.use(figure),
    theme: {
      light: 'github-light',
      dark: 'dracula'
    },
    lineNumbers: true
  },

  // ========== 多语言配置 ==========
  locales: {
    // 英文 (根语言)
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'ZeAPI Documentation',
      titleTemplate: ':title | ZeAPI',
      description: 'API documentation for ZeAPI services',
      link: '/',  // 根路径
      themeConfig: {
        siteTitle: 'ZeAPI',
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
          ],
        },
        editLink: {
          pattern: 'https://github.com/yshenze/zeapi/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: `Copyright © 2024-${new Date().getFullYear()} ZeAPI Team`,
        },
      }
    },
    
    // 简体中文
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',  // 中文路径前缀
      title: '梦泽公共API文档',
      titleTemplate: ':title | 梦泽API',
      description: 'ZeAPI 服务的 API 文档',
      themeConfig: {
        siteTitle: '梦泽API',
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
              { text: 'PBKDF2 零知识密码生成', link: '/docs/pbkdf2' },
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
                { text: 'PBKDF2 零知识密码生成', link: '/docs/pbkdf2' },
              ],
            },
          ],
        },
        editLink: {
          pattern: 'https://github.com/yshenze/zeapi/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        footer: {
          message: '基于 MIT 协议发布。',
          copyright: `版权所有 © 2024-${new Date().getFullYear()} ZeAPI 团队`,
        },
      }
    }
  },

  // ========== 全局主题配置 ==========
  themeConfig: {
    logo: '/favicon.svg',
    
    // 多语言搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yshenze/zeapi' }
    ],
    
    // 全局语言切换器
    localeLinks: {
      items: [
        { text: 'English', link: '/' },
        { text: '简体中文', link: '/zh/' }
      ]
    },
    
    // 暗黑模式切换
    darkModeSwitchLabel: 'Appearance',
    
    // 返回顶部按钮
    returnToTopLabel: 'Return to top',
    
    // 大纲配置
    outline: {
      level: 'deep',
      label: 'On this page'
    },
    
    // 上一页/下一页文本
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    
    // 最后更新时间文本
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})