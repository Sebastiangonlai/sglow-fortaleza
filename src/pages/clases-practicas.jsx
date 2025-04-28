import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import ImageComponent from '@/components/ImageComponent';


const itemClases = [{
  id: 1,
  title: "Rutas simuladas: ",
  description: "Práctica en recorridos que imitan los trayectos del examen oficial.",
}, {
  id: 2,
  title: "Condiciones reales de tránsito: ",
  description: "Conduce en situaciones reales para ganar confianza en entornos urbanos.",
}, {
  id: 3,
  title: "Supervisión continua: ",
  description: "Instructores calificados te guiarán y corregirán en cada maniobra.",
}, {
  id: 4,
  title: "Preparación para maniobras: ",
  description: "Ejercicios específicos para dominar estacionamiento, giros y control del vehículo.",
},
]

export default function ClasesPracticas() {
  return (
    <>
      {/* <PageSEO title="Clases Prácticas - Academia Fortaleza" description="Mejora tu técnica de conducción con nuestras clases prácticas, impartidas por instructores certificados." /> */}

      <Breadcrumb
        title="Clases Práticas"
        subtitle="Practica en condiciones similares al examen real."
        nameUri="Clases Prácticas" />

      <section className="bg-[#111928]" >
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Clases de Manejo</h2>
            <p className="mt-1 text-neutral-400">Se dictan en tránsito real a cargo de instructores profesionales y vehículos autoescuela habilitados.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <ImageComponent iSrc="/static/images/card/servicio_9.webp" iClassName="w-full object-cover rounded-xl"
                iWidth={390} iHeight={390} iAlt="Image" />
            </div>

            <div>
              {itemClases.map((item) => (
                <div key={item.id} className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        {item.id}
                      </span>
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8 sm:pb-10">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">{item.title}</span>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href={import.meta.env.VITE_API_WHATSAPP} aria-label="Whatsapp" target="_blank" rel="noopener noreferrer">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                Más información
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white dark:bg-[#1F2A37]">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <ImageComponent iClassName="h-[24rem] w-[28rem] sm:w-[28rem] sm:h-[28rem] object-cover rounded-full lg:rounded-full sm:rounded-full p-4" iSrc="/static/images/vehiculo/flota-fortaleza4.webp" iWidth={390} iHeight={290} iAlt="Image" />
          </div>

          <div className=" flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <ul className="list-disc pt-4 leading-normal">
              <li>Nuestros cursos prácticos comienzan en el punto de encuentro. Los alumnos enfrentan la realidad del manejo desde el inicio.
              </li>
            </ul>

            <ul className="list-disc pt-4 leading-normal">
              <li>Cada clase incluye un recorrido en el tránsito, donde los alumnos salen con su instructor y el auto asignado, regresando tras completar la clase, cuya duración varía según el nivel del curso.
              </li>
            </ul>

            <ul className="list-disc pt-4 leading-normal">
              <li>Nuestros paquetes están diseñados para adaptarse a las necesidades y experiencias de cada alumno.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
