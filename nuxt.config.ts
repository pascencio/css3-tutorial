// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ["@nuxtjs/google-fonts"],
  css: ["@/assets/css/main.css"],

  googleFonts: {
    families: {
      Roboto: true,
      'Material Symbols Outlined': true,
    },
  },

  compatibilityDate: "2024-07-02",
})