<template>
  <a href="https://www.ipe.wiki" class="global-banner" v-if="!isClosed">
    <div class="banner-content">
      <div class="banner-text">
        {{ curMsg['banner-text'] }}
      </div>
      <a class="banner-link">{{ curMsg['banner-link'] }}</a>
      <div style="flex: 1"></div>
      <button
        class="banner-close"
        @click.prevent="closeBanner"
        aria-label="Close banner"
      >
        ×
      </button>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, effect, onBeforeUnmount } from 'vue'
import { useLang } from 'vuepress/client'

const i18n = {
  'zh-CN': {
    'banner-text': '🎉 欢迎试用全新版本 InPageEdit NEXT',
    'banner-link': '立即体验 →',
  },
  en: {
    'banner-text': "🎉 Here's new era of MediaWiki edit tool: InPageEdit NEXT",
    'banner-link': 'Try it now →',
  },
}
const lang = useLang()
const curMsg = computed(() => i18n[lang.value] || i18n.en)

const isClosed = ref(false)
const BANNER_ID = 'ipe-next'

let stopEffect: () => void
onMounted(() => {
  const closed = localStorage.getItem('ipe-banner-closed')
  if (closed === BANNER_ID) {
    isClosed.value = true
  }

  stopEffect = effect(() => {
    if (typeof document === 'undefined') return
    document.body.classList.toggle('has-banner', !isClosed.value)
  })
})
onBeforeUnmount(() => {
  stopEffect?.()
})

const closeBanner = () => {
  isClosed.value = true
  localStorage.setItem('ipe-banner-closed', BANNER_ID)
}
</script>

<style scoped>
.global-banner {
  box-sizing: border-box;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 20px;
  position: fixed;
  top: var(--navbar-height);
  width: 100%;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.banner-content {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.banner-text {
  font-size: 15px;
  font-weight: 500;
}

.banner-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.banner-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.banner-close {
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0 8px;
  line-height: 1;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.banner-close:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .global-banner {
    padding: 10px 16px;
  }

  .banner-content {
    gap: 12px;
  }

  .banner-text {
    font-size: 14px;
  }

  .banner-link {
    padding: 4px 12px;
    font-size: 14px;
  }
}
</style>

<style lang="scss">
body.has-banner {
  .vp-theme-container,
  .vp-sidebar-items {
    margin-top: 60px;
  }
}
</style>
