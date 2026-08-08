"use client";

import { useState } from "react";

type ServiceCardProps = {
  title: string;
  icon?: string;
  description: string;
  details?: string[];
};
export default function ServiceCard({
  title,
  icon,
  description,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="min-h-64 cursor-pointer rounded-2xl bg-slate-800 p-8 text-center shadow-xl transition-all duration-500 hover:shadow-2xl"
    >
      <div className="flex min-h-48 flex-col items-center justify-center">
        <h3 className="text-2xl font-bold text-yellow-400">
          {title}
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded
              ? "mt-5 max-h-40 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-slate-300">
            {description}
          </p>
        </div>

        <span className="mt-6 text-sm text-yellow-400">
          {expanded ? "− Ocultar" : "+ Ver más"}
        </span>
      </div>
    </div>
  );
}