export default function Catalogo() {
  const categorias = [
    "Comedores",
    "Cocinas",
    "Dormitorios",
    "Living",
    "Muebles a medida",
  ];

  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#1C1C1C] pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif text-center text-[#3E2C22] mb-10">
        Catálogo de Muebles
      </h2>
      <p className="text-center text-[#4A4A4A] max-w-2xl mx-auto mb-12">
        Explorá nuestras líneas de muebles diseñadas para integrarse a hogares actuales,
        respetando la nobleza de la madera y elevando cada espacio.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categorias.map((cat) => (
          <div
            key={cat}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E5E1DA] hover:shadow-lg transition"
          >
            <div className="bg-[#EDE8E1] h-48 flex items-center justify-center">
              <span className="text-[#3E2C22] font-serif text-xl">{cat}</span>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-[#4A4A4A]">
                Muebles de diseño contemporáneo hechos con madera maciza de algarrobo 100% seleccionado.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/contacto"
          className="bg-[#3E2C22] text-white px-8 py-3 rounded-2xl hover:bg-[#5B4636] transition"
        >
          Consultar disponibilidad
        </a>
      </div>
    </main>
  );
}
