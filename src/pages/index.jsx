'use client'

import SectionHeader from '@/components/home/SectionHeaderFortaleza';
import SectionNuestrosServicios from '@/components/home/SectionNuestrosServiciosFortaleza';
import SectionOfrecemos from '@/components/home/SectionOfrecemosFortaleza';
import SectionElegirnos from '@/components/home/SectionElegirnosFortaleza';
import SectionLicenciaDeConducir from '@/components/home/SectionLicenciaConducirFortaleza';
import SectionGraduados from '@/components/home/SectionGraduadosFortaleza';
import SectionTestimonial from '@/components/home/SectionTestimonialFortaleza';
// import SectionRedes from '@/components/home/SectionRedesFortaleza';
// import SectionContact from '@/components/home/SectionContactFortaleza';
// import SectionPreguntasFrecuentes from '@/components/home/SectionFAQFortaleza';
// import Demo from '@/components/animations/Demo.jsx';
// import SectionTrabajaConNosotros from '@/components/home/SectionTrabajaConNosotrosFortaleza';
import ScrollProgress from "@/components/common/ScrollProgress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <section id="inicio" className="overflow-hidden bg-(--color-section-3) touch-action: manipulation">
        <SectionHeader />
      </section>

      <section id="nuestros-servicios" className="bg-(--color-section-2) touch-action: manipulation">
        <SectionNuestrosServicios />
      </section>

      <section id="que-ofrecemos " className="overflow-hidden bg-(--color-section-3)">
        <SectionOfrecemos />
      </section>

      <section id="elegirnos" className="bg-(--color-section-3)">
        <SectionElegirnos />
      </section>

      <section id="licencia-de-conducir" className="overflow-hidden bg-(--color-section-3) touch-action: manipulation">
        <SectionLicenciaDeConducir />
      </section >

      <section id="graduados" className="overflow-hidden bg-(--color-section-3)">
        <SectionGraduados />
      </section>

      <section id="testimonio" className="overflow-hidden bg-(--color-section-2)">
        <SectionTestimonial />
      </section>

      <section id="redes-sociales" className="min-h-screen bg-(--color-section-1)">
        {/* <SectionRedes /> */}
      </section>

      <section id="preguntas-frecuentes" className="overflow-hidden min-h-screen bg-(--color-section-3)">
        {/* <SectionPreguntasFrecuentes /> */}
      </section>

      <section id="contacto" className="min-h-screen bg-(--color-section-2)">
        {/* <SectionContact /> */}
      </section>

      <section id="trabaja-con-nosotros" className="min-h-screen bg-(--color-section-1)">
        {/* <SectionTrabajaConNosotros /> */}
      </section>
    </>
  );
}


