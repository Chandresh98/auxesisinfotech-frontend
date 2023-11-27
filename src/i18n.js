import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useEffect } from 'react';

const availableLanguages = ['en', 'es']

const option = {
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  checkWhitelist: true
}



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    whitelist: availableLanguages,
    detection: option,
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;