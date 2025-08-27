/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sena: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#56b756',
          500: '#2e7d32',
          600: '#236b26',
          700: '#1e5520',
          800: '#1a441a',
          900: '#163816',
        }
      }
    },
  },
  plugins: [],
}