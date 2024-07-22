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
  fallbackLocale: "en-US",
  locale: "en-US",
  messages: {
    "en-US": enUS,
    "en-UD": enUD,
    "en-LOL": enLOL,
    ru: ruRU,
    de: deDE,
    "es-ES": esES,
    "no-NO": noNO,
    "pt-BR": ptBR,
  },
}))
