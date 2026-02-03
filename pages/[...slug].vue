<template>
  <div>
    <article v-if="data" class="article" :class="{ 'dev-mode': isDev }">
      <h1>{{ data.title }}</h1>
      <ContentRenderer :value="data" />
    </article>
    <article v-else class="article">
      <h1>Not found</h1>
      <p>The page you are looking for does not exist.</p>
    </article>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())
const isDev = process.dev

onMounted(() => {
  if (isDev) {
    addImageNumbers()
  }
})

function addImageNumbers() {
  const images = document.querySelectorAll('.article img')
  images.forEach((img, index) => {
    if (!img.parentElement.classList.contains('img-wrapper')) {
      const wrapper = document.createElement('div')
      wrapper.className = 'img-wrapper'
      
      // Copy image classes to wrapper
      if (img.className) {
        wrapper.className += ' ' + img.className
      }
      
      img.parentNode.insertBefore(wrapper, img)
      wrapper.appendChild(img)
      
      const badge = document.createElement('div')
      badge.className = 'img-number'
      // Extract filename from src
      const filename = img.src.split('/').pop()
      badge.textContent = filename
      wrapper.appendChild(badge)
    }
  })
}
</script>

<style scoped>
.article {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  font-size: 18px;
  line-height: 1.6;
}

.article h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.article :deep(p) {
  margin: 2.5rem 0;
}

.article :deep(a) {
  color: #000;
  text-decoration: none;
}

.article :deep(img.col-12) {
  width: 100%;
}

.article :deep(img.col-6) {
  width: 50%;
}

.article :deep(img.col-4) {
  width: 33%;
}

.article :deep(img.col-3) {
  width: 25%;
}

/* Dev mode image numbering */
.dev-mode :deep(.img-wrapper) {
  position: relative;
  display: inline-block;
}

.dev-mode :deep(.img-wrapper.col-12) {
  width: 100%;
  display: block;
}

.dev-mode :deep(.img-wrapper.col-6) {
  width: 50%;
  display: inline-block;
}

.dev-mode :deep(.img-wrapper.col-4) {
  width: 33%;
  display: inline-block;
}

.dev-mode :deep(.img-wrapper.col-3) {
  width: 25%;
  display: inline-block;
}

.dev-mode :deep(.img-wrapper img) {
  width: 100%;
  display: block;
}

.dev-mode :deep(.img-number) {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  z-index: 10;
  pointer-events: none;
}
</style>