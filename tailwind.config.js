/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1270px',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, 316px)',
      },
    },
  },
  plugins: [],
};
