"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const heroImages = [
    { src: "/assets/placard-hero.webp", alt: "Placard Línea Nova" },
    { src: "/assets/detalles-taller-hero.webp", alt: "Detalle artesanal en algarrobo" },
    { src: "/assets/showroom-editado.webp", alt: "Showroom Origen Algarrobo" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5200);
    return () => clearInterval(slideTimer);
  }, [heroImages.length]);

  return (
    <main className="relative overflow-hidden bg-origen-sand text-origen-ink">
      
      {/* HERO */}
      <section className="relative h-[78vh] sm:h-[66vh] w-full overflow-hidden">
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
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />

            <div className="absolute inset-0 bg-black/22" />

            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div className="relative w-full max-w-5xl text-center text-white px-2 sm:px-4 py-8 sm:py-10">

                <div className="mb-6 sm:mb-8">
                  <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-white/80">
                    Origen Algarrobo
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs tracking-[0.22em] uppercase text-white/60">
                    by La Chaucha
                  </p>
                </div>

                <h1 className="mx-auto font-serif text-4xl sm:text-5xl md:text-5xl tracking-[-0.02em] leading-[1.05] drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]">
                  Muebles de algarrobo
                </h1>

                <h2 className="mt-6 mx-auto max-w-3xl font-serif font-light text-xl sm:text-2xl md:text-3xl text-white/85 leading-[1.2]">
                  La esencia del monte, decorando tu casa.
                </h2>

                <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-white/80">
                  Diseño cuidado. Producción propia. Madera real.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/catalogo"
                    className="group inline-flex items-center justify-center rounded-2xl bg-white text-origen-ink px-8 py-4 text-sm sm:text-base font-medium transition hover:translate-y-[-1px] hover:bg-white/90"
                  >
                    Ver Colección Nova
                    <span className="ml-2 opacity-70 transition group-hover:opacity-100">→</span>
                  </a>

                  <a
                    href="/fabrica"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 backdrop-blur px-8 py-4 text-sm sm:text-base font-medium text-white transition hover:bg-white/20 hover:translate-y-[-1px]"
                  >
                    Nuestra fábrica
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a imagen ${i + 1}`}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 w-6 rounded-full transition ${
                i === currentSlide
                  ? "bg-white/70"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* PIEZA DESTACADA */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-origen-sand">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-serif text-origen-ink">
            Pieza destacada
          </h2>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/543734445112"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-origen-ink text-origen-sand p-3.5 sm:p-4 rounded-full shadow-lift hover:bg-origen-cocoa transition z-50 border border-white/10"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

    </main>
  );
}
