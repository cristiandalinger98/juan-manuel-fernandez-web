"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const telefono = "5493404619288"; // Reemplazá por tu número
  const mensaje = "Hola Dr. Juan Manuel Fernandez. Quisiera realizar una consulta.";

  return (
    <a
      href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}