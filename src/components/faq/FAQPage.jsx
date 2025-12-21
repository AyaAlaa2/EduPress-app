import React from "react";
import { faqs } from "../data/data";
import VectorImg from "../assets/img/FaqVector.png";
import FaqColumnAccordion from "./FaqColumnAccordion";

const FAQPage = () => {
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-10">FAQs</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <FaqColumnAccordion items={leftFaqs} prefix="left" />
          <FaqColumnAccordion items={rightFaqs} prefix="right" />
        </div>

        {/* Image – bottom left */}
        <div className="mt-16 flex md:justify-center lg:justify-start">
          <img
            src={VectorImg}
            alt="FAQ illustration"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
