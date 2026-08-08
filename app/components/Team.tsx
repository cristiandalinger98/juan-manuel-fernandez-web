"use client";

import Image from "next/image";

export default function Team() {
  return (
<section id="equipo" className="py-20 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-gray-500 text-center">
          MIEMBROS DEL ESTUDIO
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-center text-slate-900">
          EL EQUIPO QUE VA A LLEVAR{" "}
          <span className="italic font-serif">
            tu caso
          </span>
        </h2>


        <div className="mt-14 grid md:grid-cols-2 gap-10">


          <div className="border rounded-2xl p-8 shadow-lg">

            <div className="flex justify-center">
              <Image
                src="/juan-equipo.png"
                alt="Juan Manuel Fernández"
                width={250}
                height={250}
                className="rounded-xl object-contain w-full h-96 bg-gray-100"
              />
            </div>


            <h3 className="mt-6 text-2xl font-bold text-center">
              JUAN MANUEL FERNÁNDEZ
            </h3>

            <p className="text-center text-yellow-600 font-semibold mt-2">
              Socio fundador
            </p>


            <p className="mt-6 text-gray-600 leading-relaxed">
              Abogado por la Facultad de Ciencias Jurídicas y Sociales de la
              Universidad Nacional del Litoral. Se encuentra matriculado para
              el ejercicio profesional de la abogacía en las provincias de
              Santa Fe y Entre Ríos.

              <br /><br />

              Diplomado en Gestión Legislativa por el Honorable Senado de la
              Nación con aval académico de la Universidad Nacional de Córdoba.
              Actualmente cursa la Especialización en Políticas Públicas de la
              Niñez, Adolescencia y Familia; Licienciatura en Ciencia Política;
              Tecnicatura en Gestión e Innovación Pública en la Universidad 
              Nacional de Entre Ríos.
            </p>

          </div>



          <div className="border rounded-2xl p-8 shadow-lg">

            <div className="flex justify-center">
              <Image
                src="/yamila.jpg"
                alt="Yamila Eva Martínez"
                width={250}
                height={250}
                className="rounded-xl object-contain w-full h-96 bg-gray-100"
              />
            </div>


            <h3 className="mt-6 text-2xl font-bold text-center">
              YAMILA EVA MARTÍNEZ
            </h3>

            <p className="text-center text-yellow-600 font-semibold mt-2">
              Socia
            </p>


            <p className="mt-6 text-gray-600 leading-relaxed">
              Estudiante avanzada de la carrera de Abogacía de la Facultad de
              Ciencias Jurídicas y Sociales de la Universidad Nacional del
              Litoral, donde obtuvo el título intermedio de Bachiller en
              Ciencias Jurídicas y Sociales.

              <br /><br />

              Diplomada Universitaria en Derecho y Gestión Parlamentaria,
              formación orientada al estudio del proceso legislativo, la
              técnica legislativa, las políticas públicas y el funcionamiento
              institucional del Poder Legislativo.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}