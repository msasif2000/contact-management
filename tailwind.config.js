
module.exports = {

  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  
  theme: {
    extend: {
      colors: {
        'primary': '#FFCC15',
        'secondary': '#4469A6',
        'tertiary': '#007CFF',
      },

    },
  },
  plugins: [require("daisyui"),],
}
