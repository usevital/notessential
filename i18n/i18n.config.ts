import enUS from "./lang/en-US.json"
import enLOL from "./lang/en-LOL.json"
import enUD from "./lang/en-UD.json"
import ruRU from "./lang/ru-RU.json"
import deDE from "./lang/de-DE.json"
import esES from "./lang/es-ES.json"
import noNO from "./lang/no-NO.json"
import ptBR from "./lang/pt-BR.json"

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "en",
  locale: "en",
  messages: {
    en: enUS,
    "en-UD": enUD,
    "en-LOL": enLOL,
    "ru-RU": ruRU,
    "de-DE": deDE,
    "es-ES": esES,
    "no-NO": noNO,
    "pt-BR": ptBR,
  },
}))
