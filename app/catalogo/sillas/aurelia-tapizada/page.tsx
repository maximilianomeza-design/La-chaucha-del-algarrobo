export default function SillaAureliaTapizada() {
  const galeria = [
    "/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizada.webp",
    "/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizado-bcoynegro.webp",
    "/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizado-bcoynegro2.webp",
    "/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizado-bordo.webp",
  ];

  const video = "/assets/catalogo/sillas/tapizadas/silla-aurelia-tapizada2.mp4";

  return (
    <main className="bg-[#F8F6F2] min-h-screen text-[#3E2C22]">

      {/* HERO DEL PRODUCTO */}
      <section className="relative">
        <img
          src={galeria[0]}
          alt="Silla Aurelia tapizada de algarrobo"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-serif mb-4 drop-shadow-lg">
            Silla Aurelia Tapizada
          </h1>
          <p className="text-lg max-w-2xl drop-shadow-md">
            Elegancia, confort y nobleza natural. Estructura maciza de algarrobo y tapizado artesanal de alta calidad.
          </p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-serif mb-6">Detalles del producto</h2>
          <ul className="space-y-3 text-[#4A4A4A]">
            <li>• Madera maciza de algarrobo, trabajada artesanalmente.</li>
            <li>• Tapizado de alta densidad con terminaciones cuidadas.</li>
            <li>• Ideal para comedores, livings o espacios de diseño.</li>
            <li>• Terminación lustrada cera natural o laca semi-brillante.</li>
            <li>• Medidas aproximadas: 95 cm alto, 46 cm ancho, 45 cm profundidad.</li>
          </ul>

          <h3 className="text-2xl font-serif mt-10 mb-4">Estilo y combinaciones</h3>
          <p className="text-[#4A4A4A] leading-relaxed">
            Perfecta para combinar con mesas de línea Nova o Clásica. Su diseño versátil permite integrarla tanto en ambientes modernos como rústicos contemporáneos.
          </p>

          <h3 className="text-2xl font-serif mt-10 mb-4">Cuidados y mantenimiento</h3>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">
            Limpiar con paño húmedo y lustra muebles en crema o aerosol semanalmente. Evitar exposición directa al sol o fuentes de calor. 
          </p>

          <p className="italic text-[#6A6A6A] text-sm">
            *Consultar disponibilidad de colores y telas al momento del pedido.*
          </p>

          <div className="bg-white mt-10 p-6 rounded-3xl shadow-md text-center">
            <p className="text-xl font-serif mb-2">Precio orientativo: $95.000</p>
            <a
              href="https://wa.me/543743511582?text=Hola!%20Quisiera%20consultar%20por%20la%20Silla%20Aurelia%20tapizada."
              target="_blank"
              className="bg-[#3E2C22] text-white px-8 py-4 rounded-2xl hover:bg-[#5B4636] transition font-medium"
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
              alt={`Silla Aurelia Tapizada ${i + 1}`}
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
        <h2 className="text-3xl font-serif mb-4">Diseño que invita a quedarse.</h2>
        <p className="text-[#4A4A4A] mb-6">
          Cada pieza de La Chaucha del Algarrobo está hecha para durar toda la vida.
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
