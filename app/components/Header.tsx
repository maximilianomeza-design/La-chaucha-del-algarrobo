"use client";

import Link from "next/link";
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
        {/* Marca */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/assets/logo-la-chaucha.webp"
            alt="Origen Algarrobo by La Chaucha"
            className="h-9 w-auto"
          />
          <div className="leading-tight hidden sm:block">
            <span className="block font-serif text-[#241A14] text-base">
              Origen Algarrobo
            </span>
            <span className="block text-[11px] tracking-[0.22em] uppercase text-[#6A564A]">
              by La Chaucha
            </span>
          </div>
        </Link>

        {/* Navegación */}
        <div className="flex gap-6 text-sm text-[#241A14]/90">
          <Link
            href="/"
            className="hover:text-[#241A14] transition"
          >
            Inicio
          </Link>
          <Link
            href="/catalogo"
            className="hover:text-[#241A14] transition"
          >
            Catálogo
          </Link>
          <Link
            href="/fabrica"
            className="hover:text-[#241A14] transition"
          >
            La Fábrica
          </Link>
          <Link
            href="/sustentabilidad"
            className="hover:text-[#241A14] transition"
          >
            Sustentabilidad
          </Link>
          <Link
            href="/contacto"
            className="hover:text-[#241A14] transition"
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}
