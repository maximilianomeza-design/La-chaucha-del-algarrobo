export default function MesaCuadrada() {
  return (
    <main className="bg-[#F8F6F2] min-h-screen text-[#3E2C22]">

      {/* HERO DEL PRODUCTO */}
      <section className="relative">
        <img
          src="/assets/mesa-cuadrada-1.40x1.40-base-central.webp"
          alt="Mesa cuadrada 1.40x1.40 base central de algarrobo"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-serif mb-4">Mesa cuadrada 1.40x1.40</h1>
          <p className="text-lg max-w-2xl">
            Diseño moderno linea Finger Joint de algarrobo. Estructura sólida y líneas
            limpias que realzan la nobleza del material.
          </p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="max-w-5xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-serif mb-6">Detalles del producto</h2>
          <ul className="space-y-3 text-[#4A4A4A]">
            <li>• Finger Joint de algarrobo seleccionado</li>
            <li>• Medidas: 1.40m x 1.40m</li>
            <li>• Terminación natural con laca protectora semi brillante</li>
            <li>• Base central robusta y estable con compartimiento de guardado</li>
            <li>• Ideal para comedores modernos o elegantes</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md text-center">
          <h3 className="text-2xl font-serif mb-4">Consultá por este producto</h3>
          <p className="mb-6 text-[#4A4A4A]">
            Contactanos para conocer precios, opciones de envío y personalización.
          </p>
          <a
            href="https://wa.me/543743511582?text=Hola!%20Quisiera%20consultar%20por%20la%20Mesa%20cuadrada%20de%20algarrobo."
            target="_blank"
            className="bg-[#3E2C22] text-white px-8 py-4 rounded-2xl hover:bg-[#5B4636] transition font-medium"
          >
            Consultar por WhatsApp
          </a>
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
