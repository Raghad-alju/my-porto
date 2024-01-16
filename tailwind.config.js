/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
   
    extend: {
      fontFamily:{
        lora:['Lora']
      },
      colors:{
        impBage: {
          10:'#fffbf6',
          50:"#ccb0ab",
          100:"#fcdcc4",
          200:"#d9d9d9",
          300: "#9d9495"
      },
      Linen: '#faf0e6',
      Late: '#fff8e7',
      Rose:"#fcdcc4"
      }
    },
  },
  plugins: [],
}

