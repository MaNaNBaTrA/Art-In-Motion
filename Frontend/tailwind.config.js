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
      },
      extend: {
        fontFamily:{
          sans:["Montserrat Alternates", "sans-serif"],
        },
      },
    },
    plugins: [],
  }

