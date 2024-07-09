// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [["@nuxtjs/i18n", {
    compilation: {
      strictMessage: false,
    },
    experimental: {
      localeDetector: "./localeDetector.ts",
    },
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.yaml",
      },
    ],
    langDir: "locales",
  }]]
})
