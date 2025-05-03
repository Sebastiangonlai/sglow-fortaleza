'use client'

import { InfiniteMovingCards } from "@/lib/infinite-moving-cards";
import { quotes } from "@/data/quotesData";
import ButtonSection from "@/components/ButtonSection";
import TitleHeader from "@/components/TitleHeader";


const SectionTestimonialFortaleza = () => {
  return (
    <div className="h-full w-full">
      <div className="py-6 flex flex-wrap mx-auto justify-center" >

        <TitleHeader
          title="Testimonios de Alumnos"
          subtitle="Opiniones de nuestros alumnos sobre su experiencia."
          uri={import.meta.env.VITE_GOOGLE_REVIEW} />

        <div className="swiper testimonial-carousel common-carousel p-5">
          <InfiniteMovingCards items={quotes} direction="right" speed="slow">
          </InfiniteMovingCards>
        </div>
      </div>

      <ButtonSection
        namebtn="Comparte tu experiencia"
        uri={import.meta.env.VITE_GOOGLE_REVIEW} />
    </div>
  );
};

export default SectionTestimonialFortaleza;