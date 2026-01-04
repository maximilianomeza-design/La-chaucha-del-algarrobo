export default function Home() {
  return (
    <main className="bg-[#F8F6F2] text-[#3E2C22]">

      {/* HERO */}
      <section className="relative">
        <img
          src="/assets/mesa-comedor-tradicional.webp"
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

      {/* GALERÍA DE MUEBLES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-24">
        {[
          { src: "/assets/mesa-cuadrada-1.40x1.40-base-central.webp", title: "Comedores" },
          { src: "/assets/silla-aurelia-tapizada.webp", title: "Sillas" },
          { src: "/assets/placar-nova-en-dormitorio-joven.webp", title: "Placares" },
        ].map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-3xl shadow-sm bg-white"
          >
            <img
              src={item.src}
              alt={item.title}
              className="object-cover w-full h-80 group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
              <span className="bg-white text-[#3E2C22] px-5 py-2 rounded-2xl font-medium">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="text-center bg-[#EDE8E1] py-24 px-6">
        <h2 className="text-3xl font-serif mb-4">Elegí un mueble que te acompañe toda la vida.</h2>
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
    </main>
  );
}
