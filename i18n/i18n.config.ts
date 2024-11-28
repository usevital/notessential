//If you take this out of alphabetical order I will eat you

import arSA from "./locales/ar-SA.json";
import deDE from "./locales/de-DE.json";
import enPT from "./locales/en-PT.json";
import enUD from "./locales/en-UD.json";
import enUS from "./locales/en-US.json";
import esES from "./locales/es-ES.json";
import huHU from "./locales/hu-HU.json";
import jaJP from "./locales/ja-JP.json";
import lolUS from "./locales/lol-US.json";
import noNO from "./locales/no-NO.json";
import plPL from "./locales/pl-PL.json";
import ptBR from "./locales/pt-BR.json";
import ptPT from "./locales/pt-PT.json";
import ruRU from "./locales/ru-RU.json";
import ukUA from "./locales/uk-UA.json";
import viVN from "./locales/vi-VN.json";
import zhCN from "./locales/zh-CN.json";
import zhTW from "./locales/zh-TW.json";

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
}));
