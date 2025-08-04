export const SUPPORTED_LANGUAGES = ['fr', 'en'] as const; // Changed order to make French first
export const DEFAULT_LANGUAGE = 'fr'; // Changed default to French
export const LANGUAGE_COOKIE_KEY = 'preferred_language';

export const FRENCH_COUNTRIES = ['FR', 'MC', 'LU', 'BE'];

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];