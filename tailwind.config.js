/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         mainGray : "#e4e5eb",
         imageCardBg: "#d9e4f4",
      }
    },
    
  },
  plugins: [],
}

