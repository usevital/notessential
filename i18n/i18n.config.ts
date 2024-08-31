import enUS from "./lang/en-US.json"
import enPT from "./lang/en-PT.json"
import lolUS from "./lang/lol-US.json"
import enUD from "./lang/en-UD.json"
import ruRU from "./lang/ru-RU.json"
import deDE from "./lang/de-DE.json"
import esES from "./lang/es-ES.json"
import plPL from "./lang/pl-PL.json"
import noNO from "./lang/no-NO.json"
import ptPT from "./lang/pt-PT.json"
import ptBR from "./lang/pt-BR.json"
import ukUA from "./lang/uk-UA.json"
import huHU from "./lang/hu-HU.json"
import viVN from "./lang/vi-VN.json"
import zhTW from "./lang/zh-TW.json"
import zhCN from "./lang/zh-CN.json"

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "en-US",
  locale: "en-US",
  messages: {
    "en-US": enUS,
    "en-PT": enPT,
    "en-UD": enUD,
    "en-LOL": lolUS,
    "ru-RU": ruRU,
    "de-DE": deDE,
    "es-ES": esES,
    "pl-PL": plPL,
    "no-NO": noNO,
    "pt-PT": ptPT,
    "pt-BR": ptBR,
    "uk-UA": ukUA,
    "hu-HU": huHU,
    "vi-VN": viVN,
    "zh-TW": zhTW,
    "zh-CN": zhCN,
  },
}))
