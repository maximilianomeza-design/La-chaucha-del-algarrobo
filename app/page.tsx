"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  // Mantengo la variable para no romper tu lógica actual, pero en premium evitamos el “urgency” agresivo.
  const mostrarUltimasUnidades = false;

  const heroImages = [
    { src: "/assets/placard-hero.webp", alt: "Placard Línea Nova" },
    { src: "/assets/detalles-taller-hero.webp", alt: "Detalle artesanal en algarrobo" },
    { src: "/assets/showroom-editado.webp", alt: "Showroom de muebles premium" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5200);
    return () => clearInterval(slideTimer);
  }, [heroImages.length]);

  return (
    <main className="relative overflow-hidden bg-[#FAF7F3] text-[#2B201A]">
      {/* HERO DESLIZANTE — Identidad editorial (más claro, premium, enamorador) */}
      <section className="relative h-[86vh] sm:h-[72vh] w-full overflow-hidden">
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

            {/* Overlay editorial: gradiente suave + “velo” cálido (sin oscurecer agresivo) */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/35 to-[#FAF7F3]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.65),rgba(255,255,255,0)_55%)]" />

            {/* Contenido */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
              {/* Marca / firma (sin depender todavía del archivo de logo) */}
              <div className="mb-6 sm:mb-8">
                <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#4A3A31]/80">
                  ORIGEN ALGARROBO
                </p>
                <p className="mt-1 text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#6A564A]/70">
                  by La Chaucha
                </p>
              </div>

              <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl leading-[1.05] font-serif text-[#241A14]">
                Nobleza natural,
                <span className="block">diseño artesanal.</span>
              </h1>

              <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#3A2B23]/80">
                Línea Nova en algarrobo macizo con laca semibrillante, herrajes telescópicos y cierre suave.
                Diseño a medida, hecho para durar.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/catalogo"
                  className="group inline-flex items-center justify-center rounded-2xl bg-[#241A14] px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-[#FAF7F3] shadow-sm transition hover:translate-y-[-1px] hover:bg-[#2F221B] focus:outline-none focus:ring-2 focus:ring-[#241A14]/20"
                >
                  Ver Colección Nova
                  <span className="ml-2 opacity-70 transition group-hover:opacity-100">→</span>
                </a>

                <a
                  href="/fabrica"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#241A14]/15 bg-white/55 px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-[#241A14] shadow-sm transition hover:bg-white/70 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-[#241A14]/15"
                >
                  Conocer el oficio
                </a>
              </div>

              {/* Nota editorial sutil */}
              <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#6A564A]/75">
                Atención personalizada por diseñador · Asesoramiento y medidas · Envíos según zona
              </p>
            </div>
          </div>
        ))}

        {/* Indicadores discretos */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a imagen ${i + 1}`}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 w-6 rounded-full transition ${
                i === currentSlide ? "bg-[#241A14]/70" : "bg-[#241A14]/20 hover:bg-[#241A14]/35"
              }`}
            />
          ))}
        </div>
      </section>

      {/* BANNER (misma sección, nueva identidad): de “Oferta” a “Pieza destacada” */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F3]">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#241A14]">
                Pieza destacada
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#3A2B23]/75 max-w-2xl">
                Una selección editorial para inspirarte. Terminaciones cuidadas, líneas limpias y herrajes de primera.
              </p>
            </div>

            {/* “Sello” premium sutil (sin rojo, sin dorado cliché) */}
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#241A14]/10 bg-white/60 px-4 py-2 text-xs tracking-[0.22em] uppercase text-[#6A564A]">
              Curaduría Nova
            </div>
          </div>

          <div className="mt-10 relative overflow-hidden rounded-[28px] border border-[#241A14]/10 bg-white shadow-sm">
            <div className="relative">
              <img
                src="/assets/catalogo/cocina/linea-clasica/Alacena-y-bajomesada-1.60-clasica-sin-fondo.webp"
                alt="Pieza destacada (referencia de catálogo)"
                className="w-full h-[320px] sm:h-[520px] object-cover"
                loading="lazy"
              />

              {/* Overlay editorial suave para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241A14]/25 via-transparent to-white/35" />

              {/* Etiqueta superior izquierda (sutil) */}
              <span className="absolute top-5 left-5 rounded-full bg-white/75 px-4 py-2 text-xs sm:text-sm font-medium text-[#241A14] backdrop-blur">
                Detalle de terminación
              </span>

              {/* Si alguna vez querés volver a “últimas unidades”, que sea premium: sin fuego ni brillos */}
              {mostrarUltimasUnidades && (
                <span className="absolute top-5 right-5 rounded-full border border-[#241A14]/15 bg-white/70 px-4 py-2 text-xs sm:text-sm font-semibold text-[#241A14] backdrop-blur">
                  Disponibilidad limitada
                </span>
              )}

              {/* Copy inferior editorial (sin marquee) */}
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-7">
                <div className="max-w-3xl rounded-2xl bg-white/70 backdrop-blur px-5 sm:px-6 py-4 border border-[#241A14]/10">
                  <p className="text-sm sm:text-base text-[#241A14] font-medium">
                    Línea Nova · Laca semibrillante · Herrajes telescópicos · Cierre suave
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-[#3A2B23]/75">
                    Consultá medidas, combinaciones y plazos. Diseñado para tu espacio, hecho en algarrobo con respeto por la veta.
                  </p>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/catalogo"
                      className="inline-flex items-center justify-center rounded-xl bg-[#241A14] px-5 py-3 text-sm font-medium text-[#FAF7F3] transition hover:bg-[#2F221B]"
                    >
                      Ver Colección Nova
                    </a>
                    <a
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-xl border border-[#241A14]/15 bg-white/60 px-5 py-3 text-sm font-medium text-[#241A14] transition hover:bg-white/75"
                    >
                      Hablar con un diseñador
                    </a>
                  </div>
                </div>
              </div>

              {/* Link invisible (mantengo tu patrón) */}
              <a
                href="/catalogo"
                className="absolute inset-0"
                aria-label="Ver colección"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CARRUSEL DE RESEÑAS — misma lógica, look más editorial */}
      <section className="py-20 sm:py-24 bg-[#FAF7F3] text-center relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-serif mb-10 sm:mb-14 text-[#241A14]">
            Lo que dicen nuestros clientes
          </h2>

          <div className="relative w-full max-w-3xl mx-auto">
            <div id="carousel" className="flex animate-slide">
              {[
                {
                  nombre: "Eduardo Zurita",
                  texto: "Excelente atención, muy buena calidad, única en la zona y alrededores.",
                },
                {
                  nombre: "Marcelo Pérez",
                  texto:
                    "Desde hace bastante tiempo buscaba un sillón mecedora... felizmente me encontré con La Chaucha del Algarrobo.",
                },
                {
                  nombre: "Maximiliano Meza",
                  texto:
                    "Una experiencia maravillosa, la calidad, la terminación, realmente muebles de ensueño.",
                },
                {
                  nombre: "Federico Alfredo Francis",
                  texto: "Excelente atención y productos de primera calidad.",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="min-w-full flex flex-col items-center justify-center space-y-5 rounded-[28px] border border-[#241A14]/10 bg-white/70 backdrop-blur p-9 sm:p-11 shadow-sm"
                >
                  <div className="flex items-center space-x-1 text-[#7A5A2E] text-xl">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>

                  <div className="flex items-center gap-2 opacity-80">
                    <img
                      src="/assets/google-logo.svg"
                      alt="Google Logo"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                    <span className="text-xs tracking-[0.18em] uppercase text-[#6A564A]">
                      Reseña verificada
                    </span>
                  </div>

                  <p className="text-base sm:text-lg italic text-[#241A14]/90">
                    “{t.texto}”
                  </p>
                  <p className="font-medium text-[#241A14]">{t.nombre}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#241A14]/10 bg-white/60 px-4 py-2 text-xs text-[#6A564A]">
            <img src="/assets/google-logo.svg" alt="Google Logo" className="w-4 h-4" loading="lazy" />
            <span>Verificado por Google</span>
          </div>
        </div>
      </section>

      {/* CTA FINAL — premium, enamorador, a medida */}
      <section className="text-center bg-[#F3EEE7] py-16 sm:py-24 px-4 sm:px-6 border-t border-[#241A14]/10">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#241A14]">
          Diseñado para tu hogar. Hecho con algarrobo real.
        </h2>
        <p className="mt-3 text-[#3A2B23]/75 text-sm sm:text-base max-w-2xl mx-auto">
          Línea Nova · laca semibrillante · herrajes telescópicos · cierre suave.
          Te acompañamos con atención personalizada para definir medidas, estilo y terminación.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/catalogo"
            className="inline-flex items-center justify-center rounded-2xl bg-[#241A14] text-[#FAF7F3] px-7 sm:px-9 py-3.5 sm:py-4 transition hover:bg-[#2F221B] font-medium text-sm sm:text-base"
          >
            Ver Colección Nova
          </a>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center rounded-2xl border border-[#241A14]/15 bg-white/60 px-7 sm:px-9 py-3.5 sm:py-4 transition hover:bg-white/75 font-medium text-sm sm:text-base text-[#241A14]"
          >
            Pedir asesoramiento
          </a>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-[#6A564A]/75">
          Nobleza natural, diseño artesanal.
        </p>
      </section>

      {/* BOTÓN WHATSAPP — mantengo pero lo hago más “premium” (sin verde chillón) */}
      <a
        href="https://wa.me/543734445112"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#241A14] text-[#FAF7F3] p-3.5 sm:p-4 rounded-full shadow-lg hover:bg-[#2F221B] transition z-50 border border-white/10"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={24} className="sm:w-7 sm:h-7" />
      </a>

      {/* Nota: tu animación animate-slide/animate-marquee/animate-glow quedan en tu CSS actual.
          Acá eliminé marquee y glow porque no encajan con premium. */}
    </main>
  );
}
