import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageDetection = () => {
  const { i18n } = useTranslation();

  // No complex logic needed anymore.
  // i18next-browser-languagedetector handles navigator/localStorage/querystring automatically.
  
  // We expose a simple changeLanguage function if needed for UI switchers.
  const changeLanguage = async (language: string) => {
    try {
      await i18n.changeLanguage(language);
    } catch (error) {
      console.error('Language change failed:', error);
    }
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    isLoading: false // Always ready as detection is synchronous/init-based
  };
};