export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare-pages'
  },

  modules: ["@nuxtjs/tailwindcss"],
  compatibilityDate: "2024-07-04"
})