// Utility for color interpolation and management
export const colors = {
  primary: ['#1e3a8a', '#3b82f6', '#93c5fd'],
  accent: ['#581c87', '#8b5cf6', '#c4b5fd'],
  emerald: ['#064e3b', '#10b981', '#6ee7b7'],
  neon: {
    blue: '#00D2FF', // Vivid Cyan - Bright & High Energy
    green: '#00FF94', // Electric Emerald - Very punchy
    purple: '#B721FF', // Vivid Purple - Deep but bright
    pink: '#FF218C'  // Hot Pink - Strong accent
  }
} as const;

export const getRandomColor = () => {
  const colorSets = Object.values(colors);
  const randomSet = colorSets[Math.floor(Math.random() * colorSets.length)];
  return randomSet[1]; // Return middle color for balance
};