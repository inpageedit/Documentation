const path = require('path')
const sideBar = require('./themeConfig/sideBar')
const navBar = require('./themeConfig/navBar')

module.exports = {
  // base: '/Documentation/',
  bundler: '@vuepress/bundler-vite',
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
  ],
  dest: './dist',
  plugins: [
    ['@vuepress/plugin-back-to-top'],
    // ['@vuepress/plugin-search'],
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: '59c89e1e2464da17d2b76e6f7757ec2c',
        indexName: 'ipe-js',
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    [
      '@vuepress/plugin-pwa',
      {
        skipWaiting: true,
      },
    ],
  ],
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@src/, path.resolve(__dirname, '../')),
    },
  },
  themeConfig: {
    logo: '/images/logo/IPE-v2.png',
    docsRepo: 'https://github.com/inpageedit/Documentation',
    docsBranch: 'master',
    docsDir: 'src',
    editLinks: true,
    locales: {
      ariaLabel: 'Languages',
      selectText: 'Languages',
      '/': {
        selectLanguageName: '简体中文',
        lastUpdatedText: '上次更新',
        editLinkText: '帮助我们改善此页面',
        contributorsText: '编辑者',
        navbar: navBar.zh,
        sidebar: sideBar.zh,
        tip: '提示',
        warning: '注意',
        danger: '警告',
        backToHome: '回到首页',
      },
      '/en/': {
        selectLanguageName: 'English',
        lastUpdatedText: 'Last Updated',
        editLinkText: 'Help us improve this page',
        contributorsText: 'Contributors',
        navbar: navBar.en,
        sidebar: sideBar.en,
      },
    },
  },
}
