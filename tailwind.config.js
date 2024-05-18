/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'xsm': '770px',
        'smd': '881px',
        'lg': '992px',
        'xlg': '1100px',
        'xl': '1200px',
        'xxl': '1400px',
      }
    },
  },
  plugins: [],
}

