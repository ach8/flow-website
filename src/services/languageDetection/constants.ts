export const SUPPORTED_LANGUAGES: Record<string, string> = {
  en: 'English',
  fr: 'Français',
};

export const LANGUAGE_REGIONS: Record<string, string[]> = {
  fr: ['FR', 'BE', 'CH', 'CA-QC', 'LU', 'MC'],
  en: ['US', 'GB', 'CA', 'AU', 'NZ', 'IE'],
};

export const COOKIE_OPTIONS = {
  maxAge: 365 * 24 * 60 * 60, // 1 year
  path: '/',
  sameSite: 'strict' as const,
  secure: true,
};