const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: { config: join(__dirname, 'src/client', 'tailwind.config.js') },
    autoprefixer: {},
  },
}
