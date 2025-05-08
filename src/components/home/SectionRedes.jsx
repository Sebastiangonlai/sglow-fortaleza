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
  }, {
    icon: IoLogoFacebook,
    title: "Facebook",
    description: "Síguenos en Facebook para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_FACEBOOK,
    imgSrc: "/static/images/redes/s.webp",
  }, {
    icon: IoLogoWhatsapp,
    title: "WhatsApp",
    description: "Escribinos directo por WhatsApp para más información.",
    href: import.meta.env.VITE_API_WHATSAPP,
    imgSrc: "/static/images/redes/w.webp",
  }, {
    icon: IoLogoYoutube,
    title: "Youtube",
    description: "Síguenos en Youtube para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_YOUTUBE,
    imgSrc: "/static/images/redes/you.webp",
  }
];

const SectionRedes = () => {
  const [activeTab, setActiveTab] = useState(redes[0].title);

  const imgClassName = "shadow-md rounded-[40px] shadow-gray-950/80 min-w-[290px]";
  const classH3 = "block text-lg font-medium hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-100";

  return (
    <LayoutSection id="redes-sociales" color="fondo overflow-hidden py-8 lg:py-10">
      <TitleHeader
        title="Redes Sociales"
        subtitle="Visita nuestras redes para enterarte de novedades y promociones."
        uri={redes[0].href} />

      <div className="lg:pb-[50px] lg:pt-[10px] pt-0 mx-auto justify-center items-center">
        <div className="container group pb-2 mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative z-[10] lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">

              {/* Tabs */}
              <SlideIn duration={500} delay={400} once direction="left">
                <nav className="grid gap-2 mt-4 md:mt-10 justify-center items-center mx-auto px-6 pb-4 grid-cols-2  lg:grid-cols-1" aria-label="Tabs">
                  {redes.map((item, index) => {
                    const isActive = activeTab === item.title;
                    const Icon = isActive ? PiHandTap : item.icon;

                    return (
                      <button key={index} onClick={() => setActiveTab(item.title)} className="flex max-w-[490px] shadow-sm rounded-xl bg-slate-900/90 hover:border-blue-600 ring-1 dark:border-blue-500/90 dark:bg-(--color-tab-1) ring-(--color-tab-1)/50 px-6 dark:hover:bg-(--color-blue-3)/90">
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
                    );
                  })}
                </nav>
              </SlideIn>

              {/* Imagen */}
              <SlideIn duration={500} delay={400} once direction="right">
                <div className="flex justify-center items-center">
                  {redes.map((item, index) => (
                    <div key={index} className={activeTab === item.title ? "" : "hidden"}>
                      <ImageComponent
                        iClassName={imgClassName}
                        iSrc={item.imgSrc}
                        iAlt={item.title}
                        iWidth={315}
                        iHeight={642}
                      />
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
};

export default SectionRedes;