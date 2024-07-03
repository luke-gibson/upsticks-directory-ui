export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages'
  },
  modules: ["@nuxtjs/tailwindcss"]
})