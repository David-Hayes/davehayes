const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#d04b27',
      gray: colors.trueGray
    },
    fontFamily: {
      sans: ['"Merriweather"']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
