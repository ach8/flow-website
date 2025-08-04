// Remove unnecessary imports
export const detectUserCountry = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipapi.com/api/check?access_key=YOUR_API_KEY');
    if (!response.ok) throw new Error('Location detection failed');
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    console.warn('Failed to detect location:', error);
    return 'UNKNOWN';
  }
};