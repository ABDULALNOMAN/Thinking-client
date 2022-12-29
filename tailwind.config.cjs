/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: {
          1:"#144272",
          2:'#205295',
          3:'#9ec9ff',
          4:"#01273d"
        } 
      },
      fontFamily:{
        bebes:"Bebas Neue",
        roboto:"Roboto"
      }
    },
  },
  plugins: [require("daisyui")],
}
