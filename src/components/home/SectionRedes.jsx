'use client'

import { useState } from "react";
import TitleHeader from "@/components/ui/TitleHeader";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import ImageComponent from "@/components/ImageComponent";
import Cono from "@/components/social-icons/cono.svg?react";
import { SlideIn } from "@/components/motion/SlideIn";
import LayoutSection from "@/components/LayoutSection";
import { PiHandTap } from "react-icons/pi";


const redes = [
  {
    icon: IoLogoInstagram,
    title: "Instagram",
    description: "Síguenos en Instagram para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_INSTAGRAM,
  }, {
    icon: IoLogoFacebook,
    title: "Facebook",
    description: "Síguenos en Facebook para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_FACEBOOK,
  }, {
    icon: IoLogoYoutube,
    title: "Youtube",
    description: "Síguenos en Youtube para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_YOUTUBE,
  }
]

const SectionRedes = () => {
  const [activeTab, setActiveTab] = useState("tabs-with-card-0");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const imgClassName = "shadow-xl shadow-gray-200 rounded-[40px] dark:shadow-gray-900/20 min-w-[290px]"
  const classH3 = "block text-lg font-semibold hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"

  return (
    <>

      <LayoutSection id="redes-sociales" color="bg-(--color-section-1) overflow-hidden">
        {/* <div className="absolute -rotate-45">
          <Cono className="fill text-gray-800 dark:text-gray-100 h-16 w-16 opacity-10" />
        </div> */}
        <TitleHeader
          title="Redes Sociales"
          subtitle="Visita nuestras redes para enterarte de novedades y promociones."
          uri={import.meta.env.VITE_INSTAGRAM} />
        <div className=" lg:pb-[50px] lg:pt-[10px] -pt-[30px] delay-500 mx-auto justify-center items-center ">
          <div className="container group pb-2 mx-auto justify-center items-center">
            <div className="min-w-full flex flex-col mx-auto">
              <div className="lg:w-fit">
                <div className="relative z-[10] lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">
                  <div className="mb-8 mt-4 lg:mb-0 lg:col-span-6 lg:col-start-4 lg:order-2 z-[1000]">
                    <SlideIn duration={500} delay={400} once={true} direction="left">
                      <nav className="grid gap-2 mt-4 md:mt-10 justify-center px-2" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                        {redes.map((item, index) => (
                          <button key={index} aria-label="Redes"
                            className="max-w-[300px] rounded-[10px] bg-slate-900 hover:border-blue-600 ring-1 dark:border-blue-500/90 dark:bg-[#111928]/40 ring-blue/80 dark:hover:bg-blue-800/20"
                            onClick={() => handleTabClick("tabs-with-card-" + `${index + 1}`)}
                            role="tab" aria-selected={activeTab === "tabs-with-card-" + `${index + 1}`} aria-controls="tabpanel-1" id="tab-1">
                            <div className="flex items-center justify-start gap-4 px-20 my-3">
                              {activeTab === "tabs-with-card-" + `${index + 1}` ? (
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center justify-start" aria-label="Instagram" >
                                  <PiHandTap size="30px" color="#fff" />
                                  <h3 className={classH3}>{item.title}</h3>
                                </a>
                              ) : (
                                <>
                                  <item.icon size="30px" color="#fff" />
                                  <h3 className={classH3}>{item.title}</h3>
                                </>
                              )}
                            </div>
                          </button>
                        ))}
                      </nav>
                    </SlideIn>
                  </div>

                  <SlideIn duration={500} delay={400} once={true} direction="right">
                    <div className="relative mx-auto lg:col-span-2">
                      <div className="flex justify-center items-center mx-auto">
                        <div id="tabs-with-card-1" className={activeTab === "tabs-with-card-1" || activeTab === "tabs-with-card-0" ? "" : "hidden"} role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                          <ImageComponent iClassName={imgClassName} iSrc="/static/images/redes/instagram.webp" iAlt="Instagram" iWidth={315} iHeight={642} />
                        </div>
                        <div id="tabs-with-card-2" className={activeTab === "tabs-with-card-2" ? "" : "hidden"} role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                          <ImageComponent iClassName={imgClassName} iSrc="/static/images/redes/s.webp" iAlt="Facebook" iWidth={315} iHeight={642} />
                        </div>
                        <div id="tabs-with-card-3" className={activeTab === "tabs-with-card-3" ? "" : "hidden"} role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                          <ImageComponent iClassName={imgClassName} iSrc="/static/images/redes/you.webp" iAlt="Sitio web" iWidth={315} iHeight={642} />
                        </div>
                      </div>
                    </div>
                  </SlideIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutSection>
    </>
  );
};

export default SectionRedes;