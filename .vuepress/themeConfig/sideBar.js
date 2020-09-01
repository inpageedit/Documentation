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
        title: 'InPageEdit API',
        collapsable: false,
        children: [
          '',
          'api',
          'hook',
          'nouns',
          'plugin'
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