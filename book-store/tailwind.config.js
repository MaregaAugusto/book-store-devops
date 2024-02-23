/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#1B3764',
        'dark-yellow': '#FFCA42',
        'thin-grey': '#969AA0',
      },
    },
    fontFamily: {
      inter: ['Inter'],
      cardo: ['Cardo'],
    },
  },
  plugins: [],
};
