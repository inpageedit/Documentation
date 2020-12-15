module.exports = {
  zh: {
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
        title: 'InPageEdit 开发手册',
        collapsable: false,
        children: [
          '',
          'api',
          'hook',
          'nouns',
          'plugin'
        ]
      },
      {
        title: 'Analysis API 文档',
        collapsable: false,
        children: [
          'analysis/',
          'analysis/v4',
          'analysis/v3',
          'analysis/v2',
        ]
      }
    ],
    '/update/': [
      {
        title: '更新日志',
        collapsable: false,
        children: require('../../update/index.json')
      }
    ],
    '/about/': [
      {
        title: '关于插件',
        collapsable: false,
        children: [
          '',
          'logo',
          'do-you-know',
          'donate',
        ]
      }
    ]
  },
  en: {
    '/en/guide/': [
      {
        title: 'Get Started',
        collapsable: false,
        children: [
          'intro',
          'install/quick-start',
          'install/gadget'
        ],
      },
      {
        title: 'Features',
        collapsable: false,
        children: [
          'usage/quick-delete',
          'usage/quick-diff',
          'usage/quick-edit',
          'usage/quick-redirect',
          'usage/quick-rename',
          'usage/toolbox',
        ]
      }
    ],
    '/en/api/': [
      {
        title: 'InPageEdit API',
        collapsable: false,
        children: [
          '',
          'hook'
        ]
      }
    ],
    '/en/about/': [
      {
        title: 'About',
        collapsable: false,
        children: [
          '',
          'logo',
          'donate'
        ]
      }
    ]
  }
}
