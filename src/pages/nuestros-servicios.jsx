import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import nuestrosServiciosData from '@/data/nuestrosServiciosData'
import { ModalCard } from '@/components/ModalCard';


const NuestrosServicios = () => {
  const [showCard, setShowCard] = useState("Novedades");
  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      {/* <PageSEO title="Nuestros Servicios - Academia Fortaleza" description="Descubre los servicios de Academia Fortaleza: clases prácticas, teóricas, trámites de licencia y más." /> */}

      <section>
        <Breadcrumb
          title="Nuestros Servicios"
          subtitle="Información sobre la licencia de conducir."
          nameUri="Servicios"
          href="nuestros-servicios" />
        <div className="container ">
          <div className="w-full flex flex-wrap justify-center pt-14">
            <div className="w-full ">
              <ul className="flex flex-wrap justify-center space-x-2">
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
            <ModalCard card={nuestrosServiciosData} showCard={showCard} />
          </div>
        </div>
      </section>
    </>
  );
};

export default NuestrosServicios;
