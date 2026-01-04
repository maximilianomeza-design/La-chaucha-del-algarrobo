export default function Contacto() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#1C1C1C] pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif text-center text-[#3E2C22] mb-10">
        Contacto
      </h2>
      <p className="text-center text-[#4A4A4A] max-w-3xl mx-auto mb-12">
        Si buscás algo más que un mueble estándar, estás en el lugar correcto.  
        Hablá directamente con nuestra fábrica para recibir asesoramiento personalizado  
        o conocer más sobre nuestras piezas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* FORMULARIO SIMPLE */}
        <form className="bg-white border border-[#E5E1DA] rounded-2xl p-8 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#3E2C22] mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-[#D6D2CB] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5B4636]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#3E2C22] mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="tuemail@ejemplo.com"
              className="w-full border border-[#D6D2CB] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5B4636]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#3E2C22] mb-2">
              Mensaje
            </label>
            <textarea
              placeholder="Contanos qué estás buscando..."
              className="w-full border border-[#D6D2CB] rounded-xl px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-[#5B4636]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#3E2C22] text-white px-6 py-3 rounded-2xl hover:bg-[#5B4636] transition w-full md:w-auto"
          >
            Enviar mensaje
          </button>
        </form>

        {/* DATOS DIRECTOS */}
        <div>
          <h3 className="text-2xl font-serif text-[#3E2C22] mb-4">
            Hablar con la fábrica
          </h3>
          <p className="text-[#4A4A4A] mb-6">
            Estamos disponibles para responder tus consultas sobre materiales, diseños o tiempos
            de entrega. Elegí tu canal preferido y hablá directamente con nosotros.
          </p>

          <div className="space-y-4">
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              className="flex items-center gap-3 text-[#3E2C22] hover:text-[#5B4636] transition"
            >
              <span className="text-2xl">💬</span>
              <span>WhatsApp: +54 9 11 1234 5678</span>
            </a>
            <a
              href="mailto:contacto@lachauchadelalgarrobo.com"
              className="flex items-center gap-3 text-[#3E2C22] hover:text-[#5B4636] transition"
            >
              <span className="text-2xl">✉️</span>
              <span>contacto@lachauchadelalgarrobo.com</span>
            </a>
            <a
              href="https://www.instagram.com/lachauchadelalgarrobo"
              target="_blank"
              className="flex items-center gap-3 text-[#3E2C22] hover:text-[#5B4636] transition"
            >
              <span className="text-2xl">📷</span>
              <span>@lachauchadelalgarrobo</span>
            </a>
          </div>

          <div className="mt-10 bg-[#EDE8E1] rounded-2xl p-6 text-center shadow-sm">
            <p className="text-[#3E2C22] font-medium mb-3">
              Hecho en Chaco. Pensado para todo el país.
            </p>
            <p className="text-[#4A4A4A] text-sm">Envíos a todo el territorio argentino.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
