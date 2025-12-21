import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaqColumnAccordion = ({ items = [], prefix = "col" }) => {
  return (
    <Accordion type="single" collapsible className="space-y-6">
      {items.map((item, idx) => {
        const v = `${prefix}-${idx}`;
        return (
          <AccordionItem
            key={v}
            value={v}
            className="rounded-xl bg-neutral-100 border-0 px-6"
          >
            <AccordionTrigger
              className="
                py-5 text-left font-semibold hover:no-underline
                data-[state=open]:text-orange-500
              "
            >
              {item.question}
            </AccordionTrigger>

            <AccordionContent className="pb-5 text-sm text-neutral-600 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FaqColumnAccordion;
