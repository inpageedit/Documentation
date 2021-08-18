const { buildToc } = require('../scripts/buildToc')
const { resolve } = require('path')

module.exports = {
  zh: {
    '/guide/': [
      {
        text: '快速上手',
        collapsable: false,
        children: [
          '/guide/intro',
          '/guide/install/quick-start',
          '/guide/install/gadget',
        ],
      },
      {
        text: '功能说明',
        collapsable: false,
        children: [
          '/guide/usage/quick-delete',
          '/guide/usage/quick-diff',
          '/guide/usage/quick-preview',
          '/guide/usage/quick-edit',
          '/guide/usage/quick-redirect',
          '/guide/usage/quick-rename',
          '/guide/usage/toolbox',
        ],
      },
    ],
    '/develop/': [
      {
        text: 'InPageEdit 开发手册',
        collapsable: false,
        children: [
          '',
          '/develop/api',
          '/develop/hook',
          '/develop/nouns',
          '/develop/plugin',
        ],
      },
      {
        text: 'Analysis API 文档',
        collapsable: false,
        children: [
          '/develop/analysis/',
          '/develop/analysis/v4',
          '/develop/analysis/v3',
          '/develop/analysis/v2',
        ],
      },
    ],
    '/update/': [
      {
        text: '更新日志',
        collapsable: false,
        children: buildToc(resolve(__dirname, '../../update')),
      },
    ],
    '/about/': [
      {
        text: '关于插件',
        collapsable: false,
        children: ['', '/about/logo', '/about/do-you-know', '/about/donate'],
      },
    ],
  },
  en: {
    '/en/guide/': [
      {
        text: 'Get Started',
        collapsable: false,
        children: [
          '/en/guide/intro',
          '/en/guide/install/quick-start',
          '/en/guide/install/gadget',
        ],
      },
      {
        text: 'Features',
        collapsable: false,
        children: [
          '/en/guide/usage/quick-delete',
          '/en/guide/usage/quick-diff',
          '/en/guide/usage/quick-edit',
          '/en/guide/usage/quick-redirect',
          '/en/guide/usage/quick-rename',
          '/en/guide/usage/toolbox',
        ],
      },
    ],
    '/en/api/': [
      {
        text: 'InPageEdit API',
        collapsable: false,
        children: ['/en/api/', '/en/api/hook'],
      },
    ],
    '/en/about/': [
      {
        text: 'About',
        collapsable: false,
        children: ['/en/about/', '/en/about/logo', '/en/about/donate'],
      },
    ],
  },
}
