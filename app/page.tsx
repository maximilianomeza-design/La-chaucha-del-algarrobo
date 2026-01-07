"use client";
import { useEffect, useState } from "react";

export default function Home() {
  // 👇 Cambiá a true o false según si querés mostrar el cartel "Últimas Unidades"
  const mostrarUltimasUnidades = true;

  const slides = [
    {
      image: "/assets/detalles-taller-hero.webp",
      title: "Hecho a mano con pasión",
      text: "Cada pieza nace en nuestro taller, donde la tradición se une al diseño.",
    },
    {
      image: "/assets/showroom-editado.webp",
      title: "Diseños que inspiran espacios",
      text: "Visitanos y descubrí cómo la nobleza del algarrobo transforma tu hogar.",
    },
    {
      image: "/assets/placard-hero.webp",
      title: "Madera eterna, diseño que evoluciona",
      text: "Colecciones creadas para acompañarte toda la vida.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Cambio automático de slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Animación del banner tipo marquesina
  useEffect(() => {
    const banners = document.querySelectorAll(".animate-marquee");
    banners.forEach((banner) => {
      const htmlBanner = banner as HTMLElement;
      htmlBanner.addEventListener("animationiteration", () => {
        htmlBanner.classList.remove("animate-marquee");
        void htmlBanner.offsetWidth;
        htmlBanner.classList.add("animate-marquee");
      });
    });
  }, []);

  return (
    <main className="bg-[#F8F6F2] text-[#3E2C22]">
      {/* HERO con transiciones suaves */}
      <section className="relative h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
              <h1 className="text-5xl font-serif mb-4 drop-shadow-lg animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg max-w-2xl mb-8 drop-shadow-md animate-fade-in-delayed">
                {slide.text}
              </p>
              <div className="flex gap-4">
                <a
                  href="/catalogo"
                  className="bg-white text-[#3E2C22] px-6 py-3 rounded-2xl font-medium hover:bg-[#EDE8E1] transition"
                >
                  Ver catálogo
                </a>
                <a
                  href="/fabrica"
                  className="border border-white px-6 py-3 rounded-2xl hover:bg-white/20 transition"
                >
                  Conocer la fábrica
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* BANNER DE OFERTA */}
      <section className="relative text-center py-24 px-6 bg-[#FAF8F4]">
        <h2 className="text-3xl font-serif mb-12">Oferta de la Semana</h2>

        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-md">
          {/* Imagen principal */}
          <img
            src="/assets/Alacena-y-bajomesada-1.60-clasica.webp"
            alt="Alacena y bajomesada línea Clásica"
            className="w-full h-[480px] object-cover"
          />

          {/* Badge superior */}
          <span className="absolute top-5 left-5 bg-[#D72638] text-white px-5 py-2 rounded-full text-base font-semibold shadow-md">
            EN PROMOCIÓN
          </span>

          {/* NUEVO: Badge 'Últimas Unidades' con efecto brillante */}
          {mostrarUltimasUnidades && (
            <span
              className="absolute right-5 top-20 sm:top-5 bg-gradient-to-r from-[#FFD700] via-[#F8E37D] to-[#FFD700]
              text-[#3E2C22] px-4 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-bold shadow-lg animate-glow"
            >
              ¡🔥 Últimas Unidades 🔥!
            </span>
          )}

          {/* Banner tipo cartel luminoso */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#E0C186] via-[#F0D9A7] to-[#E0C186] py-4 overflow-hidden shadow-inner">
            <div
              className="whitespace-nowrap text-[#3E2C22] text-lg font-semibold animate-marquee"
              style={{ animationDuration: "16s" }}
            >
              💥 Súper oferta de contado y 6 cuotas fijas sin interés 💥 — Envío
              sin costo (consulte zonas de cobertura) 💥 Súper oferta de contado
              y 6 cuotas fijas sin interés 💥 — Envío sin costo (consulte zonas
              de cobertura) 💥
            </div>
          </div>

          {/* Enlace clickeable */}
          <a
            href="/catalogo/cocinas/clasica"
            className="absolute inset-0"
            aria-label="Ver producto en promoción"
          ></a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center bg-[#EDE8E1] py-24 px-6">
        <h2 className="text-3xl font-serif mb-4">
          Elegí un mueble que te acompañe toda la vida.
        </h2>
        <p className="text-[#4A4A4A] mb-8">
          Diseño argentino. Madera maciza. Producción consciente.
        </p>
        <a
          href="/catalogo"
          className="bg-[#3E2C22] text-white px-8 py-4 rounded-2xl hover:bg-[#5B4636] transition font-medium"
        >
          Ver colección
        </a>
      </section>

      {/* Estilos personalizados */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee linear infinite;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #f8e37d, 0 0 15px #ffd700;
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 15px #ffe066, 0 0 30px #ffd700;
            transform: scale(1.05);
          }
          100% {
            box-shadow: 0 0 5px #f8e37d, 0 0 15px #ffd700;
            transform: scale(1);
          }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1.6s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </main>
  );
}
