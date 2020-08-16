module.exports = {
  title: 'InPageEdit 文档中心',
  description: 'InPageEdit Documents Center',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js' }]
  ],
  // base: '/inpageedit-document/',
  dest: './dist',
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/register-components', {
      componentDir: 'components',
    }],
  ],
  themeConfig: {
    logo: '/images/logo/IPE-v2.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: 'API', link: '/api/' },
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
            '/guide/',
            '/guide/install-quick-start',
            '/guide/install-via-gadget'
          ],
        },
        {
          title: '功能介绍',
          collapsable: false,
          children: [
            '/guide/quick-delete',
            '/guide/quick-diff',
            '/guide/quick-edit',
            '/guide/quick-redirect',
            '/guide/quick-rename',
            '/guide/toolbox',
          ]
        }
      ],
      '/api/': [
        {
          title: 'InPageEdit API',
          collapsable: false,
          children: [
            '/api/'
          ]
        },
        {
          title: '钩子 Hook',
          collapsable: true,
          children: [
            '/api/hook'
          ]
        }
      ],
      '/about/': [
        {
          title: '关于插件',
          collapsable: false,
          children: [
            '/about/',
            '/about/logo',
            '/about/donate'
          ]
        }
      ]
    },
    lastUpdated: '上次更新',
    docsRepo: 'Wjghj-Project/InPageEdit-Document',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面',
  }
}