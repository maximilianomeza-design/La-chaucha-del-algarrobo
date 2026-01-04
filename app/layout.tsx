import "../styles/globals.css";

export const metadata = {
  title: "La Chaucha del Algarrobo — Muebles de Madera Maciza",
  description:
    "Muebles sustentables y contemporáneos fabricados en Chaco, Argentina. Venta directa de fábrica.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#F8F6F2] text-[#1C1C1C] font-sans antialiased">
        import Header from "./components/Header";
        {children}
      </body>
    </html>
  );
}
