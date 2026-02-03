import "./globals.css";
import Header from "./components/Header";
import type { Metadata } from "next";
import { Inter, Spectral } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Origen Algarrobo — by La Chaucha | Muebles de diseño artesanal",
  description:
    "Origen Algarrobo es la línea premium de La Chaucha: muebles de algarrobo macizo, diseño artesanal contemporáneo y producción consciente. Línea Nova con laca semibrillante, herrajes telescópicos y cierre suave. Hecho en Chaco, a medida para todo el país.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spectral.variable}`}>
      <body className="antialiased bg-origen-sand text-origen-ink">
        {/* HEADER FIJO */}
        <Header />

        {/* CONTENIDO PRINCIPAL */}
        <main className="pt-20">{children}</main>

        {/* FOOTER */}
        <footer className="bg-origen-dune border-t border-origen-ink/10 text-center py-12 mt-24 text-origen-ink">
          <img
            src="/assets/logo-la-chaucha.webp"
            alt="La Chaucha del Algarrobo"
            className="h-12 mx-auto mb-4 opacity-90"
            loading="lazy"
          />

          <p className="mb-2 text-sm sm:text-base text-origen-ink/80">
            Origen Algarrobo — by La Chaucha
          </p>

          <p className="text-sm text-origen-clay">
            Hecho en Chaco. Pensado para todo el país.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-sm">
            <a
              href="https://www.instagram.com/lachauchadelalgarrobo/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-origen-cocoa transition"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/543743511582"
              target="_blank"
              rel="noreferrer"
              className="hover:text-origen-cocoa transition"
            >
              WhatsApp
            </a>
            <a href="/contacto" className="hover:text-origen-cocoa transition">
              Contacto
            </a>
          </div>

          <p className="text-xs text-origen-clay/70 mt-8">
            © {new Date().getFullYear()} La Chaucha del Algarrobo. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
