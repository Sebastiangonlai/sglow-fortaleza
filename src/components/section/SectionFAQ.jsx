"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import TitleHeader from "@/components/TitleHeader"
import { SlideIn } from "@/components/motion/SlideIn"
import faqItems from "@/data/faqData"




const FaqAccordion = () => {


  const [openItems, setOpenItems] = useState([])

  const handleToggle = (itemId) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(itemId) ? prevOpenItems.filter((id) => id !== itemId) : [...prevOpenItems, itemId],
    )
  }

  const direction = [
    {
      animation: "right"
    }, {
      animation: "right"
    }, {
      animation: "right"
    }, {
      animation: "left"
    }, {
      animation: "left"
    }, {
      animation: "left"
    }
  ];

  return (
    <div className={cn("w-full max-w-3xl mx-auto px-4 pb-6")}>

      <Accordion type="multiple" value={openItems} className="w-full">
        {faqItems.map((item, idx) => (
          <SlideIn duration={800} delay={600} direction={direction[idx].animation} once={true}>
            <div className="left-0 w-full h-px bg-gradient-to-r from-[#DFE4EA]/0 via-stroke dark:via-[#374151] to-[#DFE4EA]/0" />
            <AccordionItem key={item.id} value={item.id} className="border-0 ">
              <AccordionTrigger
                onClick={() => handleToggle(item.id)}
                className="py-4 text-left font-medium text-[19px]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="py-3 text-(--color-gray-1) text-[15px]">{item.answer}</AccordionContent>
            </AccordionItem>
            {idx === faqItems.length - 1 && (
              <div className="left-0 w-full h-px bg-gradient-to-r from-[#DFE4EA]/0 via-stroke dark:via-[#374151] to-[#DFE4EA]/0" />
            )}
          </SlideIn>
        ))}
      </Accordion>
    </div>
  )
}

export default FaqAccordion



// export default function FaqAccordion({ className, }) {
