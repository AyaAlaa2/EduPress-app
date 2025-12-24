import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="bg-[url('/background.svg')] h-[90vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center md:justify-start ps-0 md:ps-25">
      <div className="w-120 inset-0 bg-opacity-50 flex flex-col justify-center items-center md:items-start gap-10">
        <div>
          <p className="text-center md:text-start font-semibold text-[40px] md:text-[48px] font-[Exo] leading-[150%]">
            Build Skills with Online Course
          </p>
        </div>
        <div className="w-[90%] md:w-full flex flex-col text-center md:items-start gap-5 ">
          <p className="text-[14px] md:text-[18px] md:text-start text-[#555555] leading-[150%]">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <Button className="w-[50%] mx-auto md:mx-0">Posts Comment</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
