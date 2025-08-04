import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '../utils/constants';
import { 
  detectUserCountry,
  getLanguageFromCountry,
  getUserPreferredLanguage,
  setUserPreferredLanguage 
} from '../utils/languageHelpers';  // Now importing everything from languageHelpers

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        // Check for user preference first
        const preferredLanguage = getUserPreferredLanguage();
        if (preferredLanguage) {
          await i18n.changeLanguage(preferredLanguage);
          setIsLoading(false);
          return;
        }

        // Detect location and set language
        const countryCode = await detectUserCountry();
        const detectedLanguage = getLanguageFromCountry(countryCode);
        await i18n.changeLanguage(detectedLanguage);
        setUserPreferredLanguage(detectedLanguage);
      } catch (error) {
        console.error('Language initialization failed:', error);
        await i18n.changeLanguage('en');
      } finally {
        setIsLoading(false);
      }
    };

    initializeLanguage();
  }, [i18n]);

  const changeLanguage = async (lang: SupportedLanguage) => {
    await i18n.changeLanguage(lang);
    setUserPreferredLanguage(lang);
  };

  return {
    currentLanguage: i18n.language as SupportedLanguage,
    changeLanguage,
    isLoading
  };
};