import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import frTranslations from './locales/fr';
import enTranslations from './locales/en';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      fr: {
        translation: frTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    fallbackLng: 'fr',
    // Remove lng: 'fr' to enable auto-detection
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupQuerystring: 'lang',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;