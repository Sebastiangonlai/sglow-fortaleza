import React, { useState } from "react";
import TitleHeader from "@/components/TitleHeader";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { PiEyeBold } from "react-icons/pi";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import ImageComponent from "@/components/ImageComponent";


const SectionRedesFortaleza = () => {
  const [activeTab, setActiveTab] = useState("tabs-with-card-0");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="overflow-hidden pt-[60px] pb-[50px] bg-[#F9FAFB] dark:bg-[#182341]">
        <div className="absolute -rotate-45">
          <svg role="img" viewBox="0 0 24 24" width="103" height="120" xmlns="http://www.w3.org/2000/svg" fill="none"  >
            <path d="M12.0319 0c-.8823 0-1.0545.136-1.0545.136-.1738.056-.3556.255-.4105.43L9.683 3.3808c.4729.1729 1.3222.4266 2.2337.4266 1.0987 0 2.017-.3494 2.3763-.5075L13.4352.566c-.055-.1755-.237-.3707-.4067-.4374 0 0-.1142-.1286-.9966-.1286zm3.5645 7.455c-.3601.34-1.3276.9373-3.6797.9373-2.2929 0-3.189-.5678-3.5213-.9113l-1.3887 4.4227c.2272.3614 1.2539 1.5594 4.8847 1.5594 3.7569 0 4.8539-1.3467 5.0649-1.6737zm-8.5897 4.4487l-1.0025 3.1922H4.3428c-.2486 0-.5097.1932-.5826.4315l-2.334 7.6317a.3962.3962 0 0 0-.0169.1537c-.0008.0053-.002.0099-.002.016 0 .0839.0233.226.0233.226.0322.2456.2612.4452.5098.4452h20.1192c.2487 0 .4768-.1994.5098-.4453 0 0 .0234-.142.0234-.226a.0245.0245 0 0 0-.0025-.01.3201.3201 0 0 0 .0024-.0313.4096.4096 0 0 0-.019-.1282l-2.3339-7.6318c-.0729-.2383-.334-.4314-.5826-.4314h-1.6636l.2005.6391c-.2407.4854-1.4886 2.38-6.3027 2.38-4.6003 0-5.8288-1.73-6.1107-2.3072z" stroke="white" strokeOpacity="0.05" />
          </svg>
        </div>
        <div className="absolute rotate-45 pt-[340px]">
          <svg role="img" viewBox="0 0 24 24" width="103" height="120" xmlns="http://www.w3.org/2000/svg" fill="none" >
            <path d="M12.0319 0c-.8823 0-1.0545.136-1.0545.136-.1738.056-.3556.255-.4105.43L9.683 3.3808c.4729.1729 1.3222.4266 2.2337.4266 1.0987 0 2.017-.3494 2.3763-.5075L13.4352.566c-.055-.1755-.237-.3707-.4067-.4374 0 0-.1142-.1286-.9966-.1286zm3.5645 7.455c-.3601.34-1.3276.9373-3.6797.9373-2.2929 0-3.189-.5678-3.5213-.9113l-1.3887 4.4227c.2272.3614 1.2539 1.5594 4.8847 1.5594 3.7569 0 4.8539-1.3467 5.0649-1.6737zm-8.5897 4.4487l-1.0025 3.1922H4.3428c-.2486 0-.5097.1932-.5826.4315l-2.334 7.6317a.3962.3962 0 0 0-.0169.1537c-.0008.0053-.002.0099-.002.016 0 .0839.0233.226.0233.226.0322.2456.2612.4452.5098.4452h20.1192c.2487 0 .4768-.1994.5098-.4453 0 0 .0234-.142.0234-.226a.0245.0245 0 0 0-.0025-.01.3201.3201 0 0 0 .0024-.0313.4096.4096 0 0 0-.019-.1282l-2.3339-7.6318c-.0729-.2383-.334-.4314-.5826-.4314h-1.6636l.2005.6391c-.2407.4854-1.4886 2.38-6.3027 2.38-4.6003 0-5.8288-1.73-6.1107-2.3072z" stroke="white" strokeOpacity="0.05" />
          </svg>
        </div>
        <TitleHeader
          title="Redes Sociales"
          subtitle="Visita nuestras redes para enterarte de novedades y promociones."
          uri={import.meta.env.VITE_INSTAGRAM} />

        <section className="z-20 overflow-hidden dark:bg-[#182341] lg:pb-[50px] lg:pt-[10px] -pt-[30px] delay-500 mx-auto justify-center items-center">
          <div className="container group pb-2 mx-auto justify-center items-center">
            <div className="max-w-[700px] flex flex-col mx-auto">

              <div className="lg:w-1/1">
                <div className="relative z-[10] lg:grid lg:grid-cols-6 lg:gap-6 lg:items-center">
                  <div className="mb-8 mt-4 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2 z-[1000]">
                    <ScrollAnimation
                      description={
                        <nav className="grid gap-2 mt-4 md:mt-10 justify-center" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                          <button aria-label="Redes" className="max-w-[400px] rounded-lg border-[0.1rem] bg-slate-900 hover:border-blue-600 ring-1 dark:border-slate-300/20 dark:bg-[#111928]/40 ring-blue/30 dark:hover:bg-blue-800/40 dark:focus:bg-blue/50" onClick={() => handleTabClick("tabs-with-card-1")}
                            role="tab" aria-selected={activeTab === "tabs-with-card-1"}
                            aria-controls="tabpanel-1" id="tab-1">
                            <div className="flex items-center justify-start gap-4 px-20 my-3">
                              {activeTab === "tabs-with-card-1" ? (
                                <a href={import.meta.env.VITE_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center justify-start" aria-label="Instagram" >
                                  <PiEyeBold size="30px" color="#fff" />
                                  <h3 className="block text-lg font-semibold hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Instagram</h3>
                                </a>
                              ) : (
                                <>
                                  <IoLogoInstagram size="30px" color="#fff" />
                                  <h3 className="block text-lg font-semibold hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Instagram</h3>
                                </>
                              )}
                            </div>
                          </button>

                          <button className="max-w-[400px] rounded-lg border-[0.1rem] bg-slate-900 hover:border-blue-600 ring-1 dark:border-slate-300/20 dark:bg-[#111928]/40 ring-blue/30 dark:hover:bg-blue-800/40 dark:focus:bg-blue/50" onClick={() => handleTabClick("tabs-with-card-2")}
                            role="tab" aria-selected={activeTab === "tabs-with-card-2"} aria-controls="tabpanel-2" id="tab-2">
                            <div className="flex items-center justify-start gap-4 px-20 py-3">
                              {activeTab === "tabs-with-card-2" ? (
                                <a href={import.meta.env.VITE_FACEBOOK} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center justify-start" aria-label="Facebook">
                                  <PiEyeBold size="30px" color="#fff" />
                                  <h3 className="block text-lg font-semibold hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Facebook</h3>
                                </a>
                              ) : (
                                <>
                                  <IoLogoFacebook size="30px" color="#fff" />
                                  <h3 className="block text-lg font-semibold hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Facebook</h3>
                                </>
                              )}
                            </div>
                          </button>

                          <button className="max-w-[400px] rounded-lg border-[0.1rem] bg-slate-900 hover:border-blue-600 ring-1 dark:border-slate-300/20 dark:bg-[#111928]/40 ring-blue/30 dark:hover:bg-blue-800/40 dark:focus:bg-blue/50" onClick={() => handleTabClick("tabs-with-card-3")}
                            role="tab" aria-selected={activeTab === "tabs-with-card-3"} aria-controls="tabpanel-3" id="tab-3">
                            <div className="flex items-center justify-start gap-4 px-20 py-3">
                              {activeTab === "tabs-with-card-3" ? (
                                <a href={import.meta.env.VITE_YOUTUBE} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center justify-start" aria-label="Youtube" >
                                  <PiEyeBold size="30px" color="#fff" />
                                  <h3 className="block text-lg font-semibold hs-tab-active:text-blue-500 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Youtube</h3>
                                </a>
                              ) : (
                                <>
                                  <IoLogoYoutube size="30px" color="#fff" />
                                  <h3 className="block text-lg font-semibold hs-tab-active:text-blue-600 text-neutral-200 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Youtube</h3>
                                </>
                              )}
                            </div>
                          </button>
                        </nav>
                      }
                      duration={1} delay={0.5}
                      // rootMargin="0px 0px -10px 0px"
                      effect={{ initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } }}
                      transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }} />
                  </div>

                  <ScrollAnimation
                    description={
                      <div className="relative mx-auto lg:col-span-5">
                        <div className="flex justify-center items-center mx-auto">
                          <div id="tabs-with-card-1" className={activeTab === "tabs-with-card-1" || activeTab === "tabs-with-card-0" ? "" : "hidden"} role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                            <ImageComponent iSrc="/static/images/redes/instagram.png" iClassName="shadow-xl shadow-gray-200 rounded-[40px] dark:shadow-gray-900/20 min-w-[280px]" iAlt="Instagram" iWidth={315} iHeight={642} />
                          </div>
                          <div id="tabs-with-card-2" className={activeTab === "tabs-with-card-2" ? "" : "hidden"} role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                            <ImageComponent iClassName="shadow-xl shadow-gray-200 rounded-[40px] dark:shadow-gray-900/20 min-w-[280px]" iSrc="/static/images/redes/s.png" iAlt="Facebook" iWidth={315} iHeight={642} />
                          </div>
                          <div id="tabs-with-card-3" className={activeTab === "tabs-with-card-3" ? "" : "hidden"} role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                            <ImageComponent iClassName="shadow-xl shadow-gray-200 rounded-[40px] dark:shadow-gray-900/20 min-w-[280px]" iSrc="/static/images/redes/you.png" iAlt="Sitio web" iWidth={315} iHeight={642} />
                          </div>
                        </div>
                      </div>
                    }
                    duration={1} delay={0.5}
                    // rootMargin="0px 0px -10px 0px"
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