/* eslint-disable prettier/prettier */
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};
