"use client";
import { useEffect, useState } from "react";

export default function Home() {
  // 🔁 Hero con auto deslizamiento
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // 👇 Mostrar o no el cartel "Últimas Unidades"
  const mostrarUltimasUnidades = true;

  // 🧠 Animación del banner tipo marquesina
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
    <main className="bg-[#F8F6F2] text-[#3E2C22] relative">
      {/* HERO */}
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
              className="w-full h-full object-cover brightness-[0.55]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <h1 className="text-6xl md:text-7xl font-serif mb-6 drop-shadow-lg animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-10 drop-shadow-md animate-fade-in-delayed">
                {slide.text}
              </p>
              <div className="flex gap-6">
                <a
                  href="/catalogo"
                  className="bg-white text-[#3E2C22] px-8 py-4 rounded-2xl font-medium text-lg hover:bg-[#EDE8E1] transition"
                >
                  Ver catálogo
                </a>
                <a
                  href="/fabrica"
                  className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white/20 transition"
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

      {/* TESTIMONIOS */}
      <section className="bg-[#FAF8F4] py-24 px-6 text-center">
        <h2 className="text-4xl font-serif mb-10">Qué dicen nuestros clientes</h2>
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                nombre: "María L.",
                ubicacion: "Resistencia, Chaco",
                texto:
                  "Excelente calidad y terminación. La mesa que compré superó mis expectativas.",
              },
              {
                nombre: "Carlos G.",
                ubicacion: "Corrientes, Capital",
                texto:
                  "Atención impecable y productos realmente premium. Se nota la dedicación artesanal.",
              },
              {
                nombre: "Sofía M.",
                ubicacion: "Santa Fe",
                texto:
                  "El diseño y la calidez del algarrobo son únicos. Recomendadísimos.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md border border-[#EDE8E1] hover:shadow-lg transition-all"
              >
                <p className="italic text-[#4A4A4A] mb-4">“{t.texto}”</p>
                <h4 className="font-semibold text-lg">{t.nombre}</h4>
                <p className="text-sm text-[#777]">{t.ubicacion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER DE OFERTA */}
      <section className="relative text-center py-24 px-6 bg-[#FAF8F4]">
        <h2 className="text-3xl font-serif mb-12">Oferta de la Semana</h2>
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-md">
          <img
            src="/assets/Alacena-y-bajomesada-1.60-clasica.webp"
            alt="Alacena y bajomesada línea Clásica"
            className="w-full h-[480px] object-cover"
          />
          <span className="absolute top-5 left-5 bg-[#D72638] text-white px-5 py-2 rounded-full text-base font-semibold shadow-md">
            EN PROMOCIÓN
          </span>

          {mostrarUltimasUnidades && (
            <span
              className="absolute right-5 top-20 sm:top-5 bg-gradient-to-r from-[#FFD700] via-[#F8E37D] to-[#FFD700]
              text-[#3E2C22] px-4 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-bold shadow-lg animate-glow"
            >
              ¡🔥 Últimas Unidades 🔥!
            </span>
          )}

          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#E0C186] via-[#F0D9A7] to-[#E0C186] py-4 overflow-hidden shadow-inner">
            <div
              className="whitespace-nowrap text-[#3E2C22] text-lg font-semibold animate-marquee"
              style={{ animationDuration: "16s" }}
            >
              💥 Súper oferta de contado y 6 cuotas fijas sin interés 💥 — Envío
              sin costo (consulte zonas de cobertura) 💥
            </div>
          </div>

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

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/5490000000000?text=Hola!%20Quisiera%20consultar%20por%20sus%20muebles."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L.5 31.5l8-2c2.2 1.2 4.7 1.8 7.4 1.8 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28c-2.5 0-4.9-.6-7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C4 20.1 3.5 18 3.5 16 3.5 9 9 3.5 16 3.5S28.5 9 28.5 16 23 28.5 16 28.5zm7.2-8.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.7-.2-1 .2-.3.4-1.1 1.2-1.3 1.5-.2.3-.5.3-.9.1s-1.7-.6-3.2-2c-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.6.2-.2.3-.4.5-.7.2-.3.1-.5 0-.7-.1-.2-1-2.3-1.4-3.1-.4-.9-.7-.7-1-.7-.3 0-.5 0-.8 0-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.4 3.7 1.6 3.9c.2.3 2.8 4.3 6.8 6 4 .2 4.8.2 5.4-.1.6-.3 2.2-1.2 2.5-1.9.3-.7.3-1.2.2-1.3z" />
        </svg>
      </a>

      {/* Estilos */}
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
