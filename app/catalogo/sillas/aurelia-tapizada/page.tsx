"use client";

import { useState } from "react";

export default function SillaAureliaTapizada() {
  const galeria = [
    "/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizado-bcoynegro.webp",
    "/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizado-bcoynegro2.webp",
    "/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizado-bordo.webp",
  ];

  const video = "/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizada2.mp4";

  const [indice, setIndice] = useState(0);

  const siguiente = () => setIndice((prev) => (prev + 1) % galeria.length);
  const anterior = () =>
    setIndice((prev) => (prev - 1 + galeria.length) % galeria.length);

  return (
    <main className="bg-[#F8F6F2] min-h-screen text-[#3E2C22]">
      {/* HERO */}
      <section className="relative">
        <img
          src="/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizada.webp"
          alt="Silla Aurelia tapizada de algarrobo"
          className="w-full h-[85vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-serif mb-4 drop-shadow-lg">
            Silla Aurelia Tapizada
          </h1>
          <p className="text-lg max-w-2xl drop-shadow-md">
            Elegancia contemporánea con estructura maciza de algarrobo.  
            Su tapizado artesanal brinda confort y estilo, ideal para comedores modernos.
          </p>
        </div>
      </section>

      {/* DESCRIPCIÓN + GALERÍA */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Texto descriptivo */}
        <div>
          <h2 className="text-3xl font-serif mb-6">Detalles del producto</h2>
          <ul className="space-y-3 text-[#4A4A4A]">
            <li>• Estructura maciza de algarrobo (Finger Joint).</li>
            <li>• Tapizado artesanal en telas de alta resistencia.</li>
            <li>• Terminación natural con laca protectora semi mate.</li>
            <li>• Ideal para comedores contemporáneos o nórdicos.</li>
          </ul>

          <h3 className="text-2xl font-serif mt-10 mb-4">Estilo y combinaciones</h3>
          <p className="text-[#4A4A4A] leading-relaxed">
            Su diseño combina perfectamente con mesas de líneas modernas o rústicas.
            Disponible en variedad de tonos según stock y telas seleccionadas.
          </p>

          <h3 className="text-2xl font-serif mt-10 mb-4">Cuidados recomendados</h3>
          <p className="text-[#4A4A4A] leading-relaxed">
            Limpiar con paño seco o apenas húmedo.  
            Evitar exposición prolongada al sol o fuentes de calor.  
            Para el tapizado, usar productos neutros o aspiradora con cepillo suave.
          </p>

          {/* BOTONES */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="bg-[#3E2C22] text-white px-6 py-3 rounded-2xl hover:bg-[#5B4636] transition font-medium"
              onClick={() =>
                alert("Silla Aurelia Tapizada agregada al carrito (modo demostración)")
              }
            >
              Agregar al carrito 🛒
            </button>

            <a
              href="https://wa.me/543743511582?text=Hola!%20Quisiera%20consultar%20por%20la%20Silla%20Aurelia%20Tapizada."
              target="_blank"
              className="border border-[#3E2C22] text-[#3E2C22] px-6 py-3 rounded-2xl hover:bg-[#EDE8E1] transition font-medium"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Carrusel de imágenes y video */}
        <div className="space-y-6 relative">
          <div className="relative">
            <img
              src={galeria[indice]}
              alt={`Silla Aurelia ${indice + 1}`}
              className="rounded-3xl shadow-md w-full object-cover transition-all duration-500 h-[400px] md:h-[420px] lg:h-[420px]"
            />

            {/* Botones carrusel */}
            <button
              onClick={anterior}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#3E2C22] p-2 rounded-full shadow transition"
            >
              ‹
            </button>
            <button
              onClick={siguiente}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#3E2C22] p-2 rounded-full shadow transition"
            >
              ›
            </button>
          </div>

          {/* Video */}
          <video
            src={video}
            controls
            className="w-full rounded-3xl shadow-md mt-6 h-[360px] md:h-[400px] lg:h-[400px] object-cover"
          >
            Tu navegador no soporta la reproducción de video.
          </video>

          {/* Texto debajo del video */}
          <p className="text-center text-sm text-[#4A4A4A] mt-2 italic">
            Video creado con IA.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center bg-[#EDE8E1] py-20">
        <h2 className="text-3xl font-serif mb-4">Hecha para compartir momentos.</h2>
        <p className="text-[#4A4A4A] mb-6">
          Cada silla de La Chaucha del Algarrobo está diseñada para acompañarte toda la vida.
        </p>
        <a
          href="/catalogo"
          className="bg-[#3E2C22] text-white px-8 py-4 rounded-2xl hover:bg-[#5B4636] transition font-medium"
        >
          Volver al catálogo
        </a>
      </section>
    </main>
  );
}
