/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '0px',
        lg: '1270px',
      },
    },
  },
  plugins: [],
};
