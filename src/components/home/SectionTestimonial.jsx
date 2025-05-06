'use client'

import { InfiniteMovingCards } from "@/lib/infinite-moving-cards";
import { quotes } from "@/data/quotesData";
import TitleHeader from "@/components/TitleHeader";
import ButtonTailwind from "../ui/ButtonTailwind";


const SectionTestimonial = () => {
  return (
    <section id="testimonio" className=" overflow-hidden bg-(--color-section-2)">
      <TitleHeader
        title="Testimonios de Alumnos"
        subtitle="Opiniones de nuestros alumnos sobre su experiencia."
        uri={import.meta.env.VITE_GOOGLE_REVIEW} />
      <div className="swiper testimonial-carousel common-carousel ">
        <InfiniteMovingCards items={quotes} direction="right" speed="slow">
        </InfiniteMovingCards>
      </div>
      <ButtonTailwind name="Comparte tu experiencia" color="bg-(--color-section-2)" uri={import.meta.env.VITE_GOOGLE_REVIEW} className="my-6"/>
    </section>
  );
};

export default SectionTestimonial;