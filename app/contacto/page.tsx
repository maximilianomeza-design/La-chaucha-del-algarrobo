"use client";
import { useState } from "react";

export default function Contacto() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const mensaje = formData.get("mensaje") as string;

    if (!file) {
      setStatus("⚠️ Por favor, seleccioná un archivo antes de enviar.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = (reader.result as string).split(",")[1];
      const fileData = base64;
      const mimeType = file.type;
      const fileName = file.name;

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyP4OV4FT917h5UYVFpuG9S74qTDA8lNrb4iC9hBxug9Wi2sD-fR5Kg2hDSwHLNS2bapg/exec",
          {
            method: "POST",
            body: new URLSearchParams({
              nombre,
              email,
              mensaje,
              fileName,
              mimeType,
              fileData,
            }),
          }
        );

        const result = await response.json();
        if (result.status === "success") {
          setStatus("✅ Archivo enviado correctamente");
          form.reset();
          setFile(null);
        } else {
          setStatus("❌ Error: " + result.message);
        }
      } catch (err) {
        setStatus("❌ Error al enviar el archivo.");
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#1C1C1C] pt-32 pb-24">
      {/* ENCABEZADO CON IMAGEN */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/assets/historia-escena5.webp"
          alt="La Chaucha del Algarrobo - Fábrica"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.75]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h2 className="text-4xl md:text-5xl font-serif drop-shadow-lg mb-4">
            Contacto
          </h2>
          <p className="max-w-2xl text-lg md:text-xl drop-shadow-md">
            Desde el corazón del Chaco, creamos muebles que se adaptan a vos.  
            Contanos tu idea y la hacemos realidad.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto mt-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* TEXTO IZQUIERDA */}
        <div className="text-[#3E2C22] space-y-6">
          <h3 className="text-3xl font-serif mb-4">Hablá con nosotros</h3>
          <p className="text-[#4A4A4A] leading-relaxed">
            Si buscás algo más que un mueble estándar, estás en el lugar correcto.  
            Podés adjuntar una foto o un plano de tu ambiente si querés pedir un mueble a medida(NO tiene que ser profesional).  
            Nuestro equipo se pondrá en contacto para ayudarte a diseñar el mueble ideal.
          </p>
          <p className="text-[#4A4A4A] leading-relaxed">
            También podés comunicarte por cualquiera de nuestros canales directos:  
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://wa.me/5493734483830"
                target="_blank"
                className="hover:text-[#5B4636] transition"
              >
                💬 WhatsApp: +54 9 3734 483830
              </a>
            </li>
            <li>
              <a
                href="mailto:lachaucha2020@gmail.com"
                className="hover:text-[#5B4636] transition"
              >
                ✉️ contacto lachaucha2020@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lachauchadelalgarrobo"
                target="_blank"
                className="hover:text-[#5B4636] transition"
              >
                📷 @lachauchadelalgarrobo
              </a>
            </li>
          </ul>
        </div>

        {/* FORMULARIO DERECHA */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#E5E1DA] rounded-2xl p-8 shadow-sm space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-[#3E2C22] mb-2">
              Nombre completo
            </label>
            <input
              name="nombre"
              type="text"
              required
              placeholder="Tu nombre"
              className="w-full border border-[#D6D2CB] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5B4636]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3E2C22] mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="tuemail@ejemplo.com"
              className="w-full border border-[#D6D2CB] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5B4636]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3E2C22] mb-2">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              placeholder="Contanos qué estás buscando..."
              className="w-full border border-[#D6D2CB] rounded-xl px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-[#5B4636]"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3E2C22] mb-2">
              Subí una foto o plano (opcional)
            </label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full border border-[#D6D2CB] rounded-xl px-4 py-2 bg-white"
            />
          </div>

          <button
            type="submit"
            className="bg-[#3E2C22] text-white px-6 py-3 rounded-2xl hover:bg-[#5B4636] transition w-full md:w-auto"
          >
            Enviar mensaje
          </button>

          {status && (
            <p className="mt-4 text-center text-[#3E2C22]">{status}</p>
          )}
        </form>
      </section>
    </main>
  );
}
