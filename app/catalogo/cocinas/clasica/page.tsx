"use client";

import { useState } from "react";

export default function AlacenaClasica() {
  const variantes = [
    {
      medida: "1.20 m",
      precio: "AR$ 640.000",
      imagen: "/assets/catalogo/cocina/linea-clasica/Alacena-y-bajomesada-1.60-clasica-sin-fondo.webp",
    },
    {
      medida: "1.40 m",
      precio: "AR$ 690.000",
      imagen: "/assets/catalogo/cocina/linea-clasica/Alacena-y-bajomesada-1.60-clasica-plano-cajones.webp",
    },
    {
      medida: "1.60 m",
      precio: "AR$ 750.000",
      imagen: "/assets/catalogo/cocina/linea-clasica/Alacena-y-bajomesada-1.60-clasica-sin-fondo.webp",
    },
    {
      medida: "1.80 m",
      precio: "AR$ 820.000",
      imagen: "/assets/catalogo/cocina/linea-clasica/Alacena-y-bajomesada-1.60-clasica-plano-cajones.webp",
    },
  ];

  const [varianteSeleccionada, setVarianteSeleccionada] = useState(variantes[0]);
  const [terminacion, setTerminacion] = useState("Encerado");

  return (
    <main className="bg-[#F8F6F2] min-h-screen text-[#3E2C22]">
      {/* HERO */}
      <section className="relative">
        <img
          src="/assets/catalogo/cocina/linea-clasica/Alacena-y-bajomesada-1.60-clasica-plano-cajones.webp"
          alt="Alacena y bajomesada línea clásica"
          className="w-full h-[85vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-serif mb-4 drop-shadow-lg">
            Alacena y Bajomesada Línea Clásica
          </h1>
          <p className="text-lg max-w-2xl drop-shadow-md">
            Un diseño tradicional que resalta la nobleza del algarrobo.  
            Fabricada con madera sólida y terminaciones artesanales.
          </p>
        </div>
      </section>

      {/* DESCRIPCIÓN + GALERÍA */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Columna izquierda */}
        <div>
          <h2 className="text-3xl font-serif mb-6">Detalles del producto</h2>
          <ul className="space-y-3 text-[#4A4A4A]">
            <li>• Fabricada 100% en madera maciza de algarrobo estacionado.</li>
            <li>• Ensamble tradicional con terminación artesanal.</li>
            <li>• Amplio espacio de guardado con estantes y cajones reforzados.</li>
            <li>• Terminación natural encerada o con laca semi brillante.</li>
            <li>• Ideal para cocinas clásicas o ambientes rústicos elegantes.</li>
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
              <strong>Precio (encerado):</strong> {varianteSeleccionada.precio}
            </p>
            <p className="text-sm text-[#6B5E52] mt-1">
              *Consultar precio en terminación con laca.
            </p>
          </div>

          {/* TERMINACIÓN */}
          <div className="mt-8">
            <h3 className="text-2xl font-serif mb-2">Terminación</h3>
            <select
              className="border border-[#3E2C22] rounded-xl px-4 py-2 bg-white"
              value={terminacion}
              onChange={(e) => setTerminacion(e.target.value)}
            >
              <option value="Encerado">Encerado</option>
              <option value="Laca">Laca (consultar precio)</option>
            </select>
          </div>

          {/* BOTONES */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="bg-[#3E2C22] text-white px-6 py-3 rounded-2xl hover:bg-[#5B4636] transition font-medium"
              onClick={() =>
                alert(
                  `Alacena Clásica ${varianteSeleccionada.medida} (${terminacion}) agregada al carrito (modo demostración)`
                )
              }
            >
              Agregar al carrito 🛒
            </button>

            <a
              href={`https://wa.me/543743511582?text=Hola!%20Quisiera%20consultar%20por%20la%20Alacena%20Clásica%20${encodeURIComponent(
                varianteSeleccionada.medida
              )}%20(${terminacion}).`}
              target="_blank"
              className="border border-[#3E2C22] text-[#3E2C22] px-6 py-3 rounded-2xl hover:bg-[#EDE8E1] transition font-medium"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Columna derecha (imagen dinámica) */}
        <div className="space-y-6">
          <img
            src={varianteSeleccionada.imagen}
            alt={`Alacena Clásica ${varianteSeleccionada.medida}`}
            className="rounded-3xl shadow-md w-full object-cover transition-all duration-500 h-[400px] md:h-[350px] lg:h-[420px]"
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center bg-[#EDE8E1] py-20">
        <h2 className="text-3xl font-serif mb-4">Madera eterna, diseño clásico.</h2>
        <p className="text-[#4A4A4A] mb-6">
          Cada mueble de La Chaucha del Algarrobo combina tradición y durabilidad para toda la vida.
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
