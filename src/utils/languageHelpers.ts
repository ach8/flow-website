import Cookies from 'js-cookie';
import { 
  SUPPORTED_LANGUAGES, 
  DEFAULT_LANGUAGE, 
  LANGUAGE_COOKIE_KEY,
  FRENCH_COUNTRIES,
  type SupportedLanguage 
} from './constants';

// Import detectUserCountry from geoLocation
import { detectUserCountry } from './geoLocation';

export {
  detectUserCountry  // Re-export for convenience
};

export const getLanguageFromCountry = (countryCode: string): SupportedLanguage => {
  return FRENCH_COUNTRIES.includes(countryCode) ? 'fr' : DEFAULT_LANGUAGE;
};

export const getUserPreferredLanguage = (): SupportedLanguage | null => {
  const saved = Cookies.get(LANGUAGE_COOKIE_KEY);
  return saved && SUPPORTED_LANGUAGES.includes(saved as SupportedLanguage)
    ? saved as SupportedLanguage
    : null;
};

export const setUserPreferredLanguage = (lang: SupportedLanguage): void => {
  Cookies.set(LANGUAGE_COOKIE_KEY, lang, { expires: 365 });
};