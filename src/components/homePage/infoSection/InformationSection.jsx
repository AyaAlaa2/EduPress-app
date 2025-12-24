import React from "react";
import { information } from "./information";
import InformationCard from "./InformationCard";

const InformationSection = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
      {information.map((info, index) => (
        <InformationCard information={info} key={index} />
      ))}
    </div>
  );
};

export default InformationSection;
