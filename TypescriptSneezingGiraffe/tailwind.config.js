 // tailwind.config.js
 module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    colors: {
      current: '#F0D660',
    }
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }