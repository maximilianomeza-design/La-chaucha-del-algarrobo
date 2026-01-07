"use client";

import Image from "next/image";
import Link from "next/link";

export default function Fabrica() {
  return (
    <main className="bg-[#F8F6F2] text-[#3E2C22] overflow-hidden">
      {/* HERO VISUAL */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/assets/fabrica-plano-general.webp"
          alt="Vista general de la fábrica de muebles"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl sm:text-6xl font-serif text-white mb-6 drop-shadow-lg">
            Donde la madera cobra vida
          </h1>
          <p className="text-white/90 text-lg sm:text-xl mb-10 leading-relaxed">
            En nuestro taller, cada mueble nace del encuentro entre la tradición del
            algarrobo chaqueño y la precisión de la carpintería moderna.
          </p>
          <Link
            href="/historia"
            className="inline-block bg-white text-[#3E2C22] px-8 py-4 rounded-2xl font-medium hover:bg-[#EDE8E1] transition"
          >
            Conocer nuestra historia
          </Link>
        </div>
      </section>

      {/* SECCIÓN INTERMEDIA */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-[#3E2C22]">
            Hecho con manos que entienden la madera
          </h2>
          <p className="text-[#4A4A4A] leading-relaxed">
            Desde el corazón de Chaco, trabajamos el algarrobo con respeto y precisión.
            Utilizamos herramientas modernas sin dejar atrás la esencia artesanal.
            Cada corte, cada unión y cada pulido son una firma de calidad.
          </p>
          <p className="text-[#4A4A4A]">
            La madera es viva — y nosotros la escuchamos.
          </p>
        </div>
        <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="/assets/primer-plano-mesa-finger.jpg"
            alt="Detalle artesanal de madera en la fábrica"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* DETALLES DE TECNOLOGÍA */}
      <section className="bg-[#EDE8E1] py-24 px-6 text-center">
        <h3 className="text-3xl font-serif mb-6">El lujo está en los detalles</h3>
        <p className="text-[#4A4A4A] max-w-2xl mx-auto mb-16">
          Nuestros muebles integran sistemas que elevan la experiencia: correderas metálicas,
          herrajes ocultos, bisagras cazoleta y acabados premium.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/assets/plano-corredera-metalica.webp"
              alt="Corredera metálica"
              width={600}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Corredera metálica</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/assets/plano-visagra-cazoleta.webp"
              alt="Bisagra cazoleta"
              width={600}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Bisagra cazoleta</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/assets/plano-pata-mesa-finger.webp"
              alt="Pata de mesa Finger joint"
              width={600}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Ensamble Finger</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-24 bg-[#3E2C22] text-white px-6">
        <h3 className="text-3xl font-serif mb-6">Fábrica y diseño bajo un mismo techo</h3>
        <p className="max-w-2xl mx-auto mb-10 text-white/90">
          Cada mueble cuenta una historia de dedicación y orgullo. Visitá nuestra fábrica
          y descubrí cómo transformamos la madera en piezas únicas.
        </p>
        <Link
          href="/contacto"
          className="bg-white text-[#3E2C22] px-8 py-4 rounded-2xl font-medium hover:bg-[#EDE8E1] transition"
        >
          Agendar visita
        </Link>
      </section>
    </main>
  );
}
