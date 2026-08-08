export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* INFORMACIÓN */}
          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-yellow-600 font-semibold">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-950">
              Hablemos sobre
              <br />
              <span className="italic font-serif font-normal">
                tu caso
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Cada situación jurídica es diferente. Estamos para escucharte,
              analizar tu caso y brindarte el asesoramiento necesario para
              encontrar el camino más adecuado.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-full bg-slate-950 text-yellow-500 flex items-center justify-center font-bold">
                  📍
                </div>

                <div>
                  <p className="font-semibold text-slate-950">
                    Casa central
                  </p>

                  <p className="text-gray-600">
                    San Carlos Centro, Santa Fe
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-full bg-slate-950 text-yellow-500 flex items-center justify-center font-bold">
                  ✓
                </div>

                <div>
                  <p className="font-semibold text-slate-950">
                    Modalidad de atención
                  </p>

                  <p className="text-gray-600">
                    Atención presencial y a distancia
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* LLAMADO A LA ACCIÓN */}
          <div className="bg-slate-950 rounded-2xl p-8 md:p-10 text-white shadow-xl">

            <p className="text-yellow-500 text-sm uppercase tracking-[0.25em] font-semibold">
              Solicitar consulta
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              ¿Necesitás asesoramiento?
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Comunicate con nosotros para contarnos brevemente tu situación
              y coordinar una consulta.
            </p>

            <a
  href="https://wa.me/5493404619288?text=Hola%20Dr.%20Juan%20Manuel%20Fernandez.%20Quisiera%20realizar%20una%20consulta."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center justify-center bg-yellow-500 text-slate-950 px-7 py-3.5 rounded-lg font-semibold hover:bg-yellow-400 transition"
>
  Contactarnos por WhatsApp
</a>

            <p className="mt-5 text-sm text-gray-500">
              Respondemos consultas y coordinamos entrevistas.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}