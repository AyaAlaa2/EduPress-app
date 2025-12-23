import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="bg-[url('/background.svg')] w-full h-[90vh] md:h-[100vh] bg-cover bg-center flex items-center justify-start ps-10 md:ps-25">
      <div className="w-120 inset-0 bg-opacity-50 flex flex-col justify-center items-start text-center px-4 gap-6">
        <p className="font-bold md:font-semibold text-[30px] md:text-[48px] text-start font-[Exo]">
          Build Skills with Online Course
        </p>
        <div className="flex flex-col items-start gap-5">
          <p className="text-[16px] md:text-[18px] text-start text-[#555555] leading-[150%]">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <Button>Posts Comment</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
