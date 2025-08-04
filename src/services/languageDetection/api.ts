import { GeoLocation } from './types';

export const detectLocation = async (): Promise<GeoLocation> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    
    if (!response.ok) {
      console.warn('Location API response not OK:', await response.text());
      throw new Error('Location detection failed');
    }
    
    const data = await response.json();
    console.log('Location data received:', data);
    
    return {
      country: data.country_code || 'US',
      region: data.region_code || '',
      city: data.city || ''
    };
  } catch (error) {
    console.warn('Geolocation error, falling back to browser locale:', error);
    
    let country = 'US';
    try {
      const browserLang = navigator.language;
      console.log('Browser language:', browserLang);
      
      if (browserLang.includes('-')) {
        country = browserLang.split('-')[1].toUpperCase();
      }
    } catch (e) {
      console.error('Browser language detection failed:', e);
    }
    
    return {
      country,
      region: '',
      city: ''
    };
  }
};