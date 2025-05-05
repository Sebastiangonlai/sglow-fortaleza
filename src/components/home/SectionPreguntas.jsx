import FaqAccordion from "@/components/section/SectionFAQ"
import TitleHeader from "@/components/TitleHeader"

const SectionPreguntas = () => {
  return (
    //  <section id="preguntas-frecuentes" className="overflow-hidden bg-(--color-section-3)">
    // </section>
    <section id="preguntas-frecuentes" className="container mx-auto py-10 overflow-hidden bg-(--color-section-3)">
      <TitleHeader
        title="Preguntas Frecuentes"
        subtitle="Encuentra respuestas a las preguntas más comunes sobre nuestros cursos y servicios."
        uri="preguntas-frecuentes" />
      <FaqAccordion />
    </section>
  )
}

export default SectionPreguntas
