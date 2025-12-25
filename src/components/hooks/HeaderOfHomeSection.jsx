import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeaderOfHomeSection = ({ title, subTitle, buttonText, buttonLink }) => {
  const navigate = useNavigate();
  return (
    <div className=" w-full flex flex-col sm:flex-row items-center justify-between gap-5">
      <div className="flex flex-col gap-3 items-center">
        <p className="font-[Exo] font-semibold text-3xl sm:text-4xl">{title}</p>
        <p className="text-[16px] sm:text-[18px] text-[#555555]">{subTitle}</p>
      </div>
      <Button onClick={() => navigate(`/${buttonLink}`)} variant="outline">
        {buttonText}
      </Button>
    </div>
  );
};

export default HeaderOfHomeSection;
