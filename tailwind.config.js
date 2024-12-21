/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Playfair Display"', 'serif'], // Add your font here
      },
      colors:{
        bento:{
          100:"#f9a474",
          200:"#c3b2e7",
          300:"#f682a5",
          400:"#c9da8f",
          500:"#fedf6f",
          600:"#b8cedc"
        },
        gold:{ 
          100:'#FFD700'
        },
        salate:{
          100:"#eeeeef",
          500:"#f9fbfc",
          600:"#585c6a"
        },
        purple:{
          300:"#e0e7ff",
          500:"#a1a2dd",
          600:"#5046e4"
        }
      }
    },
  },
  plugins: [],
}

