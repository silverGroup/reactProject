import enLocal from './en'
import zhLocal from './zh-cn'
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// import resources from './locales/resources'

const messages={
    'en':{
        ...enLocal,
        enUS
    },
    'zh-cn':{
        ...zhLocal,
        zhCN
    }
}
const lang=sessionStorage.getItem('LanguageLocal')||'zh-cn'
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: lang,
    lng: lang,
    debug: true,
    resources:messages ,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
});

// const i18n = moment.locale(
//     sessionStorage.getItem('LanguageLocal')||'zh-cn',
// )

export default i18n