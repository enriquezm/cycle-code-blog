export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content'],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})