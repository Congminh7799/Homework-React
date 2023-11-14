/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        danger: colors.rose,
        info: colors.red,
        primary: colors.orange,
        success: colors.green,
        warning: colors.yellow,
      }
    },
  },
  plugins: [],
}

