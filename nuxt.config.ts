// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Not Essential",
      titleTemplate: "%s | Not Essential",
      meta: [
        {
          name: "description",
          content:
            "There are better ways to play Minecraft. Don't be forced to use Essential.",
        },
        { name: "theme-color", content: "#0056ea" },
      ],
      link: [
        { rel: "shortcut icon", href: "favicon.ico", type: "image/x-icon" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-lucide-icons", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English (US)",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "NE_i18nCookie",
    },
    vueI18n: "./i18n/i18n.config",
  },
})
