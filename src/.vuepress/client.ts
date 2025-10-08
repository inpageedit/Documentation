import { defineClientConfig } from 'vuepress/client'
import GlobalBanner from './components/GlobalBanner.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 全局注册横幅组件
    app.component('GlobalBanner', GlobalBanner)
  },
  setup() {},
  rootComponents: [GlobalBanner],
})

