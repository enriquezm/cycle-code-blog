export default defineNuxtConfig({
  // Enable Nuxt Devtools only in development to avoid build-time issues
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxt/image'],
  image: {
    quality: 80,
    format: ['webp', 'jpeg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  nitro: {
    // No explicit prerender routes for now; add back once sitemap.xml is implemented
    prerender: {
      routes: []
    }
  }
})
