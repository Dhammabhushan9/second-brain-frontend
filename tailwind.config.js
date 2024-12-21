/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
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

