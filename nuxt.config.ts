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
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English (US)",
      },
      {
        code: "en-LOL",
        name: "LOLCAT (Kingdom of Cats)",
      },
      {
        code: "en-UD",
        name: "English (Upside-down)",
      },
      {
        code: "ru",
        name: "русский (Russia)",
      },
      {
        code: "de",
        name: "Deutsch (Germany)",
      },
      {
        code: "es-ES",
        name: "Español (Spain)",
      },
      {
        code: "no-NO",
        name: "norsk (Norway)",
      },
      {
        code: "pt-BR",
        name: "Português (Brazil)",
      },
    ],
    /*detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "NE_i18nCookie",
    }, RE-ENABLE THIS WHEN WE ACTUALLY DO RELEASE FULL i18n */
    detectBrowserLanguage: false,
    vueI18n: "./i18n/i18n.config",
  },

  css: ["~/assets/css/fonts.css"],

  compatibilityDate: "2024-07-13",

  runtimeConfig: {
    public: {
      dev: process.env.NODE_ENV === "production" ? false : true,
    },
  },
})
