module.exports = {
  purge: [
    "./public/index.html",
    "./src/**/*.svelte",
    "./src/**/*.js"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
