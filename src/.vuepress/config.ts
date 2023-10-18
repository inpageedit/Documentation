import { defineUserConfig } from 'vuepress'
// import { viteBundler } from '@vuepress/bundler-vite'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import path from 'path'
import theme from './theme'

/** @type {import('vuepress').AppConfig} */
export default defineUserConfig({
  // base: '/Documentation/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '文档中心',
      description: 'InPageEdit 文档中心',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Documentation',
      description: 'InPageEdit Documentation Center',
    },
  },
  head: [
    // PWA
    ['link', { rel: 'icon', href: '/images/logo/IPE.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#2684FF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo/IPE.png' }],
    [
      'link',
      { rel: 'mask-icon', href: '/images/logo/IPE.png', color: '#2684FF' },
    ],
    [
      'meta',
      { name: 'msapplication-TileImage', content: '/images/logo/IPE.png' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // Google Search Console
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'Q1_PKtYLVLIMle_pJuNSTfXa8qIs0w9b_YTKHEPjCU4',
      },
    ],
    // Google AdSense
    [
      'script',
      {
        async: '',
        crossorigin: 'anonymous',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5028262357303610',
      },
    ],
  ],
  dest: './dist',
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      appId: 'A5IY4FQUKF',
      apiKey: '0f3e3e3d0151afdafaa23a4133c42b2f',
      indexName: 'ipe-js',
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: 'Search',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@src/, path.resolve(__dirname, '../')),
    },
  },
  theme,
})
