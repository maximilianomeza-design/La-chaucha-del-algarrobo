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
        negroSuave: "#1C1C1C",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #f8e37d, 0 0 15px #ffd700",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 15px #ffe066, 0 0 30px #ffd700",
            transform: "scale(1.05)",
          },
        },
        slide: {
          "0%, 20%": { transform: "translateX(0)" },
          "25%, 45%": { transform: "translateX(-100%)" },
          "50%, 70%": { transform: "translateX(-200%)" },
          "75%, 95%": { transform: "translateX(-300%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 16s linear infinite",
        glow: "glow 2.5s ease-in-out infinite",
        slide: "slide 24s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
