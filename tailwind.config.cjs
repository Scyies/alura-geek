/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        white: '#F5F5F5',
        blue: '#2A7AE4',
        black: '#040B14',
        gray: '#464646',
        cyan: '#20B8FA',
      },
    },
  },
  plugins: [],
};
