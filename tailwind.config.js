/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,css,cljs}"],

  theme: {

    extend: {

      fontFamily: {
        sans: ['"Source Sans 3"', 'serif'], // Replace 'YourFontName' with your font's name
      },

      colors: {

        custom: {
          'darkest-violet': '#2D243A',
        },
        indigo: {
          50: '#F4F7FF',
        },
      }

    }
  },
  plugins: [
    // require('daisyui'),
  ],
  output: {
    path: './public/assets/css',
    filename: 'output.css',
  },
}

