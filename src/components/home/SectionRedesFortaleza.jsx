'use client'

import React, { useState } from "react";
import TitleHeader from "@/components/TitleHeader";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { PiEyeBold } from "react-icons/pi";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import ImageComponent from "@/components/ImageComponent";
import Cono from "@/components/social-icons/cono.svg?react";


const redes = [
  {
    icon: IoLogoInstagram,
    title: "Instagram",
    description: "Síguenos en Instagram para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_INSTAGRAM,
  },
  {
    icon: IoLogoFacebook,
    title: "Facebook",
    description: "Síguenos en Facebook para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_FACEBOOK,
  },
  {
    icon: IoLogoYoutube,
    title: "Youtube",
    description: "Síguenos en Youtube para ver nuestras últimas novedades y promociones.",
    href: import.meta.env.VITE_YOUTUBE,
  }
]

const SectionRedesFortaleza = () => {
  const [activeTab, setActiveTab] = useState("tabs-with-card-0");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="overflow-hidden pt-[60px] pb-[50px] bg-[#F9FAFB] dark:bg-[#182341] px-4">
        <div className="absolute -rotate-45">
          <Cono className="fill text-gray-800 dark:text-gray-100 h-16 w-16 opacity-10" />
        </div>
        <TitleHeader
          title="Redes Sociales"
          subtitle="Visita nuestras redes para enterarte de novedades y promociones."
          uri={import.meta.env.VITE_INSTAGRAM} />

        <section className="z-20 overflow-hidden lg:pb-[50px] lg:pt-[10px] -pt-[30px] delay-500 mx-auto justify-center items-center">
          <div className="container group pb-2 mx-auto justify-center items-center">
            <div className="max-w-[700px] flex flex-col mx-auto">

              <div className="lg:w-1/1">
                <div className="relative z-[10] lg:grid lg:grid-cols-6 lg:gap-6 lg:items-center">
                  <div className="mb-8 mt-4 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2 z-[1000]">
                    <ScrollAnimation
                      description={
                        <nav className="grid gap-2 mt-4 md:mt-10 justify-center" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                          {redes.map((item, index) => (


                            <button key={index} aria-label="Redes" className="max-w-[400px] rounded-lg border-[0.1rem] bg-slate-900 hover:border-blue-600 ring-1 dark:border-slate-300/20 dark:bg-[#111928]/40 ring-blue/30 dark:hover:bg-blue-800/40 dark:focus:bg-blue/50" onClick={() => handleTabClick("tabs-with-card-" + `${index + 1}`)}
                              role="tab" aria-selected={activeTab === "tabs-with-card-" + `${index + 1}`} aria-controls="tabpanel-1" id="tab-1">
                              <div className="flex items-center justify-start gap-4 px-20 my-3">
                                {activeTab === "tabs-with-card-" + `${index + 1}` ? (
                                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center justify-start" aria-label="Instagram" >
                                    <PiEyeBold size="30px" color="#fff" />
                                    <h3 className="block text-lg font-semibold hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">{item.title}</h3>
                                  </a>
                                ) : (
                                  <>
                                    <item.icon size="30px" color="#fff" />
                                    <h3 className="block text-lg font-semibold hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">{item.title}</h3>
                                  </>
                                )}
                              </div>
                            </button>
                          ))}
                        </nav>
                      }
                      duration={1} delay={0.5}
                      effect={{ initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } }}
                      transition={{ duration: 0.9, delay: 0.2, ease: 'easeInOut' }} />
                  </div>

                  <ScrollAnimation
                    description={
                      <div className="relative mx-auto lg:col-span-5">
                        <div className="flex justify-center items-center mx-auto">
                          <div id="tabs-with-card-1" className={activeTab === "tabs-with-card-1" || activeTab === "tabs-with-card-0" ? "" : "hidden"} role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                            <ImageComponent iSrc="/static/images/redes/instagram.webp" iClassName="shadow-xl shadow-gray-200 rounded-[40px] dark:shadow-gray-900/20 min-w-[280px]" iAlt="Instagram" iWidth={315} iHeight={642} />
                          </div>
                          <div id="tabs-with-card-2" className={activeTab === "tabs-with-card-2" ? "" : "hidden"} role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                            <ImageComponent iClassName="shadow-xl shadow-gray-200 rounded-[40px] dark:shadow-gray-900/20 min-w-[280px]" iSrc="/static/images/redes/s.webp" iAlt="Facebook" iWidth={315} iHeight={642} />
                          </div>
                          <div id="tabs-with-card-3" className={activeTab === "tabs-with-card-3" ? "" : "hidden"} role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                            <ImageComponent iClassName="shadow-xl shadow-gray-200 rounded-[40px] dark:shadow-gray-900/20 min-w-[280px]" iSrc="/static/images/redes/you.webp" iAlt="Sitio web" iWidth={315} iHeight={642} />
                          </div>
                        </div>
                      </div>
                    }
                    duration={1} delay={0.5}
                    effect={{ initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionRedesFortaleza;