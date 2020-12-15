const sideBar = require('./themeConfig/sideBar');
const navBar = require('./themeConfig/navBar');

module.exports = {
  // base: '/Documentation/',
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
    // PWA
    ['link', { rel: 'icon', href: '/images/logo/IPE.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#2684FF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo/IPE.png' }],
    ['link', { rel: 'mask-icon', href: '/images/logo/IPE.png', color: '#2684FF' }],
    ['meta', { name: 'msapplication-TileImage', content: '/images/logo/IPE.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // Google Search Console
    ['meta', { name: 'google-site-verification', content: 'Q1_PKtYLVLIMle_pJuNSTfXa8qIs0w9b_YTKHEPjCU4' }],
  ],
  dest: './dist',
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/register-components', {
      componentDir: 'components',
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
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
        nav: navBar.zh,
        sidebar: sideBar.zh
      },
      '/en/': {
        label: 'English',
        lastUpdated: 'Last Updated:',
        editLinkText: 'Help us improve this page',
        nav: navBar.en,
        sidebar: sideBar.en
      }
    }
  }
}