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
      animation: {
        cartBottom: 'cartBottom .5s forwards',
      },
      keyframes: {
        cartBottom: {
          '0%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
