/** @type {import('tailwindcss').Config} */
// const { COLORS } = require('src\Constants\Colors.tsx'); // Import the COLORS object from your file

module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#D6CCC2',
        'color2': '#DED6CE',
        'color3': '#E5DED8',
        'color4': '#EEEAE6',
        'background': '#F5EBE0',
        'color6': '#E3D5CA',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': 'rgb(31 41 55)',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}

