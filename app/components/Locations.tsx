export default function Locations() {
  const santaFe = [
    "San Carlos Centro",
    "Gessler",
    "López",
    "Santa Fe",
    "Rafaela",
    "Sunchales",
    "Rosario",
  ];

  const entreRios = [
    "Paraná",
    "Oro Verde",
    "Diamante",
    "Nogoyá",
  ];

  const federal = [
    "Buenos Aires",
    "Tucumán",
    "Río Negro",
    "Córdoba",
    "San Luis",
    "Entre otros",
  ];

  return (
    <section id="localidades" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm uppercase tracking-[0.25em] text-yellow-500 font-semibold">
            Ámbito de atención
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Acompañamos tu caso
            <br />
            <span className="italic font-serif font-normal">
              estés donde estés
            </span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Brindamos asesoramiento y representación jurídica en distintas
            localidades de las provincias de Santa Fe y Entre Ríos.
          </p>

        </div>


        {/* SANTA FE Y ENTRE RÍOS */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">

          {/* SANTA FE */}
          <div className="border border-white/10 rounded-2xl p-8 bg-white/5">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-full border border-yellow-500/40 flex items-center justify-center text-yellow-500 font-bold">
                SF
              </div>

              <div>

                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Provincia de
                </p>

                <h3 className="text-2xl font-bold">
                  Santa Fe
                </h3>

              </div>

            </div>


            <div className="flex flex-wrap gap-3">

              {santaFe.map((localidad, index) => (
                <span
                  key={localidad}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    index === 0
                      ? "border-yellow-500 text-yellow-400 bg-yellow-500/10 font-semibold"
                      : "border-white/10 text-gray-300 hover:border-yellow-500/50 hover:text-yellow-400"
                  }`}
                >
                  {localidad}

                  {index === 0 && (
                    <span className="ml-2 text-xs text-yellow-500">
                      Casa central
                    </span>
                  )}
                </span>
              ))}

            </div>

          </div>


          {/* ENTRE RÍOS */}
          <div className="border border-white/10 rounded-2xl p-8 bg-white/5">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-full border border-yellow-500/40 flex items-center justify-center text-yellow-500 font-bold">
                ER
              </div>

              <div>

                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Provincia de
                </p>

                <h3 className="text-2xl font-bold">
                  Entre Ríos
                </h3>

              </div>

            </div>


            <div className="flex flex-wrap gap-3">

              {entreRios.map((localidad) => (
                <span
                  key={localidad}
                  className="px-4 py-2 rounded-full border border-white/10 text-gray-300 text-sm transition hover:border-yellow-500/50 hover:text-yellow-400"
                >
                  {localidad}
                </span>
              ))}

            </div>

          </div>

        </div>


        {/* ÁMBITO FEDERAL Y NACIONAL */}
        <div className="mt-14 border-t border-white/10 pt-12 text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-yellow-500 font-semibold">
            Ámbito federal y nacional
          </p>

          <h3 className="mt-4 text-2xl md:text-3xl font-bold">
            Actuación en todo el territorio nacional
          </h3>

          <p className="mt-5 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            También brindamos asesoramiento y representación en el ámbito
            federal y nacional, con presencia y actuación en distintas
            provincias del país.
          </p>


          <div className="mt-7 flex flex-wrap justify-center gap-3">

            {federal.map((provincia) => (
              <span
                key={provincia}
                className="px-5 py-2.5 rounded-full border border-white/10 text-gray-300 text-sm transition hover:border-yellow-500/50 hover:text-yellow-400"
              >
                {provincia}
              </span>
            ))}

          </div>

        </div>


        {/* CIERRE */}
        <div className="mt-12 text-center">

          <p className="text-gray-400">
            Atención presencial y asesoramiento a distancia.
          </p>

        </div>

      </div>
    </section>
  );
}