export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#1C1C1C]">
      <section className="pt-32 pb-24 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-serif text-[#3E2C22] leading-tight">
          El algarrobo como nunca lo viste.
        </h1>
        <p className="mt-6 text-lg text-[#4A4A4A]">
          Diseñamos y fabricamos muebles de madera maciza que combinan tradición artesanal,
          innovación y producción sustentable. Desde nuestra fábrica, directo a tu casa.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/catalogo"
            className="bg-[#3E2C22] text-white px-6 py-3 rounded-2xl hover:bg-[#5B4636] transition"
          >
            Ver muebles
          </a>
          <a
            href="/fabrica"
            className="border border-[#3E2C22] text-[#3E2C22] px-6 py-3 rounded-2xl hover:bg-[#EDE8E1] transition"
          >
            Conocer la fábrica
          </a>
        </div>
      </section>
    </main>
  );
}
