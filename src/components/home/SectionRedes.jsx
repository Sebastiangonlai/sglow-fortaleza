'use client'

import { useState } from "react";
import TitleHeader from "@/components/ui/TitleHeader";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io5";
import ImageComponent from "@/components/ImageComponent";
import { SlideIn } from "@/components/motion/SlideIn";
import LayoutSection from "@/components/LayoutSection";
import { PiHandTap } from "react-icons/pi";

const redes = [
  {
    icon: IoLogoInstagram,
    title: "Instagram",
    description: "Síguenos en Instagram para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_INSTAGRAM,
    imgSrc: "/static/images/redes/instagram.webp",
    direction: "right",
  }, {
    icon: IoLogoFacebook,
    title: "Facebook",
    description: "Síguenos en Facebook para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_FACEBOOK,
    imgSrc: "/static/images/redes/s.webp",
    direction: "left",
  }, {
    icon: IoLogoWhatsapp,
    title: "WhatsApp",
    description: "Escribinos directo por WhatsApp para más información.",
    href: import.meta.env.VITE_API_WHATSAPP,
    imgSrc: "/static/images/redes/w.webp",
    direction: "right",
  }, {
    icon: IoLogoYoutube,
    title: "Youtube",
    description: "Síguenos en Youtube para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_YOUTUBE,
    imgSrc: "/static/images/redes/you.webp",
    direction: "left",
  }
];

const SectionRedes = () => {
  const [activeTab, setActiveTab] = useState(redes[0].title);

  const imgClassName = "flex shadow-md rounded-4xl shadow-gray-950/80 max-w-[20rem] max-h-[30rem] lg:max-w-[20rem] lg:max-h-[30rem] object-cover object-center transition-transform duration-500 ease-in-out transform";
  const classH3 = "block text-base sm:text-base lg:text-xl font-medium hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-100";

  return (
    <LayoutSection id="redes-sociales" className="fondo overflow-hidden py-8 lg:py-10">
      <TitleHeader
        title="Redes Sociales"
        subtitle="Visita nuestras redes para enterarte de novedades y promociones."
        uri={redes[0].href} />

      <div className="lg:pb-[50px] lg:pt-[10px] pt-0 mx-auto justify-center items-center">
        <div className="container group pb-2 mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative z-[10] lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">

              {/* Tabs */}
              <nav className="grid gap-2 mt-4 md:mt-10 justify-center items-center mx-auto px-6 pb-4 grid-cols-2 lg:grid-cols-1" aria-label="Tabs">
                {redes.map((item, index) => {
                  const isActive = activeTab === item.title;
                  const Icon = isActive ? PiHandTap : item.icon;
                  return (
                    <SlideIn key={index} duration={0.5} delay={index * 0.1} direction={redes[index].direction}>
                      <button onClick={() => setActiveTab(item.title)} className="flex w-full max-w-[490px] shadow-sm rounded-xl bg-slate-900/90 hover:border-blue-600 ring-1 dark:border-blue-500/90 dark:bg-(--color-tab-1) dark:focus:bg-(--color-tab-1) ring-(--color-tab-1)/50 px-6 dark:hover:bg-(--color-blue-3)/90">
                        <div className="flex items-center justify-center mx-auto gap-4 my-2">
                          {isActive ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex justify-center gap-4">
                              <Icon size="25px" color="#fff" />
                              <h3 className={classH3}>{item.title}</h3>
                            </a>
                          ) : (
                            <>
                              <Icon size="25px" color="#fff" />
                              <h3 className={classH3}>{item.title}</h3>
                            </>
                          )}
                        </div>
                      </button>
                    </SlideIn>
                  );
                })}
              </nav>

              {/* Imagen */}
              <div className="flex justify-center items-center">
                {/* <SlideIn duration={0.5} delay={0.4} direction={"left"}> */}
                {redes.map((item, index) => (
                  <div key={index} className={activeTab === item.title ? "" : "hidden"}>
                    <SlideIn duration={0.5} delay={index * 0.1} direction={"left"}>
                      <ImageComponent
                        iClassName={imgClassName}
                        iSrc={item.imgSrc}
                        iAlt={item.title}
                        iWidth={315}
                        iHeight={642}
                      />
                    </SlideIn>
                  </div>
                ))}
                {/* </SlideIn> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
};

export default SectionRedes;