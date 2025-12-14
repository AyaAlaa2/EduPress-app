import React from "react";
import skillBackground from "/skillBackground.svg";
import trueIcon from "./icons/trueIcon.svg";
import { Button } from "@/components/ui/button";

const SkillSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-[125px] px-[50px] md:px-0">
      <div>
        <img src={skillBackground} alt="skillBackground image" />
      </div>
      <div className="py-[42.5px] flex flex-col gap-6 items-start justify-start w-full md:w-[50%]">
        <p className="font-[Exo] font-semibold text-[32px] leading-[150%]">
          Grow us your skill with LearnPress LMS
        </p>
        <div className="flex flex-col gap-[16px] items-start ustify-start">
          <p className="text-[#555555] text-[18px]">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <ul className="flex flex-col gap-[12px]">
            <li className="flex gap-[5.5px] items-center">
              <img src={trueIcon} alt="trueIcon" />
              <span className="text-[18px]">Certification</span>
            </li>
            <li className="flex gap-[5.5px] items-center">
              <img src={trueIcon} alt="trueIcon" />
              <span className="text-[18px]">Certification</span>
            </li>
            <li className="flex gap-[5.5px] items-center">
              <img src={trueIcon} alt="trueIcon" />
              <span className="text-[18px]">Certification</span>
            </li>
            <li className="flex gap-[5.5px] items-center">
              <img src={trueIcon} alt="trueIcon" />
              <span className="text-[18px]">Certification</span>
            </li>
          </ul>
          <Button>Explorer course</Button>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
