/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        fontFamily: {
          'butler': ['butler', 'sans-serif'],
          'butler-light': ['butler-light', 'sans-serif'],
          'butler-ultra-light': ['butler-ultra-light', 'sans-serif']

      },
      colors: {
        "primary-bg": "#edded3",
        "primary-ash": "#72855d",
        "Home":"#F1EFE9",
        "gray-4": "#f2efea",
        "gray-1": "#2c2d36",
        "primary-1": "#edded3",
        "primary-2": "#72855d",
        "primary-3": " #394053",
        " primary-4": "#9f7254",
        " gray-2": "#646467",
        "gray-3": "#ece5d9;",
        "nav-bar": "#F1EFE9;",
      "cont":"  #ECDDD3"
  
      },
    },
  },
  plugins: [],
  }}
