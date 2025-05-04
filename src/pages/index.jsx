'use client'

import ScrollProgress from "@/components/common/ScrollProgress"
import SectionHeader from '@/components/home/SectionHeader';
import SectionNuestrosServicios from '@/components/home/SectionNuestrosServicios';
import SectionOfrecemos from '@/components/home/SectionOfrecemos';
import SectionElegirnos from '@/components/home/SectionElegirnos';
import SectionLicenciaDeConducir from '@/components/home/SectionLicenciaConducir';
import SectionGraduados from '@/components/home/SectionGraduados';

import SectionTestimonial from '@/components/home/SectionTestimonialFortaleza';
import SectionRedes from '@/components/home/SectionRedes';


// import SectionContact from '@/components/home/SectionContactFortaleza';
// import SectionPreguntasFrecuentes from '@/components/home/SectionFAQFortaleza';
// import SectionTrabajaConNosotros from '@/components/home/SectionTrabajaConNosotrosFortaleza';


export default function Home() {
  return (
    <>
      <ScrollProgress />
      <section id="inicio" className="overflow-hidden bg-(--color-section-3)">
        <SectionHeader />
      </section>

      <section id="nuestros-servicios" className="bg-(--color-section-2)">
        <SectionNuestrosServicios />
      </section>

      <section id="que-ofrecemos " className="overflow-hidden bg-(--color-section-3)">
        <SectionOfrecemos />
      </section>
    

      <section id="elegirnos" className="bg-(--color-section-3)">
        <SectionElegirnos />
      </section>

      <section id="licencia-de-conducir" className="overflow-hidden bg-(--color-section-3)">
        <SectionLicenciaDeConducir />
      </section >

      <section id="graduados" className="overflow-hidden bg-(--color-section-3)">
        <SectionGraduados />
      </section>

      <section id="testimonio" className="overflow-hidden bg-(--color-section-2)">
        <SectionTestimonial />
      </section>

      <section id="redes-sociales" className=" bg-(--color-section-1)">
        <SectionRedes />
      </section>

      <section id="preguntas-frecuentes" className="overflow-hidden bg-(--color-section-3)">
        {/* <SectionPreguntasFrecuentes /> */}
      </section>

      <section id="contacto" className=" bg-(--color-section-2)">
        {/* <SectionContact /> */}
      </section>

      <section id="trabaja-con-nosotros" className="bg-(--color-section-1)">
        {/* <SectionTrabajaConNosotros /> */}
      </section>
    </>
  );
}


