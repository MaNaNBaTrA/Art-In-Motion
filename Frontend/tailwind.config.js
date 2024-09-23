  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors: {
        PBG: '#EAD7C3',
        PCBG:'#FBF6EF',
        PCBG2:'#F1C393',
      },
      extend: {
        fontFamily:{
          sans:["Montserrat Alternates", "sans-serif"],
        },
       gridRow: {
          'span-19': 'span 19 / span 19',
          'span-26': 'span 26 / span 26',
        },
        fontSize: {
          'responsive-increase': ['clamp(0.5rem, 3vw, 2rem)', '1'],
          'clamp': ['clamp(0.9rem, 0.5rem + 1vw, 3rem)', '1'],
        },
      },
    },
    plugins: [],
  }

