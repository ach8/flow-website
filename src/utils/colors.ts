// Utility for color interpolation and management
export const colors = {
  primary: ['#1a365d', '#3182ce', '#90cdf4'],
  accent: ['#553c9a', '#805ad5', '#b794f4'],
  emerald: ['#065f46', '#059669', '#34d399'],
  neon: {
    blue: '#00FFFF',
    green: '#39FF14',
    purple: '#FF00FF',
    pink: '#FF1493'
  }
} as const;

export const getRandomColor = () => {
  const colorSets = Object.values(colors);
  const randomSet = colorSets[Math.floor(Math.random() * colorSets.length)];
  return randomSet[1]; // Return middle color for balance
};