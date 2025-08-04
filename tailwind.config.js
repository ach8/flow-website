/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        gray: {
          750: '#2D2D2D',
          850: '#1A1A1A',
          950: '#0A0A0A',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '100%': {
            'box-shadow': '0 0 30px rgba(59, 130, 246, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
};