import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "La Chaucha del Algarrobo | Muebles de diseño argentino",
  description:
    "Muebles de madera maciza que combinan tradición artesanal, diseño contemporáneo y producción sustentable. Hecho en Chaco, pensado para todo el país.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#F8F6F2] text-[#3E2C22]">
        {/* HEADER FIJO */}
        <Header />

        {/* CONTENIDO PRINCIPAL */}
        <main className="pt-20">{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#EDE8E1] text-center py-10 mt-20 text-[#3E2C22]">
          <img
            src="/assets/logo-la-chaucha.webp"
            alt="La Chaucha del Algarrobo"
            className="h-12 mx-auto mb-4"
          />
          <p className="mb-2">Hecho en Chaco. Pensado para todo el país.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://www.instagram.com/lachauchadelalgarrobo/"
              target="_blank"
              className="hover:text-[#5B4636] transition"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/543743511582"
              target="_blank"
              className="hover:text-[#5B4636] transition"
            >
              WhatsApp
            </a>
            <a href="/contacto" className="hover:text-[#5B4636] transition">
              Contacto
            </a>
          </div>
          <p className="text-sm text-[#7A7A7A] mt-6">
            © {new Date().getFullYear()} La Chaucha del Algarrobo. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
