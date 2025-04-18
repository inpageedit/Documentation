import {} from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import sideBar from './sideBar'
import navBar from './navBar'

export default defaultTheme({
  logo: '/images/logo/IPE-v2.png',
  docsRepo: 'https://github.com/inpageedit/Documentation',
  docsBranch: 'master',
  docsDir: 'src',
  editLink: true,
  locales: {
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
})
