import React, { useState } from "react";
import { accordionDetailsClasses } from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/joy/AccordionSummary';
import { Plus } from "lucide-react"


const SectionFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex z-20 overflow-hidden bg-transparent pb-4 pt-2 dark:bg-transparent lg:pb-[50px] lg:pt-[65px]">
      <div className="container group mb-2">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/1">
            <AccordionItem
              header="¿Necesito tener un vehículo para las clases prácticas?"
              text="No, en nuestra academia proporcionamos vehículos equipados y seguros para las clases prácticas."
              index={0}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
            />
            <AccordionItem
              header="¿Si tengo 17 años puedo comenzar el curso?"
              text="No, solo es posible comenzar a partir de los 18 años."
              index={1}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
            />
            <AccordionItem
              header="¿Puedo tomar clases si nunca he manejado antes?"
              text="Sí, nuestras clases están diseñadas para todos los niveles, incluyendo principiantes que nunca han estado al volante."
              index={2}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
            />
          </div>
          <div className="w-full px-4 lg:w-1/1">
            <AccordionItem
              header="¿Ofrecen clases en horarios nocturnos o fines de semana?"
              text="Sí, contamos con horarios flexibles, incluyendo opciones nocturnas y fines de semana, para adaptarnos a tu agenda."
              index={3}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
            />
            <AccordionItem
              header="¿Requisitos para inscribirse en IMM?"
              text="Para inscribirse en la IMM se requieren: certificado médico, residir en Montevideo, fotocopia vigente de la CI y comprobante de pago (redes de cobranza)"
              index={4}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
            />
            <AccordionItem
              header="¿Cuál es la duración del curso?"
              text="La duración del curso varía según el nivel y la disponibilidad del alumno."
              index={5}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQ;


const AccordionItem = ({ header, text, index, activeIndex, handleToggle }) => {
  const isActive = index === activeIndex;

  return (
    <AccordionGroup
      variant="outlined"
      color="neutral"
      transition="0.2s"
      justifyContent='center'
      borderRadius='md'
      border='1px solid #e2e3e5'
      className="animate__animated animate__bounceInLeft"
      sx={{
        maxWidth: 1000,
        marginBottom: '1rem',
        mx: 'auto',
        borderRadius: 'md',
        backgroundColor: '#182341',
        [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]: {
          paddingBlock: '1rem',
          color: '#e2e3e5',
          borderRadius: 'md',
          background: 'transparent',
        },
        [`& .${accordionSummaryClasses.button}`]: {
          paddingBlock: '1rem',
          color: '#e2e3e5',
          borderRadius: 'md',
          "&:hover": {
            backgroundColor: 'transparent !important', // sin fondo al hacer hover
            color: '#e2e3e5 !important',               // color sin cambio
          },
        },
      }}>

      <Accordion expanded={isActive} onChange={() => handleToggle(index)}>
        <AccordionSummary
          expandIcon={<Plus />}
          aria-controls={`${header}`}
          id={`panel${index}-header`}
          className="pb-1 pt-1 lg:pb-0 lg:pt-0 sm:p-2 lg:px-2 xl:px-2 text-left">
          <div className="relative cursor-pointer text-[16px] list-none pr-4 font-semibold duration-300 leading-tight tracking-tight">
            {header}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="-mt-[6px] pb-[2px] inline-block align-middle text-[15px] font-normal text-gray-400 dark:text-gray-300 leading-tight tracking-tight">
            {text}
          </p>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};