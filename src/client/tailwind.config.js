const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages', '**', '*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components', '**', '*.{js,ts,jsx,tsx}'),
    join(__dirname, '../..', 'node_modules/tw-elements/dist/js', '**/*.js')
  ],
  darkMode: 'class',
  theme: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tw-elements/dist/plugin')
  ],
}