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
    defaultLocale: "en-US",
    locales: [
      //If you take this out of alphabetical order I will eat you a third time
      {
        code: "ar-SA",
        name: "Arabic (Saudi Arabia)",
      },
      {
        code: "de-DE",
        name: "Deutsch (Germany)",
      },
      {
        code: "en-PT",
        name: "English (Pirate Speak)",
      },
      {
        code: "en-UD",
        name: "English (Upside-down)",
      },
      {
        code: "en-US",
        name: "English (US)",
      },
      {
        code: "es-ES",
        name: "Español (Spain)",
      },
      {
        code: "hu-HU",
        name: "magyar (Hungary)",
      },
      {
        code: "ja-JP",
        name: "日本語 (Japan)",
      },
      {
        code: "en-LOL",
        name: "LOLCAT (Kingdom of Cats)",
      },
      {
        code: "no-NO",
        name: "norsk (Norway)",
      },
      {
        code: "pl-PL",
        name: "Polski (Poland)",
      },
      {
        code: "pt-BR",
        name: "Português (Brazil)",
      },
      {
        code: "pt-PT",
        name: "Português (Portugal)",
      },
      {
        code: "ru-RU",
        name: "Русский (Russia)",
      },
      {
        code: "uk-UA",
        name: "Українська (Ukraine)",
      },
      {
        code: "vi-VN",
        name: "Tiếng Việt (Vietnam)",
      },
      {
        code: "zh-CN",
        name: "中文简体 (Simplified Chinese)",
      },
      {
        code: "zh-TW",
        name: "繁體中文 (Traditional Chinese)",
      },
    ],
    /*detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "NE_i18nCookie",
    }, RE-ENABLE THIS WHEN WE ACTUALLY DO RELEASE FULL i18n */
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },

  css: ["~/assets/css/fonts.css"],

  compatibilityDate: "2024-07-13",
})
