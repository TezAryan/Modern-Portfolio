/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        obsidian: {
          DEFAULT: '#08080A',
          50: '#1A1D26',
          100: '#14161D',
          200: '#0D0E12',
          300: '#131315',
        },
        champagne: {
          DEFAULT: '#E5C378',
          dim: '#8C733E',
          bright: '#F2CA50',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E9C349',
        },
        surface: {
          DEFAULT: '#131315',
          dim: '#131315',
          bright: '#39393b',
          'container-lowest': '#0e0e10',
          'container-low': '#1c1b1e',
          container: '#201f22',
          'container-high': '#2a2a2c',
          'container-highest': '#353437',
        },
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
};
