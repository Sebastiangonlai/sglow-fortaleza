import React, { useState } from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger, ModalFooter } from "@/lib/animated-modal";
import Breadcrumb from "@/components/Breadcrumb";
import nuestrosServiciosData from '@/data/nuestrosServiciosData'
import ImageComponent from "@/components/ImageComponent";


const NuestrosServicios = () => {
  const [showCard, setShowCard] = useState("Novedades");
  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      {/* <PageSEO title="Nuestros Servicios - Academia Fortaleza" description="Descubre los servicios de Academia Fortaleza: clases prácticas, teóricas, trámites de licencia y más." /> */}

      <section className="dark:bg-[#111928]">
        <Breadcrumb
          title="Nuestros Servicios"
          subtitle="Información sobre la licencia de conducir."
          nameUri="Servicios"
          href="nuestros-servicios" />
        <div className="container">
          <div className="wow fadeInUp w-full flex flex-wrap justify-center pt-14 pb-4" data-wow-delay=".5s" data-wow-duration="1s">
            <div className="w-full ">
              <ul className="flex flex-wrap justify-center mb-3 space-x-2">
                <li className="mb-1">
                  <button onClick={() => handleProject("Novedades")}
                    className={`inline-block rounded-md py-2 px-3 text-center text-base font-semibold transition md:py-2 lg:px-4 ${showCard === "Novedades"
                      ? "activeClasses bg-[#111928] text-white ring-1 ring-[#213e75] dark:bg-[#1c2c49]/50"
                      : "inactiveClasses text-[#637381] dark:text-[#9CA3AF] hover:bg-[#111928]/70 hover:ring-1 hover:ring-[#213e75]"}`}>
                    Novedades
                  </button>
                </li>
                <li className="mb-1">
                  <button onClick={() => handleProject("Cursos")}
                    className={`inline-block rounded-md py-2 px-3 text-center text-base font-semibold transition md:py-2 lg:px-4 ${showCard === "Cursos"
                      ? "activeClasses bg-[#111928] text-white ring-1 ring-[#213e75] dark:bg-[#1c2c49]/50"
                      : "inactiveClasses text-[#637381] dark:text-[#9CA3AF] hover:bg-[#111928]/70 hover:ring-1 hover:ring-[#213e75]"}`}>
                    Cursos
                  </button>
                </li>
                <li className="mb-1">
                  <button onClick={() => handleProject("Nosotros")}
                    className={`inline-block rounded-md py-2 px-3 text-center text-base font-semibold transition md:py-2 lg:px-4 ${showCard === "Nosotros"
                      ? "activeClasses bg-[#111928] text-white ring-1 ring-[#213e75] dark:bg-[#1c2c49]/50"
                      : "inactiveClasses text-[#637381] dark:text-[#9CA3AF] hover:bg-[#111928]/70 hover:ring-1 hover:ring-[#213e75]"}`}>
                    Nosotros
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap">
            {nuestrosServiciosData.map((d, index) => (
              <>
                <PortfolioCard
                  key={index}
                  imageSrc={d.imgSrc}
                  category={d.category}
                  title={d.title}
                  description={d.description}
                  checkText={d.checkText}
                  buttonHref={d.href}
                  className="block md:hidden text-ellipsis "
                  showCard={showCard} />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NuestrosServicios;


const PortfolioCard = ({ imageSrc, category, title, description, checkText, buttonHref, showCard }) => {
  return (
    <>
      <Modal className='lg:w-[100px]'>
        <div className={`mx-auto w-1/1 md:w-1/2 xl:w-1/4 ${showCard === "Novedades" || showCard === category ? "block" : "hidden"}`}>
          <ModalTrigger className="relative mb-4">
            <div className="w-full" key={title}>
              <div className="fadeInUp mb-2">
                <div className="mb-2 overflow-hidden rounded-[5px] shadow-[0_8px_16px_rgb(0_0_0/0.2)] bg-black transition duration-700">
                  <a aria-label={title} className="block">
                    <ImageComponent iSrc={imageSrc} iAlt="image" iClassName="h-full w-full rounded-[5px] transition hover:rotate-6 hover:scale-125" iWidth={500} iHeight={500} />
                  </a>
                </div>
                <a aria-label={title} className="mb-0.5 inline-block text-base font-semibold text-[#111928] hover:text-primary dark:text-white dark:hover:text-indigo-400 sm:text-2xl lg:text-base xl:text-base leading-tight tracking-tight">
                  {title}
                </a>
              </div>
            </div>
          </ModalTrigger>
        </div>

        <ModalBody>
          <ModalContent>
            <>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-1 mt-4 lg:mb-6 lg:mt-2">
                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-neutral-500/30 dark:border-neutral-700 border border-gray-200">
                  {title}
                </span>
              </h4>
            </>
            <div className="mt-4 sm:mt-10 lg:mt-0">
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2 md:space-y-3">
                  <p className="text-gray-500 font-base dark:text-neutral-200 px-1 leading-tight">
                    {description}
                  </p>
                </div>
                <ul className="space-y-1 sm:space-y-1 px-1">
                  {checkText !== "" && (
                    checkText.map((itemText, index) => (
                      <li key={index} className="flex gap-x-3">
                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-[#334a61] text-blue-500 dark:bg-blue-600/40 dark:text-blue-300">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <div className="grow">
                          <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-300">
                            <span className="font-normal">
                              {itemText}
                            </span>
                          </span>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <a href={buttonHref} aria-label={buttonHref} className="px-3 py-1.5 bg-gray-200 text-black dark:bg-black/80 dark:border-black dark:hover:bg-black dark:text-white border border-gray-300 rounded-md text-sm font-medium w-38">
              Más información
            </a>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};
