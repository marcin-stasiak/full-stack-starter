const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages', '**', '*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components', '**', '*.{js,ts,jsx,tsx}')
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      condensed: ['Oswald', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        dark: colors.zinc['800'],
        light: colors.zinc['400'],
        primary: colors.amber['500'],
        secondary: colors.indigo['800']
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}