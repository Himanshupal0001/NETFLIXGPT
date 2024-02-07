/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'gray-rgba': 'rgba(109, 109, 110, 0.7)',
        'light-gray-rgba': 'rgba(109, 109, 110, 0.6)'
      }
    },
  },
  plugins: [],
}