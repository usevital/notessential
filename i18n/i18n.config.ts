import enUS from "./lang/en-US.json"
import enLOL from "./lang/lol.json"
import enUD from "./lang/en-UD.json"
import ruRU from "./lang/ru.json"
import deDE from "./lang/de.json"
import esES from "./lang/es-ES.json"
import noNO from "./lang/no.json"
import ptBR from "./lang/pt-BR.json"

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "en",
  locale: "en",
  messages: {
    en: enUS,
    "en-UD": enUD,
    "en-LOL": enLOL,
    ru: ruRU,
    de: deDE,
    "es-ES": esES,
    "no-NO": noNO,
    "pt-BR": ptBR,
  },
}))
