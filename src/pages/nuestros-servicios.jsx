import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import nuestrosServiciosData from '@/data/nuestrosServiciosData'
import { ModalCard } from '@/components/ModalCard';


const NuestrosServicios = () => {
  const [showCard, setShowCard] = useState("Novedades");
  const handleProject = (category) => {
    setShowCard(category);
  };

  const options = ["Novedades", "Cursos", "Nosotros"];
  const getButtonClasses = (item) =>
    `inline-block rounded-md py-2 px-3 text-center text-base font-semibold transition md:py-2 lg:px-4 ${showCard === item
      ? "bg-[#111928] text-white ring-1 ring-[#213e75] dark:bg-[#1c2c49]/50"
      : "text-[#637381] dark:text-[#9CA3AF] hover:bg-[#111928]/70 hover:ring-1 hover:ring-[#213e75]"
    }`;
  return (
    <>
      {/* <PageSEO title="Nuestros Servicios - Academia Fortaleza" description="Descubre los servicios de Academia Fortaleza: clases prácticas, teóricas, trámites de licencia y más." /> */}

      <Breadcrumb
        title="Nuestros Servicios"
        subtitle="Información sobre la licencia de conducir."
        nameUri="Servicios"
        href="nuestros-servicios" />

      <div className="bg-(--color-section-3)">
        <div className="w-full flex flex-wrap justify-center pt-10 sm:pb-4 lg:pb-0">
          {/* <div className="w-full "> */}
          <ul className="flex flex-wrap justify-center space-x-2">
            {options.map((item) => (
              <li key={item} className="mb-4 lg:mb-0">
                <button onClick={() => handleProject(item)} className={getButtonClasses(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </div>

        <div className="flex flex-wrap">
          <ModalCard card={nuestrosServiciosData} showCard={showCard} />
        </div>
      </div>
    </>
  );
};

export default NuestrosServicios;
