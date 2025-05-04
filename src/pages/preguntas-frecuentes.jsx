"use client";
import Breadcrumb from '@/components/Breadcrumb';
import SectionFAQ from '@/components/section/SectionFAQ';


export default function PreguntasFrecuentes() {
  return (
    <>
      {/* <PageSEO title="Preguntas Frecuentes - Academia Fortaleza" description="Encuentra respuestas a las preguntas más frecuentes sobre nuestros cursos y servicios." /> */}

      <Breadcrumb
        title="Preguntas Frecuentes"
        subtitle="Encuentra respuestas a las preguntas más frecuentes sobre nuestros cursos y servicios."
        nameUri="FAQ"
        href="preguntas-frecuentes" />

      <div className="container">
        <div className="lg:mt-[30px] mt-10">
          <div className="-mx-2 flex flex-wrap items-center">
            <div className="w-full px-2 lg:w-6/12">
              <div className="flex items-center -mx-0 sm:-mx-4 pb-8 lg:pb-0">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-1 sm:py-4">
                    <img src="/static/images/card/servicio_22.webp" alt="FAQ" className="w-full rounded-2xl" width={540} height={540} />
                  </div>
                  <div className="pt-1 sm:py-4">
                    <img src="/static/images/card/servicio_20.webp" alt="FAQ" className="w-full rounded-2xl" width={540} height={540} />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <img src="/static/images/web/mano-semaforo.webp" alt="FAQ" className="w-full rounded-2xl" width={540} height={540} />
                  <div className="flex z-10 -right-5 bottom-5 sm:my-4 lg:my-0 lg:-right-40 lg:-bottom-2 ">
                    <span className="absolute z-[-1]">
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-2 max-w-[540px] lg:mb-0">
                <SectionFAQ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
