 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFD700", // or whatever shade you want
      },
      fontFamily: {
        'modern-negra': ['"Modern Negra"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}