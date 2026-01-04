export default function Sustentabilidad() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#1C1C1C] pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif text-center text-[#3E2C22] mb-10">
        Sustentabilidad
      </h2>

      <p className="text-center text-[#4A4A4A] max-w-3xl mx-auto mb-12">
        En La Chaucha del Algarrobo creemos que diseñar también es cuidar.  
        La sustentabilidad no es un discurso, es parte de nuestro proceso productivo diario:  
        aprovechamos cada veta, cada tabla y cada recurso con respeto y propósito.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#EDE8E1] h-72 rounded-2xl shadow-inner flex items-center justify-center text-[#3E2C22] font-serif text-lg">
          🌳 Imagen del proceso sustentable
        </div>
        <div>
          <h3 className="text-2xl font-serif text-[#3E2C22] mb-4">
            Diseñar también es cuidar
          </h3>
          <p className="text-[#4A4A4A] mb-6">
            Cada mueble comienza con una selección responsable de la madera.  
            Aprovechamos el material en su totalidad, reduciendo el desperdicio y optimizando cada proceso.  
            Nuestras prácticas están alineadas con un compromiso real hacia el entorno natural y social.
          </p>

          <ul className="space-y-3 text-[#3E2C22] font-medium">
            <li>• Uso consciente del algarrobo</li>
            <li>• Aprovechamiento integral de la madera</li>
            <li>• Producción local</li>
            <li>• Menos desperdicio, más diseño</li>
          </ul>
        </div>
      </div>

      <div className="mt-24 bg-[#EDE8E1] rounded-3xl p-10 text-center shadow-sm">
        <h3 className="text-3xl font-serif text-[#3E2C22] mb-4">
          Producción local y responsable
        </h3>
        <p className="text-[#4A4A4A] max-w-2xl mx-auto mb-6">
          Todo se fabrica en el norte argentino, impulsando el trabajo local y fortaleciendo
          la cadena productiva regional. Cada mueble refleja nuestra visión:
          diseño contemporáneo con raíces profundas.
        </p>
        <a
          href="/catalogo"
          className="bg-[#3E2C22] text-white px-8 py-3 rounded-2xl hover:bg-[#5B4636] transition"
        >
          Ver colección completa
        </a>
      </div>
    </main>
  );
}
