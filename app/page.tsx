"use client";
import { useEffect } from "react";

export default function Home() {
  // 👇 Cambiá a true o false según si querés mostrar el cartel "Últimas Unidades"
  const mostrarUltimasUnidades = true;

  useEffect(() => {
    const banners = document.querySelectorAll(".animate-marquee");
    banners.forEach((banner) => {
  const htmlBanner = banner as HTMLElement; // 👈 lo convertimos a HTMLElement
  htmlBanner.addEventListener("animationiteration", () => {
    htmlBanner.classList.remove("animate-marquee");
    void htmlBanner.offsetWidth;
    htmlBanner.classList.add("animate-marquee");
  });
});
  }, []);

  return (
    <main className="bg-[#F8F6F2] text-[#3E2C22]">
      {/* HERO */}
      <section className="relative">
        <img
          src="/assets/tabla-con-logo.jpg"
          alt="Muebles de algarrobo contemporáneos"
          className="w-full h-[85vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-serif mb-4 drop-shadow-lg">
            Madera eterna, diseño que evoluciona.
          </h1>
          <p className="text-lg max-w-2xl mb-8 drop-shadow-md">
            Piezas de algarrobo que combinan tradición artesanal y diseño contemporáneo.
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
            <span className="absolute top-5 right-5 bg-gradient-to-r from-[#FFD700] via-[#F8E37D] to-[#FFD700] text-[#3E2C22] px-6 py-3 rounded-full text-lg font-bold shadow-lg animate-glow">
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

      {/* Estilos del banner animado y glow */}
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
