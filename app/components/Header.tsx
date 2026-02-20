"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F3]/95 backdrop-blur border-b border-[#241A14]/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo_origen_algarrobo.JPG"
            alt="Origen Algarrobo by La Chaucha"
            width={180}
            height={60}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* NAVEGACIÓN */}
        <div className="hidden md:flex gap-8 text-sm text-[#241A14]/90 font-medium">
          <Link href="/" className="hover:text-[#241A14] transition">
            Inicio
          </Link>
          <Link href="/catalogo" className="hover:text-[#241A14] transition">
            Catálogo
          </Link>
          <Link href="/fabrica" className="hover:text-[#241A14] transition">
            La Fábrica
          </Link>
          <Link href="/sustentabilidad" className="hover:text-[#241A14] transition">
            Sustentabilidad
          </Link>
          <Link href="/contacto" className="hover:text-[#241A14] transition">
            Contacto
          </Link>
        </div>

      </nav>
    </header>
  );
}
