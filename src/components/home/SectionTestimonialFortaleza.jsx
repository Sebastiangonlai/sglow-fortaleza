'use client'

import { InfiniteMovingCards } from "@/lib/infinite-moving-cards";
import { quotes } from "@/data/quotesData";
import ButtonSection from "@/components/ButtonSection";
import TitleHeader from "@/components/TitleHeader";


const SectionTestimonialFortaleza = () => {
  return (
    <>
      <section className="dark:bg-[#1F2A37] text-gray-900 dark:text-gray-500 pt-[80px] pb-[20px] lg:pt-[80px] lg:pb-[10px] select-none overflow-hidden bg-[#F9FAFB] mx-auto justify-center">

        <TitleHeader
          title="Testimonios de Alumnos"
          subtitle="Opiniones de nuestros alumnos sobre su experiencia."
          uri={import.meta.env.VITE_GOOGLE_REVIEW} />

        <div className="-mx-4 lg:py-1 py-6 flex flex-wrap" >
          <div className="swiper testimonial-carousel common-carousel p-5">
            <InfiniteMovingCards items={quotes} direction="right" speed="slow">
            </InfiniteMovingCards>
          </div>
        </div>

        <ButtonSection
          namebtn="Comparte tu experiencia"
          uri={import.meta.env.VITE_GOOGLE_REVIEW} />
      </section>
    </>
  );
};

export default SectionTestimonialFortaleza;