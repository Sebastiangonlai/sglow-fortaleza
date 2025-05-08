"use client"

import SectionPricing from '@/components/section/SectionPricing'
import Breadcrumb from '@/components/ui/Breadcrumb'
import LayoutSection from '@/components/LayoutSection'
import ImageComponent from '@/components/ImageComponent'

const itemClases = [
  {
    id: 1,
    title: "Rutas simuladas: ",
    description: "Práctica en recorridos que imitan los trayectos del examen oficial.",
  },
  {
    id: 2,
    title: "Condiciones reales de tránsito: ",
    description: "Conduce en situaciones reales para ganar confianza en entornos urbanos.",
  },
  {
    id: 3,
    title: "Supervisión continua: ",
    description: "Instructores calificados te guiarán y corregirán en cada maniobra.",
  },
  {
    id: 4,
    title: "Preparación para maniobras: ",
    description: "Ejercicios específicos para dominar estacionamiento, giros y control del vehículo.",
  },
]

export default function CursosPersonalizados() {
  return (
    <>
      <Breadcrumb
        title="Nuestros Cursos"
        subtitle="Cursos personalizados y adaptados a las distintas necesidades."
        nameUri="Cursos" />

      <LayoutSection size="auto">
        <div className="bg-[--color-section-3] pt-6 px-4 max-w-7xl mx-auto">
          <h1 className="mb-1 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[35px] md:leading-[1]">
            Cursos a tu medida
          </h1>
          <p className="text-base text-[#637381] dark:text-[#9CA3AF] max-w-[650px]">
            Cursos personalizados y adaptados a las distintas necesidades.
          </p>
        </div>
        <SectionPricing />
      </LayoutSection>

      <section className="bg-[#111928] py-10 lg:py-20">
        <div className="max-w-5xl px-4 xl:px-0 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-bold text-2xl md:text-4xl md:leading-tight">Clases de Manejo</h2>
            <p className="mt-1 text-neutral-400">
              Se dictan en tránsito real a cargo de instructores profesionales y vehículos autoescuela habilitados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ImageComponent iSrc="/static/images/card/servicio_9.webp" iClassName="w-full object-cover rounded-xl" iWidth={390} iHeight={390} iAlt="Clase práctica" />

            <div>
              {itemClases.map(({ id, title, description }) => (
                <div key={id} className="flex gap-x-5 ms-1">
                  <div className="relative after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="size-8 flex justify-center items-center border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      {id}
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8 sm:pb-10">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">{title}</span>
                      {description}
                    </p>
                  </div>
                </div>
              ))}

              <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full"
                href={import.meta.env.VITE_API_WHATSAPP} target="_blank" rel="noopener noreferrer"              >
                <svg className="shrink-0 size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.11 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Más información
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#1F2A37]">
        <div className="container mx-auto flex flex-col xl:flex-row items-center px-8 max-w-[80%] py-4">
          <ImageComponent iClassName="max-h-[22rem] max-w-[24rem] aspect-[4/4] p-4 justify-center items-center mx-auto px-4
           rounded-full p-4" iSrc="/static/images/vehiculo/flota-fortaleza4.webp" iWidth={290} iHeight={290} iAlt="Flota Fortaleza" />
          <div className="mt-6 xl:mt-0 xl:ml-10 ">
            <ul className="list-disc space-y-4 text-gray-800 dark:text-gray-200 leading-tight">
              <li>
                Nuestros cursos prácticos comienzan en el punto de encuentro. Los alumnos enfrentan la realidad del manejo desde el inicio.
              </li>
              <li>
                Cada clase incluye un recorrido en el tránsito, donde los alumnos salen con su instructor y el auto asignado, regresando tras completar la clase, cuya duración varía según el nivel del curso.
              </li>
              <li>
                Nuestros paquetes están diseñados para adaptarse a las necesidades y experiencias de cada alumno.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
