// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    pageTransition: false, 
    layoutTransition: false
  },
  modules: [
    "@nuxtjs/tailwindcss"
  ]
})
