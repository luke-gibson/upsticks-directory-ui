export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare-pages'
  },

  supabase: {
    redirect: false,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@nuxt/eslint",
    "@vueform/nuxt",
  ],
  compatibilityDate: "2024-07-04"
})