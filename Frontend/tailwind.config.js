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
      },
    },
    plugins: [],
  }

