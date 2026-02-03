import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Origen Algarrobo — by La Chaucha | Muebles de diseño artesanal",
  description:
    "Origen Algarrobo es la línea premium de La Chaucha: muebles de algarrobo macizo, diseño artesanal contemporáneo y producción consciente. Línea Nova con laca semibrillante, herrajes telescópicos y cierre suave. Hecho en Chaco, a medida para todo el país.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#FAF7F3] text-[#241A14]">
        {/* HEADER FIJO */}
        <Header />

        {/* CONTENIDO PRINCIPAL */}
        <main className="pt-20">{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#F3EEE7] border-t border-[#241A14]/10 text-center py-12 mt-24 text-[#241A14]">
          {/* Marca */}
          <img
            src="/assets/logo-la-chaucha.webp"
            alt="La Chaucha del Algarrobo"
            className="h-12 mx-auto mb-4 opacity-90"
            loading="lazy"
          />

          <p className="mb-2 text-sm sm:text-base text-[#3A2B23]/80">
            Origen Algarrobo — by La Chaucha
          </p>

          <p className="text-sm text-[#6A564A]">
            Hecho en Chaco. Pensado para todo el país.
          </p>

          {/* Links */}
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <a
              href="https://www.instagram.com/lachauchadelalgarrobo/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2F221B] transition"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/543743511582"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2F221B] transition"
            >
              WhatsApp
            </a>
            <a
              href="/contacto"
              className="hover:text-[#2F221B] transition"
            >
              Contacto
            </a>
          </div>

          <p className="text-xs text-[#6A564A]/70 mt-8">
            © {new Date().getFullYear()} La Chaucha del Algarrobo. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
