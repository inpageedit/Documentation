<template>
  <div class="global-banner">
    <div class="banner-content">
      <div class="banner-text">🎉 欢迎试用全新版本 InPageEdit NEXT</div>
      <a href="https://www.ipe.wiki" class="banner-link"> 立即体验 → </a>
      <div style="flex: 1"></div>
      <button class="banner-close" @click="closeBanner" aria-label="关闭横幅">
        ×
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isClosed = ref(false)

onMounted(() => {
  // 检查是否之前关闭过横幅
  const closed = localStorage.getItem('ipe-banner-closed')
  if (closed === 'true') {
    isClosed.value = true
  }
})

const closeBanner = () => {
  isClosed.value = true
  localStorage.setItem('ipe-banner-closed', 'true')
  const banner = document.querySelector('.global-banner')
  if (banner) {
    banner.remove()
  }
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
  z-index: 1000;
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
