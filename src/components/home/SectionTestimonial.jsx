'use client'

import { InfiniteMovingCards } from "@/lib/infinite-moving-cards";
import { quotes } from "@/data/quotesData";
import TitleHeader from "@/components/TitleHeader";
import ButtonTailwind from "../ui/ButtonTailwind";


const SectionTestimonial = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap mx-auto justify-center" >

        <TitleHeader
          title="Testimonios de Alumnos"
          subtitle="Opiniones de nuestros alumnos sobre su experiencia."
          uri={import.meta.env.VITE_GOOGLE_REVIEW} />

        <div className="swiper testimonial-carousel common-carousel p-5">
          <InfiniteMovingCards items={quotes} direction="right" speed="slow">
          </InfiniteMovingCards>
        </div>
        <ButtonTailwind name="Comparte tu experiencia" color="bg-(--color-section-2)" uri={import.meta.env.VITE_GOOGLE_REVIEW} />
      </div>
    </div>
  );
};

export default SectionTestimonial;