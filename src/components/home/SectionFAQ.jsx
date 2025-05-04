"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import TitleHeader from "@/components/TitleHeader"


export default function FaqAccordion({ items, className, }) {
  const [openItems, setOpenItems] = useState([])

  const handleToggle = (itemId) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(itemId) ? prevOpenItems.filter((id) => id !== itemId) : [...prevOpenItems, itemId],
    )
  }

  return (
    <div className={cn("w-full max-w-3xl mx-auto px-4 pb-6", className)}>
      <TitleHeader
        title="Preguntas Frecuentes"
        subtitle="Encuentra respuestas a las preguntas más comunes sobre nuestros cursos y servicios."
        uri="preguntas-frecuentes" />

      <Accordion type="multiple" value={openItems} className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-0 ">
            <div className="  left-0 w-full h-px bg-gradient-to-r from-[#DFE4EA]/0 via-stroke dark:via-[#374151] to-[#DFE4EA]/0" />
            <AccordionTrigger
              onClick={() => handleToggle(item.id)}
              className="py-4 text-left font-medium text-[19px]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="py-3 text-(--color-gray-1) text-[15px]">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
        <div className=" bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#DFE4EA]/0 via-stroke dark:via-[#374151] to-[#DFE4EA]/0" />
      </Accordion>
    </div>
  )
}
