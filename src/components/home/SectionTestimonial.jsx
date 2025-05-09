'use client'

import { InfiniteMovingCards } from "@/lib/infinite-moving-cards";
import { quotes } from "@/data/quotesData";
import TitleHeader from "@/components/ui/TitleHeader";
import LayoutSection from "@/components/LayoutSection";
import ButtonTailwind from "../ui/ButtonTailwind";


const SectionTestimonial = () => {
  return (
    <LayoutSection id="testimonio" size="auto" color="bg-(--color-section-2)" className="overflow-hidden py-10 lg:py-1 lg:pb-8">
      <TitleHeader
        title="Testimonios de Alumnos"
        subtitle="Opiniones de nuestros alumnos sobre su experiencia."
        uri={import.meta.env.VITE_GOOGLE_REVIEW} />
      <div className="swiper testimonial-carousel common-carousel pt-4">
        <InfiniteMovingCards items={quotes} direction="right" speed="slow">
        </InfiniteMovingCards>
      </div>
      <ButtonTailwind name="Comparte tu experiencia" color="bg-(--color-section-2)" uri={import.meta.env.VITE_GOOGLE_REVIEW} className="mt-6" />
    </LayoutSection>
  );
};

export default SectionTestimonial;