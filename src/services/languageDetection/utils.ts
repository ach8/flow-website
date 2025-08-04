import { LANGUAGE_REGIONS } from './constants';
import type { SupportedLanguage, GeoLocation } from './types';

export const getLanguageFromRegion = (location: GeoLocation): SupportedLanguage => {
  console.log('Detecting language for location:', location);

  // Check for Quebec specifically
  if (location.country === 'CA' && location.region === 'QC') {
    return 'fr';
  }
  
  // Check for French-speaking regions based on country code only
  if (LANGUAGE_REGIONS.fr.includes(location.country)) {
    return 'fr';
  }
  
  // Default to English for all other countries
  return 'en';
};