export default defineNuxtConfig({
  // Enable Nuxt Devtools only in development to avoid build-time issues
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content'],
  nitro: {
    // No explicit prerender routes for now; add back once sitemap.xml is implemented
    prerender: {
      routes: []
    }
  }
})
