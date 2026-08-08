"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsapp =
    "https://wa.me/5493404619288?text=Hola%20Dr.%20Juan%20Manuel%20Fernandez.%20Quisiera%20realizar%20una%20consulta.";

  return (
    <nav className="bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <a href="#" className="leading-tight">
          <div className="text-xl font-bold tracking-tight">
            DOCTORANDO
          </div>

          <div className="text-sm text-yellow-500 italic tracking-wide">
            Familia(s)
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">

          <a href="#" className="hover:text-yellow-400 transition">
            Inicio
          </a>

          <a href="#equipo" className="hover:text-yellow-400 transition">
            Miembros del estudio
          </a>

          <a href="#servicios" className="hover:text-yellow-400 transition">
            Servicios
          </a>

          <a href="#localidades" className="hover:text-yellow-400 transition">
            Ámbito de atención
          </a>

          <a href="#contacto" className="hover:text-yellow-400 transition">
            Contacto
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-slate-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Solicitar consulta
          </a>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6">

          <div className="flex flex-col gap-1 pt-4">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-yellow-400 transition"
            >
              Inicio
            </a>

            <a
              href="#equipo"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-yellow-400 transition"
            >
              Miembros del estudio
            </a>

            <a
              href="#servicios"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-yellow-400 transition"
            >
              Servicios
            </a>

            <a
              href="#localidades"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-yellow-400 transition"
            >
              Ámbito de atención
            </a>

            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-yellow-400 transition"
            >
              Contacto
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-yellow-500 text-slate-950 px-5 py-3 rounded-lg font-semibold text-center hover:bg-yellow-400 transition"
            >
              Solicitar consulta
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}
