import FaqAccordion from "@/components/section/SectionFAQ"
import TitleHeader from "@/components/TitleHeader"

const SectionPreguntas = () => {
  return (
    <div className="container mx-auto py-10">
      <TitleHeader
        title="Preguntas Frecuentes"
        subtitle="Encuentra respuestas a las preguntas más comunes sobre nuestros cursos y servicios."
        uri="preguntas-frecuentes" />
      <FaqAccordion />
    </div>
  )
}

export default SectionPreguntas
