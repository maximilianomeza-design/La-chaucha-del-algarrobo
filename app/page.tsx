"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

export default function Home() {
  const mostrarUltimasUnidades = true;

  const heroImages = [
    { src: "/assets/placard-hero.webp", alt: "Placard Línea Nova" },
    { src: "/assets/detalles-taller-hero.webp", alt: "Taller artesanal" },
    { src: "/assets/showroom-editado.webp", alt: "Showroom La Chaucha del Algarrobo" },
  ];

  const testimonios = [
    {
      nombre: "Marcelo Pérez",
      texto:
        "Desde hace bastante tiempo buscaba un sillón mecedora. Felizmente me encontré con La Chaucha del Algarrobo.",
    },
    {
      nombre: "Eduardo Zurita",
      texto:
        "Excelente atención, muy buena calidad, única en la zona y alrededores.",
    },
    {
      nombre: "Maximiliano Meza",
      texto:
        "Una experiencia maravillosa, la calidad, la terminación, realmente muebles de ensueño.",
    },
    {
      nombre: "Federico Alfredo Francis",
      texto:
        "Todo impecable. Muebles de excelente terminación y muy buena atención.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonios.length);
    }, 6000);
    return () => {
      clearInterval(slideTimer);
      clearInterval(testimonialTimer);
    };
  }, []);

  return (
    <main className="bg-[#F8F6F2] text-[#3E2C22] relative overflow-hidden">
      {/* HERO DESLIZANTE */}
      <section className="relative h-[85vh] sm:h-[70vh] w-full overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover brightness-[0.65]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif mb-4 sm:mb-6 drop-shadow-xl leading-tight">
                Madera eterna, diseño que evoluciona.
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mb-6 sm:mb-10 drop-shadow-md">
                Piezas de algarrobo que combinan tradición artesanal e innovación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/catalogo"
                  className="bg-white text-[#3E2C22] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium hover:bg-[#EDE8E1] transition"
                >
                  Ver catálogo
                </a>
                <a
                  href="/fabrica"
                  className="border border-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-white/20 transition"
                >
                  Conocer la fábrica
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* BANNER DE OFERTA */}
      <section className="relative text-center py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF8F4]">
        <h2 className="text-2xl sm:text-3xl font-serif mb-8 sm:mb-12">Oferta de la Semana</h2>

        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-md">
          <img
            src="/assets/catalogo/cocina/linea-clasica/Alacena-y-bajomesada-1.60-clasica-sin-fondo.webp"
            alt="Alacena y bajomesada línea Clásica"
            className="w-full h-[320px] sm:h-[480px] object-cover"
          />
          <span className="absolute top-5 left-5 bg-[#D72638] text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold shadow-md">
            EN PROMOCIÓN
          </span>
          {mostrarUltimasUnidades && (
            <span className="absolute right-5 top-16 sm:top-5 bg-gradient-to-r from-[#FFD700] via-[#F8E37D] to-[#FFD700] text-[#3E2C22] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold shadow-lg animate-glow">
              ¡🔥 Últimas Unidades 🔥!
            </span>
          )}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#E0C186] via-[#F0D9A7] to-[#E0C186] py-3 sm:py-4 overflow-hidden shadow-inner">
            <div
              className="whitespace-nowrap text-[#3E2C22] text-sm sm:text-lg font-semibold animate-marquee"
              style={{ animationDuration: "16s" }}
            >
              💥 Súper oferta de contado y 6 cuotas fijas sin interés 💥 — Envío sin costo
              (consulte zonas de cobertura) 💥 Súper oferta de contado y 6 cuotas fijas sin
              interés 💥 — Envío sin costo (consulte zonas de cobertura) 💥
            </div>
          </div>
          <a
            href="/catalogo/cocinas/clasica"
            className="absolute inset-0"
            aria-label="Ver producto en promoción"
          ></a>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-[#F8F6F2] py-16 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif mb-10 sm:mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="max-w-3xl mx-auto relative px-4">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className={`transition-opacity duration-1000 ease-in-out absolute inset-0 ${
                i === currentTestimonial ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-10 mx-2">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#E0A800] text-lg sm:text-xl mx-0.5" />
                  ))}
                </div>
                <p className="text-base sm:text-lg italic mb-6">"{t.texto}"</p>
                <p className="font-semibold text-[#3E2C22] text-sm sm:text-base">{t.nombre}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <img src="/assets/google-logo.svg" alt="Google" className="w-6 sm:w-8 mb-2 opacity-80" />
          <p className="text-xs sm:text-sm text-[#4A4A4A]">
            ⭐ Opiniones verificadas —{" "}
            <a
              href="https://share.google/beBdcyz8jnaVdmbIg"
              target="_blank"
              className="underline hover:text-[#3E2C22]"
            >
              Verificado por Google
            </a>
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center bg-[#EDE8E1] py-16 sm:py-24 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-serif mb-4">
          Elegí un mueble que te acompañe toda la vida.
        </h2>
        <p className="text-[#4A4A4A] mb-8 text-sm sm:text-base">
          Diseño argentino. Madera maciza. Producción consciente.
        </p>
        <a
          href="/catalogo"
          className="bg-[#3E2C22] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-[#5B4636] transition font-medium text-sm sm:text-base"
        >
          Ver colección
        </a>
      </section>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/543743511582"
        target="_blank"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#20ba5a] transition z-50"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={24} className="sm:w-7 sm:h-7" />
      </a>

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
      `}</style>
    </main>
  );
}
