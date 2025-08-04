import Cookies from 'js-cookie';
import i18n from '../i18n';

const LANGUAGE_COOKIE_KEY = 'preferred_language';
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = ['en', 'fr'] as const;

type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

export const getInitialLanguage = async (): Promise<SupportedLanguage> => {
  // Check for saved preference first
  const savedLanguage = Cookies.get(LANGUAGE_COOKIE_KEY) as SupportedLanguage;
  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }

  try {
    // Using a more reliable geolocation service
    const response = await fetch('https://api.ipdata.co/?api-key=test', {
      headers: { 'Accept': 'application/json' }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    
    const data = await response.json();
    return data.country_code === 'FR' ? 'fr' : 'en';
  } catch (error) {
    console.warn('Language detection failed, defaulting to English:', error);
    return DEFAULT_LANGUAGE;
  }
};

export const setLanguage = (language: SupportedLanguage): void => {
  // Save preference and update i18n
  Cookies.set(LANGUAGE_COOKIE_KEY, language, { expires: 365 });
  i18n.changeLanguage(language);
};

export const getCurrentLanguage = (): SupportedLanguage => {
  return (i18n.language?.split('-')[0] || DEFAULT_LANGUAGE) as SupportedLanguage;
};