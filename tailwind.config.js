/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#121212',

      'white-900': '#ffffff',
      'white-600': '#f0f0f0',
      'white-400': '#ededed',

      'grey-300': '#c6c6d3',
      'grey-400': '#a1a1aa',

      'dark-400': '#27272a',
      'dark-500': '#3e3e41',
      'dark-600': '#1c1c1c',
      'dark-700': '#09090a',

      'orange': '#9d4b00',
    },
    fontFamily:{
      sans:['Inter', 'sans-serif'],
      serif:['Merriweather', 'serif'],
    }
  },
  plugins: [],
}
