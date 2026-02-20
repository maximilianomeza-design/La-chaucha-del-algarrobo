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

            {/* Overlay optimizado */}
            <div className="absolute inset-0 bg-black/22" />

            {/* CONTENIDO */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div className="relative w-full max-w-5xl text-center text-white px-2 sm:px-4 py-8 sm:py-10">

                {/* Marca */}
                <div className="mb-6 sm:mb-8">
                <p className="text-[15px] sm:text-xs tracking-[0.28em] uppercase text-black/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                Origen Algarrobo
              </p>
                <p className="mt-1 text-[15px] sm:text-xs tracking-[0.24em] uppercase text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                by La Chaucha
                </p>
              </div>

                {/* H1 */}
                <h1 className="mx-auto font-serif text-4xl sm:text-5xl md:text-5xl tracking-[-0.02em] leading-[1.05] drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]">
                  Muebles de algarrobo
                </h1>

                {/* Subtítulo refinado */}
                <h2 className="mt-6 mx-auto max-w-3xl font-serif font-light text-xl sm:text-2xl md:text-3xl text-white/85 leading-[1.2]">
                  La esencia del monte, decorando tu casa.
                </h2>

                {/* Copy institucional */}
                <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-white/80">
                  Diseño cuidado. Producción propia. Madera real.
                </p>

                {/* CTAs */}
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

        {/* Indicadores */}
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
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-origen-ink">
                Pieza destacada
              </h2>
              <p className="mt-2 text-sm sm:text-base text-origen-ink/70 max-w-2xl">
                Un ejemplo de terminación y presencia. Madera real, líneas limpias y una sensación de solidez que se nota.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-full border border-origen-ink/10 bg-white/65 px-4 py-2 text-xs tracking-[0.22em] uppercase text-origen-clay">
              Colección Nova
            </div>
          </div>

          <div className="mt-10 relative overflow-hidden rounded-[28px] border border-origen-ink/10 bg-white shadow-soft">
            <div className="relative">
              <img
                src="/assets/catalogo/cocina/linea-clasica/Alacena-y-bajomesada-1.60-clasica-sin-fondo.webp"
                alt="Pieza destacada"
                className="w-full h-[320px] sm:h-[520px] object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-origen-ink/20 via-transparent to-white/25" />

              <span className="absolute top-5 left-5 rounded-full bg-white/80 px-4 py-2 text-xs sm:text-sm font-medium text-origen-ink backdrop-blur">
                Detalle de terminación
              </span>

              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-7">
                <div className="max-w-3xl rounded-2xl bg-white/75 backdrop-blur px-5 sm:px-6 py-4 border border-origen-ink/10">
                  <p className="text-sm sm:text-base text-origen-ink font-medium">
                    Cuidamos la madera como si fuera única. Porque lo es.
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-origen-ink/70">
                    Te ayudamos a definir medidas, proporciones y terminación para que el mueble se vea “de obra”, no “comprado”.
                  </p>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/catalogo"
                      className="inline-flex items-center justify-center rounded-xl bg-origen-ink px-5 py-3 text-sm font-medium text-origen-sand transition hover:bg-origen-cocoa"
                    >
                      Ver Colección Nova
                    </a>
                    <a
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-xl border border-origen-ink/15 bg-white/70 px-5 py-3 text-sm font-medium text-origen-ink transition hover:bg-white/85"
                    >
                      Pedir asesoramiento
                    </a>
                  </div>
                </div>
              </div>

              <a href="/catalogo" className="absolute inset-0" aria-label="Ver colección" />
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="py-20 sm:py-24 bg-origen-sand text-center relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif mb-10 sm:mb-14 text-origen-ink">
            Lo que dicen nuestros clientes
          </h2>

          <div className="relative w-full max-w-3xl mx-auto">
            <div id="carousel" className="flex animate-slide">
              {[
                { nombre: "Eduardo Zurita", texto: "Excelente atención, muy buena calidad, única en la zona y alrededores." },
                { nombre: "Marcelo Pérez", texto: "Desde hace bastante tiempo buscaba un sillón mecedora... felizmente me encontré con La Chaucha del Algarrobo." },
                { nombre: "Maximiliano Meza", texto: "Una experiencia maravillosa, la calidad, la terminación, realmente muebles de ensueño." },
                { nombre: "Federico Alfredo Francis", texto: "Excelente atención y productos de primera calidad." },
              ].map((t, i) => (
                <div
                  key={i}
                  className="min-w-full flex flex-col items-center justify-center space-y-5 rounded-[28px] border border-origen-ink/10 bg-white/70 backdrop-blur p-9 sm:p-11 shadow-soft"
                >
                  <div className="flex items-center space-x-1 text-origen-ink/70 text-xl">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>

                  <div className="flex items-center gap-2 opacity-80">
                    <img
                      src="/assets/google-logo.svg"
                      alt="Google Logo"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                    <span className="text-xs tracking-[0.18em] uppercase text-origen-clay">
                      Reseña verificada
                    </span>
                  </div>

                  <p className="text-base sm:text-lg italic text-origen-ink/90">
                    “{t.texto}”
                  </p>
                  <p className="font-medium text-origen-ink">{t.nombre}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-origen-ink/10 bg-white/60 px-4 py-2 text-xs text-origen-clay">
            <img src="/assets/google-logo.svg" alt="Google Logo" className="w-4 h-4" loading="lazy" />
            <span>Verificado por Google</span>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center bg-origen-dune py-16 sm:py-24 px-4 sm:px-6 border-t border-origen-ink/10">
        <h2 className="text-2xl sm:text-3xl font-serif text-origen-ink">
          Piezas únicas, creadas para durar.
        </h2>
        <p className="mt-3 text-origen-ink/70 text-sm sm:text-base max-w-2xl mx-auto">
          El equilibrio perfecto entre elegancia y tradición.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/catalogo"
            className="inline-flex items-center justify-center rounded-2xl bg-origen-ink text-origen-sand px-7 sm:px-9 py-3.5 sm:py-4 transition hover:bg-origen-cocoa font-medium text-sm sm:text-base"
          >
            Ver Colección Nova
          </a>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center rounded-2xl border border-origen-ink/15 bg-white/60 px-7 sm:px-9 py-3.5 sm:py-4 transition hover:bg-white/80 font-medium text-sm sm:text-base text-origen-ink"
          >
            Pedir asesoramiento
          </a>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-origen-clay/80">
          Nobleza natural, diseño artesanal.
        </p>
      </section>

      {/* WhatsApp */}
      <a
        href="https://wa.me/543734445112"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-origen-ink text-origen-sand p-3.5 sm:p-4 rounded-full shadow-lift hover:bg-origen-cocoa transition z-50 border border-white/10"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={24} className="sm:w-7 sm:h-7" />
      </a>

    </main>
  );
}
