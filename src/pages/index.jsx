{/*********  by δεϐąstián *********/ }
import { useState, useEffect } from 'react';
import SectionHeader from '@/components/home/SectionHeaderFortaleza';
import SectionNuestrosServicios from '@/components/home/SectionNuestrosServiciosFortaleza';
import SectionOfrecemos from '@/components/home/SectionOfrecemosFortaleza';
import SectionElegirnos from '@/components/home/SectionElegirnosFortaleza';
import SectionLicenciaDeConducir from '@/components/home/SectionLicenciaConducirFortaleza';
import SectionGraduados from '@/components/home/SectionGraduadosFortaleza';
import SectionTestimonial from '@/components/home/SectionTestimonialFortaleza';
import SectionRedes from '@/components/home/SectionRedesFortaleza';
// import SectionTrabajaConNosotros from '@/components/home/SectionTrabajaConNosotrosFortaleza';
import SectionPreguntasFrecuentes from '@/components/home/SectionFAQFortaleza';
import SectionContact from '@/components/home/SectionContactFortaleza';

import '@/css/style-animated.min.css'
import "animate.css";


export default function Home() {
  const handleResize = () => setWindowWidth(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
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
        < SectionLicenciaDeConducir />
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


