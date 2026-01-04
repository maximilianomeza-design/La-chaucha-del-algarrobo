/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        algarrobo: "#3E2C22",
        arena: "#F8F6F2",
        piedra: "#E5E1DA",
        oliva: "#7D836E",
        negroSuave: "#1C1C1C"
      }
    },
  },
  plugins: [],
};
