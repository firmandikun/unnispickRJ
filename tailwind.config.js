/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], 
  theme: {
    extend: {
      colors: {
        primary: '#2ec4b6',
        dark: '#1C1C1E',
        soft: '#FFF0F5',
        rose: { DEFAULT: '#FFEDF1' },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(46, 196, 182, 0.15)',
      },
    },
  },
  plugins: [],
}
