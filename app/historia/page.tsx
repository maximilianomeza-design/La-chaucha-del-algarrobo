"use client";
import { useEffect, useState } from "react";

export default function Historia() {
  const escenas = [
    {
      texto:
        "Desde el corazón del Chaco, nació una idea simple: reescribir el legado del algarrobo con diseño contemporáneo, sin perder la esencia de lo artesanal.",
      imagen: "/assets/historia-escena1.webp",
    },
    {
      texto:
        "Somos La Chaucha del Algarrobo. Fusionamos tradición artesanal con innovación, para crear muebles que cuentan historias y trascienden generaciones.",
      imagen: "/assets/historia-escena2.webp",
    },
    {
      texto:
        "Cada pieza es única. Hecha con respeto por la naturaleza, precisión en los detalles y pasión por el diseño.",
      imagen: "/assets/historia-escena3.webp",
    },
    {
      texto:
        "Queremos cambiar la percepción del algarrobo: de lo rústico a lo premium, de lo clásico a lo eterno.",
      imagen: "/assets/historia-escena4.webp",
    },
    {
      texto:
        "Desde Machagai al país, llevamos un pedazo de nuestra tierra a cada hogar. Porque el futuro también se fabrica en madera.",
      imagen: "/assets/historia-escena5.webp",
    },
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndice((prev) => (prev + 1) % escenas.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Controlar volumen del audio al cargar
    const audio = document.getElementById("bg-audio") as HTMLAudioElement | null;
    if (audio) audio.volume = 0.5;
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Escenas animadas */}
      {escenas.map((escena, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === indice ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={escena.imagen}
            alt={`Escena ${index + 1}`}
            className="w-full h-full object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug max-w-4xl animate-fadeIn">
              {escena.texto}
            </p>
          </div>
        </div>
      ))}

      {/* Cierre cinematográfico */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-center bg-black/95 transition-opacity duration-2000 ${
          indice === escenas.length - 1 ? "opacity-100 z-20" : "opacity-0 z-0"
        }`}
      >
        <img
          src="/assets/logo-la-chaucha.webp
"
          alt="Logo La Chaucha del Algarrobo"
          className="w-44 sm:w-60 mb-8 animate-fadeInSlow drop-shadow-lg"
        />
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl text-white/90 font-serif px-6 animate-fadeInSlow">
          Gracias por acompañarnos en esta historia. <br />
          En cada mueble, vive el alma de nuestra tierra.
        </p>
        <a
          href="/catalogo"
          className="bg-white text-[#3E2C22] px-6 py-3 rounded-2xl font-medium hover:bg-[#EDE8E1] transition animate-fadeInSlow"
        >
          Volver al catálogo
        </a>
      </div>

      {/* Audio de fondo */}
      <audio id="bg-audio" src="/assets/audio/instrumental2.mp3" autoPlay loop />

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInSlow {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }

        .animate-fadeInSlow {
          animation: fadeInSlow 3s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
