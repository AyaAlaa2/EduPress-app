import { Button } from "@/components/ui/button";
import React from "react";

const Adv = () => {
  return (
    <div className="w-full h-[324px] bg-[url(/advBackground.svg)] bg-cover bg-center flex flex-col items-start justify-center rounded-[20px] gap-6 px-[50px]">
      <div className="flex flex-col gap-3">
        <p className="text-[#555555] font-semibold font-[Exo] text-[12px] sm:text-[16px] leading-[120%]">
          GET MORE POWER FROM
        </p>
        <p className="font-semibold font-[Exo] text-[25px] sm:text-[32px] leading-[120%]">
          LearnPress Add-Ons
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[14px] sm:text-[18px] text-[#555555] w-full md:w-[53%]">
          The next level of LearnPress - LMS WordPress Plugin. More Powerful,
          Flexible and Magical Inside.
        </p>
        <Button className="w-auto sm:w-[30%]">
          Explorer Course
        </Button>
      </div>
    </div>
  );
};

export default Adv;
