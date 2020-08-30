module.exports = {
  // base: '/inpageedit-document/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'InPageEdit 文档中心',
      description: 'InPageEdit Documentation Center'
    },
    '/en/': {
      lang: 'en-US',
      title: 'InPageEdit Documentation Center',
      description: 'InPageEdit Documentation Center'
    }
  },
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js' }]
  ],
  dest: './dist',
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/register-components', {
      componentDir: 'components',
    }],
  ],
  themeConfig: {
    logo: '/images/logo/IPE-v2.png',
    docsRepo: 'Wjghj-Project/InPageEdit-Document',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      ariaLabel: 'Languages',
      selectText: 'Languages',
      '/': {
        label: '简体中文',
        lastUpdated: '上次更新',
        editLinkText: '帮助我们改善此页面',
        nav: [
          { text: '主页', link: '/' },
          {
            text: '文档',
            items: [
              { text: '简介', link: '/guide/intro' },
              { text: '快速上手', link: '/guide/install/quick-start' },
              { text: '功能说明', link: '/guide/usage/quick-delete' }
            ]
          },
          { text: '开发', link: '/develop/' },
          { text: '更新', link: '/update/' },
          { text: '关于', link: '/about/' },
          { text: 'GitHub', link: 'https://github.com/Dragon-Fish/InPageEdit-v2/' }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '快速上手',
              collapsable: false,
              children: [
                'intro',
                'install/quick-start',
                'install/gadget'
              ],
            },
            {
              title: '功能说明',
              collapsable: false,
              children: [
                'usage/quick-delete',
                'usage/quick-diff',
                'usage/quick-preview',
                'usage/quick-edit',
                'usage/quick-redirect',
                'usage/quick-rename',
                'usage/toolbox',
              ]
            }
          ],
          '/develop/': [
            {
              title: 'InPageEdit API',
              collapsable: false,
              children: [
                '',
                'api',
                'hook'
              ]
            }
          ],
          '/update/': [
            {
              title: '更新日志',
              collapsable: false,
              children: [
                ''
              ]
            }
          ],
          '/about/': [
            {
              title: '关于插件',
              collapsable: false,
              children: [
                '',
                'logo',
                'analysis',
                'donate',
              ]
            }
          ]
        }
      },
      '/en/': {
        label: 'English',
        lastUpdated: 'Last Updated:',
        editLinkText: 'Help us improve this page',
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Documents',
            items: [
              { text: 'Intro', link: '/en/guide/intro' },
              { text: 'Quick Start', link: '/en/guide/install/quick-start' },
              { text: 'Function Info', link: '/en/guide/usage/quick-delete' }
            ]
          },
          { text: 'API', link: '/en/api/' },
          { text: 'Updates', link: '/en/update/' },
          { text: 'About', link: '/en/about/' },
          { text: 'GitHub', link: 'https://github.com/Dragon-Fish/InPageEdit-v2/' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              title: 'Get Started',
              collapsable: false,
              children: [
                '/en/guide/intro',
                '/en/guide/install/quick-start',
                '/en/guide/install/gadget'
              ],
            },
            {
              title: 'Features',
              collapsable: false,
              children: [
                '/en/guide/usage/quick-delete',
                '/en/guide/usage/quick-diff',
                '/en/guide/usage/quick-edit',
                '/en/guide/usage/quick-redirect',
                '/en/guide/usage/quick-rename',
                '/en/guide/usage/toolbox',
              ]
            }
          ],
          '/en/api/': [
            {
              title: 'InPageEdit API',
              collapsable: false,
              children: [
                '/en/api/',
                '/en/api/hook'
              ]
            }
          ],
          '/en/about/': [
            {
              title: 'About',
              collapsable: false,
              children: [
                '/en/about/',
                '/en/about/logo',
                '/en/about/donate'
              ]
            }
          ]
        }
      }
    }
  }
}