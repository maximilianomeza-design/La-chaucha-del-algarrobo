export default function Fabrica() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#1C1C1C] pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif text-center text-[#3E2C22] mb-10">
        La Fábrica
      </h2>
      <p className="text-center text-[#4A4A4A] max-w-3xl mx-auto mb-12">
        Desde el corazón del Chaco, diseñamos y fabricamos muebles de madera maciza de
        algarrobo que combinan tradición artesanal y tecnología moderna. Cada pieza refleja
        nuestra identidad, calidad real y diseño contemporáneo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#EDE8E1] h-72 rounded-2xl shadow-inner flex items-center justify-center text-[#3E2C22] font-serif text-lg">
          📸 Imagen del taller / proceso artesanal
        </div>
        <div>
          <h3 className="text-2xl font-serif text-[#3E2C22] mb-4">
            De la fábrica a tu casa
          </h3>
          <p className="text-[#4A4A4A] mb-6">
            Trabajamos sin intermediarios ni stock innecesario. Cada pedido se realiza con
            precisión y cuidado, utilizando madera maciza seleccionada. Esto nos permite
            garantizar un control total sobre la calidad y una experiencia de compra directa,
            transparente y humana.
          </p>
          <a
            href="/contacto"
            className="bg-[#3E2C22] text-white px-6 py-3 rounded-2xl hover:bg-[#5B4636] transition"
          >
            Conocer nuestra historia
          </a>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-3xl font-serif text-[#3E2C22] mb-4">
          El lujo está en los detalles
        </h3>
        <p className="text-[#4A4A4A] max-w-2xl mx-auto mb-8">
          Nuestros muebles integran tecnología pensada para mejorar la experiencia de uso diario:
          herrajes ocultos, correderas telescópicas, cierres suaves y acabados premium.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Herrajes ocultos', 'Cierre suave', 'Acabados premium'].map((item) => (
            <div
              key={item}
              className="bg-white border border-[#E5E1DA] rounded-2xl p-6 shadow-sm"
            >
              <p className="text-[#3E2C22] font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
