"use client";

import { useState } from "react";

export default function MesaCuadrada() {
  const galeria = [
    "/assets/catalogo/mesas/lineanova/mesa-cuadrada-1.40x1.40-base-central-sinfondo.jpeg",
  ];
  const video = "/assets/catalogo/mesas/lineanova/mesa-cuadrada-base-central.mp4";

  const variantes = [
    { medida: "1.40 m x 1.40 m", precio: "AR$ 1.320.000" },
    { medida: "1.00 m x 1.00 m", precio: "AR$ 980.000" },
  ];

  const [varianteSeleccionada, setVarianteSeleccionada] = useState(variantes[0]);

  return (
    <main className="bg-[#F8F6F2] min-h-screen text-[#3E2C22]">

      {/* HERO DEL PRODUCTO */}
      <section className="relative">
        <img
          src={galeria[0]}
          alt="Mesa cuadrada Línea Nova de algarrobo"
          className="w-full h-[85vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-serif mb-4 drop-shadow-lg">
            Mesa Cuadrada Línea Nova
          </h1>
          <p className="text-lg max-w-2xl drop-shadow-md">
            Madera eterna, diseño que evoluciona. Estructura sólida de algarrobo macizo con base central robusta y líneas limpias.
          </p>
        </div>
      </section>

      {/* DETALLES */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-serif mb-6">Detalles del producto</h2>
          <ul className="space-y-3 text-[#4A4A4A]">
            <li>• Fabricada en madera maciza de algarrobo estacionado.</li>
            <li>• Unión tipo Finger Joint y encolado con adhesivos de alta resistencia.</li>
            <li>• Terminación natural con laca semi brillante que protege sin ocultar la textura de la madera.</li>
            <li>• Base central robusta con compartimiento de guardado interno.</li>
            <li>• Ideal para comedores modernos, rústicos o contemporáneos.</li>
          </ul>

          {/* VARIANTES */}
          <div className="mt-8">
            <h3 className="text-2xl font-serif mb-2">Medidas disponibles</h3>
            <select
              className="border border-[#3E2C22] rounded-xl px-4 py-2 bg-white"
              value={varianteSeleccionada.medida}
              onChange={(e) => {
                const v = variantes.find((v) => v.medida === e.target.value);
                if (v) setVarianteSeleccionada(v);
              }}
            >
              {variantes.map((v, i) => (
                <option key={i} value={v.medida}>
                  {v.medida}
                </option>
              ))}
            </select>

            <p className="mt-4 text-lg">
              <strong>Precio:</strong> {varianteSeleccionada.precio}
            </p>
          </div>

          <h3 className="text-2xl font-serif mt-10 mb-4">Estilo y combinaciones</h3>
          <p className="text-[#4A4A4A] leading-relaxed">
            Combina perfectamente con sillas tapizadas o de madera de líneas contemporáneas. 
            Su diseño equilibrado y materiales nobles la convierten en el centro visual de cualquier comedor de diseño argentino.
          </p>

          <h3 className="text-2xl font-serif mt-10 mb-4">Cuidados y mantenimiento</h3>
          <p className="text-[#4A4A4A] leading-relaxed">
            Limpiar con paño húmedo, evitar exposición directa al sol o fuentes de calor. 
            Recomendamos aplicar lustra muebles en crema o aerosol semanalmente para mantener el brillo y la protección natural de la madera.
          </p>

          <p className="italic text-[#6A6A6A] text-sm mt-4">
            *Consultar disponibilidad de medidas especiales o acabados personalizados.*
          </p>

          {/* BOTONES */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="bg-[#3E2C22] text-white px-6 py-3 rounded-2xl hover:bg-[#5B4636] transition font-medium"
              onClick={() =>
                alert(
                  `Mesa Cuadrada ${varianteSeleccionada.medida} agregada al carrito (modo demostración)`
                )
              }
            >
              Agregar al carrito 🛒
            </button>

            <a
              href={`https://wa.me/543743511582?text=Hola!%20Quisiera%20consultar%20por%20la%20Mesa%20Cuadrada%20Línea%20Nova%20(${varianteSeleccionada.medida}).`}
              target="_blank"
              className="border border-[#3E2C22] text-[#3E2C22] px-6 py-3 rounded-2xl hover:bg-[#EDE8E1] transition font-medium"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* GALERÍA DE IMÁGENES Y VIDEO */}
        <div className="space-y-6">
          {galeria.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Mesa Cuadrada Nova ${i + 1}`}
              className="rounded-3xl shadow-md w-full object-cover"
            />
          ))}

          {video && (
            <video
              src={video}
              controls
              className="w-full rounded-3xl shadow-md mt-6"
            />
          )}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center bg-[#EDE8E1] py-20">
        <h2 className="text-3xl font-serif mb-4">Hecha para compartir momentos.</h2>
        <p className="text-[#4A4A4A] mb-6">
          Cada mesa de La Chaucha del Algarrobo está pensada para durar toda la vida.
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
