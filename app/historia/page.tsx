"use client";
import { useEffect, useState } from "react";

export default function Historia() {
  const escenas = [
    {
      texto: "Desde el corazón del Chaco, nació una idea simple: reescribir el legado del algarrobo con diseño contemporáneo, sin perder la esencia de lo artesanal.",
      imagen: "/assets/historia-escena1.webp",
    },
    {
      texto: "Somos La Chaucha del Algarrobo. Fusionamos tradición artesanal con innovación, para crear muebles que cuentan historias y trascienden generaciones.",
      imagen: "/assets/historia-escena2.webp",
    },
    {
      texto: "Cada pieza es única. Hecha con respeto por la naturaleza, precisión en los detalles y pasión por el diseño.",
      imagen: "/assets/historia-escena3.webp",
    },
    {
      texto: "Queremos cambiar la percepción del algarrobo: de lo rústico a lo premium, de lo clásico a lo eterno.",
      imagen: "/assets/historia-escena4.webp",
    },
    {
      texto: "Desde Machagai al país, llevamos un pedazo de nuestra tierra a cada hogar. Porque el futuro también se fabrica en madera.",
      imagen: "/assets/historia-escena5.webp",
    },
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndice((prev) => (prev + 1) % escenas.length);
    }, 7000); // cambia de escena cada 7 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Escenas con texto animado */}
      {escenas.map((escena, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out flex flex-col items-center justify-center text-center px-6 ${
            i === indice ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={escena.imagen}
            alt={`Escena ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
          />
          <div className="relative z-10 max-w-4xl">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif leading-relaxed drop-shadow-lg animate-fadeIn">
              {escena.texto}
            </p>
          </div>
        </div>
      ))}

      {/* Cierre cinematográfico */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center bg-black transition-opacity duration-2000 ${
          indice === escenas.length - 1 ? "opacity-90 z-20" : "opacity-0 z-0"
        }`}
      >
        <img
          src="/assets/logo.svg"
          alt="Logo La Chaucha del Algarrobo"
          className="w-40 sm:w-56 mb-6 animate-fadeInSlow"
        />
        <a
          href="/catalogo"
          className="bg-white text-[#3E2C22] px-6 py-3 rounded-2xl font-medium hover:bg-[#EDE8E1] transition animate-fadeInSlow"
        >
          Volver al catálogo
        </a>
      </div>

      {/* Música de fondo */}
      <audio
  id="bg-audio"
  src="/assets/audio/historia.mp3"
  autoPlay
  loop
  controls={false}
/>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInSlow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out forwards;
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 4s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
