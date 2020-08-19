module.exports = {
  base: '/',
  title: 'InPageEdit 文档中心',
  description: 'InPageEdit Documentation Center',
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
  theme: 'antdocs',
  themeConfig: {
    logo: '/images/logo/IPE-v2.png',
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
            '/guide/intro',
            '/guide/install/quick-start',
            '/guide/install/gadget'
          ],
        },
        {
          title: '功能说明',
          collapsable: false,
          children: [
            '/guide/usage/quick-delete',
            '/guide/usage/quick-diff',
            '/guide/usage/quick-preview',
            '/guide/usage/quick-edit',
            '/guide/usage/quick-redirect',
            '/guide/usage/quick-rename',
            '/guide/usage/toolbox',
          ]
        }
      ],
      '/api/': [
        {
          title: 'InPageEdit API',
          collapsable: false,
          children: [
            '/api/',
            '/api/hook'
          ]
        }
      ],
      '/update/': [
        {
          title: '更新日志',
          collapsable: false,
          children: [
            '/update/'
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
    docsRepo: 'Wjghj-Project/InPageEdit-Document',
    docsBranch: 'master',
    editLinks: true,
    lastUpdated: '上次更新',
    editLinkText: '帮助我们改善此页面',
  }
}