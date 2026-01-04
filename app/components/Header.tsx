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
        scrolled ? "bg-[#F8F6F2]/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/logo-la-chaucha.webp"
            alt="La Chaucha del Algarrobo"
            className="h-10 w-auto"
          />
          <span className="font-serif text-[#3E2C22] text-lg hidden sm:inline">
            La Chaucha del Algarrobo
          </span>
        </Link>

        <div className="flex gap-6 text-[#3E2C22] font-medium">
          <Link href="/">Inicio</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/fabrica">La Fábrica</Link>
          <Link href="/sustentabilidad">Sustentabilidad</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}
