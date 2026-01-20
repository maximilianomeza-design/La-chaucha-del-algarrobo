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
    <main className="min-h-screen bg-[#F8F6F2] text-[#1C1C1C] pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif text-center text-[#3E2C22] mb-10">
        Contacto
      </h2>

      <p className="text-center text-[#4A4A4A] max-w-3xl mx-auto mb-12">
        Si buscás algo más que un mueble estándar, estás en el lugar correcto.  
        Podés adjuntar una foto o un plano de tu ambiente si querés pedir un mueble a medida.  
        Nuestro equipo se pondrá en contacto para ayudarte a diseñar el mueble ideal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* IMAGEN INFORMATIVA */}
        <div className="flex justify-center items-center order-1 md:order-none">
          <img
            src="/assets/historia-escena5.webp"
            alt="Fábrica La Chaucha del Algarrobo"
            className="rounded-2xl shadow-lg w-full object-cover bg-[#EDE8E1]"
          />
        </div>

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#E5E1DA] rounded-2xl p-8 shadow-sm space-y-6 order-2 md:order-none"
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

          {status && <p className="mt-4 text-center text-[#3E2C22]">{status}</p>}
        </form>
      </div>
    </main>
  );
}
