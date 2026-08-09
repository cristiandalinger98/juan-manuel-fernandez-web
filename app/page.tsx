import WhatsAppButton from "./components/WhatsAppButton";
import Team from "./components/Team";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import ServiceCard from "./components/ServiceCard";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Juan Manuel Fernández",
            jobTitle: "Abogado",
            description:
              "Abogado matriculado en Santa Fe y Entre Ríos.",
            url: "https://juanmanuelfernandez.vercel.app",
          }),
        }}
      />

      <main>
      {/* HERO */}
      <section className="min-h-[calc(100vh-6rem)] bg-slate-950 text-white flex items-center px-6 py-16">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>

           <p className="text-sm uppercase tracking-[0.3em] text-yellow-500 font-semibold">
  Abogado en Santa Fe y Entre Ríos
</p>

            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Dr. Juan Manuel
              <br />
              Fernández
            </h1>

            <div className="mt-5 flex items-center gap-4">

              <span className="h-px w-12 bg-yellow-500"></span>

            <p className="text-xl text-gray-300">
  Abogado matriculado
</p>

            </div>

        <p className="mt-7 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
  Asesoramiento y representación legal en Santa Fe y Entre Ríos,
  con atención personalizada en San Carlos Centro y otras
  localidades de la región.
</p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="https://wa.me/5493404619288?text=Hola%20Dr.%20Juan%20Manuel%20Fernandez.%20Quisiera%20realizar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-slate-950 px-7 py-3.5 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Solicitar consulta
              </a>

              <a
                href="#servicios"
                className="border border-white/30 px-7 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-slate-950 transition"
              >
                Conocé nuestros servicios
              </a>

            </div>

          </div>


          {/* LOGO */}
          <div className="flex justify-center md:justify-end">

            <div className="relative">

              <div className="absolute -inset-6 border border-yellow-500/20 rounded-full"></div>

              <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center">

                <img
                  src="/logo.jpeg"
                  alt="Logo del estudio jurídico"
                  className="w-full h-full object-contain mix-blend-screen"
                />

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* EQUIPO */}
      <Team />


      {/* LOCALIDADES */}
      <Locations />


      {/* ÁREAS DE PRÁCTICA */}
      <section id="servicios" className="py-20 px-6 bg-white">

        <div className="max-w-5xl mx-auto">

          <p className="text-sm uppercase tracking-[0.25em] text-yellow-600 font-semibold">
            Nuestros servicios
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold mb-12 text-slate-950">
            Áreas de práctica
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <ServiceCard
              title="Derecho de Familias"
              icon="⚖"
              description="Alimentos; cuidado personal; régimen de comunicación; divorcios; convenios familiares; filiación y reconocimiento de hijos; violencia familiar y medidas de protección; autorizaciones y cuestiones relacionadas con hijos menores."
            />

            <ServiceCard
              title="Seguridad Social y Salud"
              icon="✚"
              description="Reclamos ante obras sociales; amparos de salud; prestaciones médicas; jubilaciones y pensiones; reconocimiento de servicios y aportes; problemas con ANSES; reajustes y diferencias en haberes; reclamos por beneficios denegados; pensiones por fallecimiento y asesoramiento previsional antes de iniciar el trámite."
            />

            <ServiceCard
              title="Contratos y Negociaciones"
              icon="§"
              description="Redacción y revisión de contratos; compraventa de bienes; alquileres; locaciones y arrendamientos agrarios; acuerdos entre particulares; incumplimientos contractuales; reclamos por obligaciones no cumplidas; asesoramiento y negociación antes de firmar un contrato."
            />

            <ServiceCard
              title="Herencias y Sucesiones"
              icon="⚜"
              description="Inicio y tramitación de sucesiones; declaratoria de herederos; herencias y división de bienes; inmuebles, vehículos y otros bienes; acuerdos entre herederos; inscripción de bienes heredados; conflictos entre herederos; sucesiones testamentarias e intestadas."
            />

            <ServiceCard
              title="Reclamos Laborales"
              icon="⚒"
              description="Trabajo no registrado o parcialmente registrado; diferencias salariales; falta de pago de salarios; despidos con o sin causa; indemnizaciones; reclamos laborales, acuerdos y conciliaciones; accidentes y enfermedades laborales."
            />

            <ServiceCard
              title="Deudas e Insolvencia"
              icon="$"
              description="Reclamos de acreedores; deudas bancarias y financieras; problemas con tarjetas de crédito; intimaciones y reclamos de pago; negociación y acuerdos de deuda; situaciones de insolvencia; concursos y quiebras."
            />

            <ServiceCard
              title="Responsabilidad Civil y Extracontractual"
              icon="⚠"
              description="Accidentes de tránsito; daños materiales y personales; lesiones por accidentes; reclamos por daños y perjuicios; responsabilidad por accidentes en espacios públicos o privados; daños ocasionados por terceros; reclamos a compañías de seguro; indemnizaciones."
            />

            <ServiceCard
              title="Defensa del Consumidor"
              icon="✓"
              description="Reclamos por productos o servicios defectuosos; incumplimiento de empresas; problemas con bancos y tarjetas; cobros indebidos; débitos no autorizados; reclamos y acuerdos con empresas."
            />

            <ServiceCard
              title="Derecho Administrativo"
              icon="§"
              description="Reclamos ante organismos públicos; recursos administrativos; impugnación de resoluciones; reclamos por prestaciones y beneficios; trámites por demoras o falta de respuestas de la administración; amparos frente a vulneraciones de derechos; defensa frente a decisiones administrativas."
            />

          </div>

        </div>

      </section>


      {/* CONTACTO */}
      <Contact />


  {/* WHATSAPP */}
  <WhatsAppButton />

      </main>
    </>
  );
}