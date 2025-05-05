'use client'

import ContactBlock from "@/components/section/SectionContactBlock";
import TitleHeader from "../TitleHeader";


const SectionContact = () => {
  return (
    <>
      <section className="w-screen relative z-10 overflow-hidden pb-8 pt-0 dark:bg-[#1f2a37] bg-[#F9FAFB] lg:pb-[50px] lg:pt-[0px] delay-500">

        <div className="relative dark:bg-[#1F2A37] z-10 bg-[#F9FAFB] text-gray-900 dark:text-gray-500 pt-[20px] lg:pt-[40px] pb-[60px] lg:pb-[60px] select-none">
          <img src="/static/images/svg/shape-06.svg" alt="Shape" className="absolute top-[5%] opacity-15" />
          <img src="/static/images/svg/shape-09.svg" alt="Shape" className="absolute bottom-[10%] right-[5%] opacity-15" />
          <img src="/static/images/svg/shape-13.svg" alt="Shape" className="absolute top-[0px] right-[0px] opacity-15" />
        </div>

        <TitleHeader
          title="Contacto"
          subtitle="Si necesitas información adicional, no dudes en escribirnos o llamarnos."
          uri="contacto" />

        <img src="/static/images/svg/shape-07.svg" alt="Shape" className="absolute bottom-[0px] right-[5%] ee opacity-15" />
        <img src="/static/images/svg/shape-12.svg" alt="Shape" className="absolute bottom-[0px] left-0 opacity-15" />
        <ContactBlock />
      </section>
    </>
  );
};

export default SectionContact;