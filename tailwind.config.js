const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    },
    extend: {
      backgroundImage: (theme) => ({
        'site-grad':
          'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0, transparent 50%), radial-gradient(at 0% 50%, hsla(355,85%,93%,1) 0, transparent 50%), radial-gradient(at 82% 48%, hsla(340,100%,76%,1) 0, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0, transparent 50%)'
      }),
      colors: {
        gray: colors.trueGray
      }
    },
    fontFamily: {
      sans: ['"Roboto"']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
