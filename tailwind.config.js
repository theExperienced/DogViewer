module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    borderRadius: {
      'monstrous': '100%'
    },
    padding: {
      'xl': '17%',
      'heading': '6rem'
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
