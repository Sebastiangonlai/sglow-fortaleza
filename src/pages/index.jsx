'use client'

import ScrollProgress from "@/components/common/ScrollProgress"
import SectionHeader from '@/components/home/SectionHeader';
import SectionNuestrosServicios from '@/components/home/SectionNuestrosServicios';
import SectionOfrecemos from '@/components/home/SectionOfrecemos';
import SectionElegirnos from '@/components/home/SectionElegirnos';
import SectionLicenciaDeConducir from '@/components/home/SectionLicenciaConducir';
import SectionGraduados from '@/components/home/SectionGraduados';
import SectionTestimonial from '@/components/home/SectionTestimonial';
import SectionRedes from '@/components/home/SectionRedes';
import SectionPreguntasFrecuentes from '@/components/home/SectionPreguntas';
import SectionContact from '@/components/home/SectionContact';


export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SectionHeader /> 
      <SectionNuestrosServicios />
      <SectionOfrecemos />
      <SectionElegirnos />
      <SectionLicenciaDeConducir />
      <SectionGraduados />
      <SectionTestimonial />
      <SectionRedes />
      <SectionPreguntasFrecuentes />
      <SectionContact />
    </>
  );
}