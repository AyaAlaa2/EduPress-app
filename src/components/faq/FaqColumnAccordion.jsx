import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqColumnAccordion = ({ items = [], prefix = "col" }) => {
  return (
    <Accordion type="single" collapsible className="space-y-[30px]">
      {items.map((item, idx) => {
        const v = `${prefix}-${idx}`;
        return (
          <AccordionItem
            key={v}
            value={v}
            className="rounded-xl bg-neutral-100 border-0 px-[30px]"
          >
            <AccordionTrigger
              className="
                py-5 hover:no-underline
                data-[state=open]:text-orange-500
              "
            >
              <p className="font-[Exo] font-semibold">{item.question}</p>
            </AccordionTrigger>

            <AccordionContent className="pb-5 text-[16px] text-[#555555] leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FaqColumnAccordion;
