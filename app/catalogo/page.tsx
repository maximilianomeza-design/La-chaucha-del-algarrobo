export default function Catalogo() {
  const productos = [
    {
      nombre: "Mesa cuadrada 1.40x1.40 base central",
      imagen: "/assets/mesa-cuadrada-1.40x1.40-base-central.webp",
      categoria: "Comedor",
    },
    {
      nombre: "Silla Aurelia tapizada",
      imagen: "/assets/silla-aurelia-tapizada.webp",
      categoria: "Comedor",
    },
    {
      nombre: "Placard Nova en dormitorio joven",
      imagen: "/assets/placar-nova-en-dormitorio-joven.webp",
      categoria: "Dormitorio",
    },
    {
      nombre: "Rack TV y Torres",
      imagen: "/assets/rack-tv-y-torres.webp",
      categoria: "Living",
    },
    {
      nombre: "Alacena y bajomesada línea Nova",
      imagen: "/assets/alacena-y-bajomesada-linea-nova.webp",
      categoria: "Cocina",
    },
    {
      nombre: "Modular Nova 1.50 mts",
      imagen: "/assets/modular-nova-1.50-mt.webp",
      categoria: "Living",
    },
  ];

  return (
    <main className="bg-[#F8F6F2] min-h-screen text-[#3E2C22]">
      {/* Encabezado */}
      <section className="text-center py-24 px-6 bg-[#EDE8E1]">
        <h1 className="text-4xl font-serif mb-4">Piezas únicas, creadas para durar</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explorá nuestras líneas de muebles diseñadas para integrarse a hogares actuales,
          respetando la nobleza de la madera y elevando cada espacio.
        </p>
      </section>

      {/* Grilla de productos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="relative group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center text-white transition">
              <h3 className="text-lg font-semibold mb-2">{producto.nombre}</h3>
              <p className="text-sm mb-4 opacity-80">{producto.categoria}</p>
              <a
                href="#"
                className="bg-white text-[#3E2C22] px-5 py-2 rounded-2xl font-medium hover:bg-[#EDE8E1] transition"
              >
                Ver detalles
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* CTA final */}
      <section className="text-center py-20 bg-[#EDE8E1]">
        <h2 className="text-3xl font-serif mb-4">
          Elegí un mueble que te acompañe toda la vida.
        </h2>
        <p className="mb-6 text-[#4A4A4A]">
          Diseño argentino. Madera maciza. Producción consciente.
        </p>
        <a
          href="/contacto"
          className="bg-[#3E2C22] text-white px-8 py-4 rounded-2xl hover:bg-[#5B4636] transition font-medium"
        >
          Consultar o pedir presupuesto
        </a>
      </section>
    </main>
  );
}
