'use client'

import SectionContactBlock from "@/components/section/SectionContactBlock";
import TitleHeader from "../TitleHeader";
import SectionTrabajaConNosotros from "@/components/section/SectionTrabajaConNosotros";


const SectionContact = () => {
  return (
    <>
      <section id="contacto" className="relative z-10 overflow-hidden pt-0 dark:bg-(--color-section-2) bg-[#F9FAFB] delay-500">
        <div className="pt-[20px] lg:pt-[30px] pb-[10px] lg:pb-[10px] select-none">
          <TitleHeader
            title="Contacto"
            subtitle="Si necesitas información adicional, no dudes en escribirnos o llamarnos."
            uri="contacto" />
          <img src="/static/images/svg/shape-06.svg" alt="Shape" className="absolute top-[5%] left-[0px] opacity-15" />
          <img src="/static/images/svg/shape-13.svg" alt="Shape" className="absolute top-[0px] right-[0px] opacity-15" />
          <img src="/static/images/svg/shape-07.svg" alt="Shape" className="absolute bottom-[0px] right-[5%] ee opacity-15" />
          <img src="/static/images/svg/shape-12.svg" alt="Shape" className="absolute bottom-[0px] left-0 opacity-15" />
          <SectionContactBlock />
        </div>

        <div className="min-w-screen z-1">
          <SectionTrabajaConNosotros />
        </div>
      </section>
    </>
  );
};

export default SectionContact;