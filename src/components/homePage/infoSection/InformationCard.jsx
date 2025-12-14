import React from "react";

const InformationCard = ({ information }) => {
  return (
    <div className="h-[181px] rounded-xl flex flex-col gap-[16px] items-center justify-center bg-[#F5F5F5]">
      <p className="font-[Exo] font-semibold text-[32px] text-primary">{information.number}</p>
      <p className="font-medium text-[18px]">{information.text}</p>
    </div>
  );
};

export default InformationCard;
