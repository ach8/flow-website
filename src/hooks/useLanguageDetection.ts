import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { detectLocation } from '../services/languageDetection/api';
import { getLanguageFromRegion } from '../services/languageDetection/utils';
import type { SupportedLanguage } from '../services/languageDetection/types';

export const useLanguageDetection = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('fr');

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        // Always detect location and set language based on it
        const location = await detectLocation();
        console.log('Location detected:', location);
        
        const detectedLang = getLanguageFromRegion(location);
        console.log('Detected language:', detectedLang);
        
        await i18n.changeLanguage(detectedLang);
        setCurrentLanguage(detectedLang);
      } catch (error) {
        console.error('Language detection failed:', error);
        // Fallback to French
        await i18n.changeLanguage('fr');
        setCurrentLanguage('fr');
      } finally {
        setIsLoading(false);
      }
    };

    // Execute immediately when component mounts
    initializeLanguage();
  }, [i18n]);

  const changeLanguage = async (language: SupportedLanguage) => {
    try {
      console.log('Changing language to:', language);
      await i18n.changeLanguage(language);
      setCurrentLanguage(language);
    } catch (error) {
      console.error('Language change failed:', error);
    }
  };

  return {
    currentLanguage,
    changeLanguage,
    isLoading
  };
};