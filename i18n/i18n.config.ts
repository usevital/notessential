import enUS from "./lang/en-US.json"

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "en",
  locale: "en",
  messages: {
    en: enUS,
  },
  strategy: "no_prefix",
}))
