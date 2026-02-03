/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      /* Tipografías:
         - mantenemos Inter para cuerpo
         - cambiamos serif a una “editorial” contemporánea (menos boda, más revista)
         Nota: la fuente real la cargamos con next/font en layout.tsx */
      fontFamily: {
  sans: ["var(--font-inter)", "system-ui", "sans-serif"],
  serif: ["var(--font-spectral)", "ui-serif", "Georgia", "serif"],
},


      /* Tokens editorial premium */
      letterSpacing: {
        editorial: "0.18em",
      },
      lineHeight: {
        editorial: "1.08",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
        lift: "0 18px 45px rgba(0,0,0,0.10)",
      },

      /* Mantengo tus colores originales + agrego una paleta “Origen” más calibrada */
      colors: {
        // legacy
        algarrobo: "#3E2C22",
        arena: "#F8F6F2",
        piedra: "#E5E1DA",
        oliva: "#7D836E",
        negroSuave: "#1C1C1C",

        // premium editorial (Origen)
        origen: {
          ink: "#241A14",        // texto principal
          cocoa: "#2F221B",      // hover/CTA
          sand: "#FAF7F3",       // fondo principal claro
          dune: "#F3EEE7",       // secciones
          clay: "#6A564A",       // texto secundario
          mist: "rgba(255,255,255,0.70)", // overlays suaves
        },
      },

      /* Animaciones:
         - slide se mantiene
         - marquee y glow quedan, pero NO recomendados para la premium.
           Si querés, los dejamos pero no los usamos en Origen. */
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 6px rgba(122, 90, 46, 0.35)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 14px rgba(122, 90, 46, 0.45)",
            transform: "scale(1.02)",
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
        glow: "glow 2.8s ease-in-out infinite",
        slide: "slide 24s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
