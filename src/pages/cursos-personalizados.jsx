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

export default function CursosPersonalizados() {
  return (
    <>
      <Breadcrumb
        title="Nuestros Cursos"
        subtitle="Cursos personalizados y adaptados a las distintas necesidades."
        nameUri="Cursos" />

      <LayoutSection size="auto" className="py-10 lg:py-20">
        <div className="max-w-7xl px-1 xl:px-0 mx-auto">
          <h2 className="text-white font-bold text-2xl md:text-4xl leading-tight px-2">Cursos a tu medida</h2>
          <SectionPricing />
        </div>
      </LayoutSection>

      <LayoutSection size="auto" color="bg-(--color-section-2)" className="py-10 lg:py-14">
        <div className="max-w-5xl px-4 xl:px-0 mx-auto">
          <div className="max-w-3xl mb-6 lg:mb-10">
            <h2 className="text-white font-bold text-2xl md:text-4xl md:leading-tight">Clases de Manejo</h2>
            <p className="mt-1 text-neutral-400 leading-tight">
              Se dictan en tránsito real a cargo de instructores profesionales y vehículos autoescuela habilitados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ImageComponent iSrc="/static/images/card/servicio_9.webp" iClassName="w-full object-cover rounded-xl" iWidth={390} iHeight={390} iAlt="Clase práctica" />

            <div>
              {itemClases.map(({ id, title, description }) => (
                <div key={id} className="flex gap-x-5 ms-1">
                  <div className="relative after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-600">
                    <div className="size-8 flex justify-center items-center border border-neutral-600 text-[#ff0] font-semibold text-xs uppercase rounded-full">
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

              <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href={import.meta.env.VITE_API_WHATSAPP}>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                Más información
              </a>
            </div>
          </div>
        </div>
      </LayoutSection>

      <LayoutSection size="auto" color="bg-(--color-section-3)">
        <div className="container mx-auto flex flex-col xl:flex-row items-center px-6 lg:max-w-[80%] py-4 pt-8 pb-8">
          {/* <ImageComponent iClassName="max-h-[22rem] max-w-[24rem] aspect-[4/4] p-4 justify-center items-center mx-auto px-4 */}
          {/* rounded-full p-4" iSrc="/static/images/vehiculo/flota-fortaleza4.webp" iWidth={290} iHeight={290} iAlt="Flota Fortaleza" /> */}

          <div class="rounded-full mask-radial-from-10% md:mask-radial-from-60% max-h-[10rem] max-w-[10rem] sm:max-w-[10rem] sm:max-h-[10rem] lg:max-w-[20rem] lg:max-h-[20rem]">
            <img class="mask-radial-from-10% md:mask-radial-from-10% shadow-xl shadow-gray-700" src="/static/images/vehiculo/flota-fortaleza1.webp" alt="Flota Fortaleza" />
          </div>

          <div className="mt-6 xl:mt-0 xl:ml-10 px-3 sm:px-3 lg:px-20">
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
      </LayoutSection>
    </>
  )
}
