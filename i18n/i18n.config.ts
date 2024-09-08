//If you take this out of alphabetical order I will eat you

import arSA from "./lang/ar-SA.json"
import deDE from "./lang/de-DE.json"
import enPT from "./lang/en-PT.json"
import enUD from "./lang/en-UD.json"
import enUS from "./lang/en-US.json"
import esES from "./lang/es-ES.json"
import huHU from "./lang/hu-HU.json"
import jaJP from "./lang/ja-JP.json"
import lolUS from "./lang/lol-US.json"
import noNO from "./lang/no-NO.json"
import plPL from "./lang/pl-PL.json"
import ptBR from "./lang/pt-BR.json"
import ptPT from "./lang/pt-PT.json"
import ruRU from "./lang/ru-RU.json"
import ukUA from "./lang/uk-UA.json"
import viVN from "./lang/vi-VN.json"
import zhCN from "./lang/zh-CN.json"
import zhTW from "./lang/zh-TW.json"

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "en-US",
  locale: "en-US",
  messages: {
    //If you take this out of alphabetical order I will eat you again
    "ar-SA": arSA,
    "de-DE": deDE,
    "en-PT": enPT,
    "en-UD": enUD,
    "en-US": enUS,
    "es-ES": esES,
    "hu-HU": huHU,
    "ja-JP": jaJP,
    "en-LOL": lolUS,
    "no-NO": noNO,
    "pl-PL": plPL,
    "pt-BR": ptBR,
    "pt-PT": ptPT,
    "ru-RU": ruRU,
    "uk-UA": ukUA,
    "vi-VN": viVN,
    "zh-CN": zhCN,
    "zh-TW": zhTW,
  },
}))
