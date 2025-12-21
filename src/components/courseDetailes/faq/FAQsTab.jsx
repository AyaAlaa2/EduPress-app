import React, { useState } from "react";
import { faqs } from "./faqs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

const FAQsTab = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="space-y-[20px]">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={`item-${faq.id}`}
            className="border rounded-xl px-[30px] bg-white"
          >
            <AccordionTrigger className="hover:no-underline data-[state=open]:text-primary">
              <p className="font-semibold text-[12px] md:text-[16px] font-[Exo]">
                {faq.question}
              </p>
            </AccordionTrigger>

            <AccordionContent className="text-[14px] md:text-[18px] leading-relaxed text-[#555555]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQsTab;
