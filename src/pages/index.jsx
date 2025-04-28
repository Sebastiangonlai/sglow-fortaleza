'use client'

import SectionHeader from '@/components/home/SectionHeaderFortaleza';
import SectionOfrecemos from '@/components/home/SectionOfrecemosFortaleza';
import SectionElegirnos from '@/components/home/SectionElegirnosFortaleza';
import SectionGraduados from '@/components/home/SectionGraduadosFortaleza';
import SectionRedes from '@/components/home/SectionRedesFortaleza';
import SectionContact from '@/components/home/SectionContactFortaleza';
import SectionTestimonial from '@/components/home/SectionTestimonialFortaleza';
import SectionPreguntasFrecuentes from '@/components/home/SectionFAQFortaleza';
import SectionLicenciaDeConducir from '@/components/home/SectionLicenciaConducirFortaleza';
import SectionNuestrosServicios from '@/components/home/SectionNuestrosServiciosFortaleza';
// import SectionTrabajaConNosotros from '@/components/home/SectionTrabajaConNosotrosFortaleza';
import  ScrollProgress  from "@/components/common/ScrollProgress"

export default function Home() {
  return (
    <>
        <ScrollProgress color="bg-violet-400/60"/>
      <section id="inicio" className="overflow-hidden">
        <SectionHeader />
      </section>

      <section id="nuestros-servicios">
        <SectionNuestrosServicios />
      </section>

      <section id="que-ofrecemos" >
        <SectionOfrecemos />
      </section>

      <section id="elegirnos">
        <SectionElegirnos />
      </section>

      <section id="licencia-de-conducir" className="overflow-hidden">
        <SectionLicenciaDeConducir />
      </section >

      <section id="graduados">
        <SectionGraduados />
      </section>

      <section id="testimonio">
        <SectionTestimonial />
      </section>

      <section id="redes-sociales">
        <SectionRedes />
      </section>

      <section id="preguntas-frecuentes" className="overflow-hidden">
        <SectionPreguntasFrecuentes />
      </section>

      <section id="contacto">
        <SectionContact />
      </section>

      {/* <section id="trabaja-con-nosotros">
        <SectionTrabajaConNosotros />
      </section> */}
    </>
  );
}


