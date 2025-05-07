import FaqAccordion from "@/components/section/SectionFAQ"
import LayoutSection from "@/components/LayoutSection"
import TitleHeader from "@/components/TitleHeader"


const SectionPreguntas = () => {
  return (
    <LayoutSection id="preguntas-frecuentes" className="container mx-auto py-10 overflow-hidden">
      <TitleHeader
        title="Preguntas Frecuentes"
        subtitle="Encuentra respuestas a las preguntas más comunes sobre nuestros cursos y servicios."
        uri="preguntas-frecuentes" />
      <FaqAccordion />
    </LayoutSection>
  )
}

export default SectionPreguntas
