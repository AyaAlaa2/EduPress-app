import React from "react";
import icon2 from "./icons/icon2.svg";
import time from "./icons/time.svg";
import { Separator } from "@/components/ui/separator";

const FeaturedItem = () => {
  return (
    <div className="flex flex-col items-center justify-start overflow-hidden rounded-[20px] border border-1 border-[#EAEAEA] hover:shadow-lg hover:-translate-y-4 cursor-pointer transition-all duration-300 group h-[474px]">
      <div className="w-full h-[250px] relative">
        <p className="absolute top-[20px] left-[20px] bg-black text-white py-[6px] px-[12px] rounded-[8px] font-medium text-[16px]">
          Photography
        </p>
        <img src="/course.png" alt="course image" height="100%" />
      </div>
      <div className="px-5 flex flex-col items-start justify-start gap-3 mb-[16px]">
        <p className="text-md ">by Determined-Poitras</p>
        <p className="text-lg font-semibold font-[Exo] group-hover:text-primary">
          Create an LMS Website with LearnPress
        </p>
      </div>
      <div className="px-5 flex flex-col items-start justify-center gap-[16px] w-full">
        <div className="flex justify-start items-center gap-4">
          <div className="flex gap-[5.3px] items-center">
            <img src={time} alt="icon2" />
            <span className="text-[16px] text-[#555555]">2 Weeks</span>
          </div>
          <div className="flex gap-[5.3px] items-center">
            <img src={icon2} alt="icon2" />
            <span className="text-lg text-[#555555]">165 Students</span>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between w-full items-center ">
          <p className="text-[#9D9D9D] text-[18px]">$29.0</p>
          <p className="text-[18px] font-medium">View More</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
