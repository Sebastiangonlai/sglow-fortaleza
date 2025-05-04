'use client'
import TitleHeader from "@/components/TitleHeader";
import SectionFAQ from '@/components/section/SectionFAQ';
import ImageComponent from '../../components/ImageComponent';
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";


const SectionFaqFortaleza = () => {
  return (
    <>
      <section className="dark:bg-[#111928] bg-[#F9FAFB] text-gray-900 dark:text-gray-500 md:space-y-2 pt-[60px] lg:pt-[60px] pb-[30px] lg:pb-[40px] select-none ">

        <div className="container">
          <TitleHeader
            title="Preguntas Frecuentes"
            subtitle="Encuentra respuestas a las preguntas más comunes sobre nuestros cursos y servicios."
            uri="preguntas-frecuentes" />

          <div className="lg:-mt-[25px]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-2 lg:w-6/12">
                <ScrollAnimation
                  description={
                    <div className="flex justify-center -mx-0 sm:-mx-4 pb-2 lg:pb-0">
                      <div className="w-full px-3 sm:px-5 xl:w-1/2">
                        <div className="pt-1 sm:py-1">
                          <ImageComponent iSrc="/static/images/card/servicio_22.webp" iAlt="FAQ" iWidth={350} iHeight={350} iClassName="w-full rounded-2xl" />
                        </div>
                        <div className="pt-4 sm:py-1">
                          <ImageComponent iSrc="/static/images/card/servicio_20.webp" iAlt="FAQ" iWidth={350} iHeight={350} iClassName="w-full rounded-2xl" />
                        </div>
                      </div>
                      <div className="w-full px-6 sm:px-6 xl:w-1/2">
                        <div className="relative z-10">
                          <ImageComponent iSrc="/static/images/web/mano-semaforo.webp" iAlt="FAQ" iWidth={350} iHeight={350} iClassName="w-full rounded-2xl" />

                        </div>
                      </div>
                    </div>
                    //   }
                    //   duration={1} delay={0.5}
                    //   effect={{ initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } }}
                    //   transition={{ duration: 1, delay: 0.4, ease: 'easeInOut' }}
                    // />
                  }
                  duration={1} delay={0.5}
                  // rootMargin="0px 0px -10px 0px"
                  effect={{ initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.9, delay: 0.2, ease: 'easeInOut' }} />
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-2 max-w-[540px] lg:mb-0">
                  <ScrollAnimation
                    description={
                      <SectionFAQ />
                    }
                    duration={1} delay={0.5}
                    // rootMargin="0px 0px -10px 0px"
                    effect={{ initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionFaqFortaleza