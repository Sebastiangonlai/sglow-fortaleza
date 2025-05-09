"use client";
import FaqAccordion from "@/components/section/SectionFAQ"
import LayoutSection from "@/components/LayoutSection"
import TitleHeader from "@/components/ui/TitleHeader";


const SectionPreguntas = () => {
  return (
    <LayoutSection id="preguntas-frecuentes" className="mx-auto overflow-hidden" color="bg-(--color-section-1)" >
      <TitleHeader
        title="Preguntas Frecuentes"
        subtitle="Encuentra respuestas a las preguntas más comunes sobre nuestros cursos y servicios."
        uri="preguntas-frecuentes" />
      <FaqAccordion />
    </LayoutSection>
  )
}

export default SectionPreguntas
