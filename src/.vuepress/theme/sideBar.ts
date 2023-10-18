import { buildToc } from '../scripts/buildToc'
import { resolve } from 'path'

export default {
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
          '/guide/usage/toolbox',
          '/guide/usage/preference',
          '/guide/usage/quick-delete',
          '/guide/usage/quick-diff',
          '/guide/usage/quick-preview',
          '/guide/usage/quick-edit',
          '/guide/usage/quick-redirect',
          '/guide/usage/quick-rename',
        ],
      },
    ],
    '/develop/': [
      {
        text: 'InPageEdit 开发手册',
        collapsable: false,
        children: [
          '/develop/',
          '/develop/api',
          '/develop/hook',
          '/develop/nouns',
          '/develop/plugin',
        ],
      },
      {
        text: 'Analytics API 文档',
        collapsable: false,
        children: [
          '/develop/analytics/',
          '/develop/analytics/v5',
          '/develop/analytics/v4',
          '/develop/analytics/v3',
          '/develop/analytics/v2',
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
        children: [
          '/about/',
          '/about/logo',
          '/about/do-you-know',
          '/about/donate',
        ],
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
