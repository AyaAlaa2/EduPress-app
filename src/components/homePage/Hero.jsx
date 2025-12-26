import React from "react";
import { Button } from "../ui/button";
import img1 from "./HeroSVG/img1.svg";
import img2 from "./HeroSVG/img2.svg";

const Hero = () => {
  return (
    <div className="relative bg-linear-to-r from-[#FFF5BE] to-[#D0F7EA] md:bg-[url('/background.svg')] h-[90vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center md:justify-start ps-0 md:ps-25 overflow-hidden">
      <img src={img1} className="absolute md:hidden bottom-0 left-0 w-120 " />
      <img src={img2} className="absolute md:hidden top-0 right-0 w-120 " />
      <div className="absolute md:hidden top-0 left-0 w-full h-full bg-[#F0F0F0]/10 z-0"></div>

      <div className="w-120 inset-0 bg-opacity-50 flex flex-col justify-center items-center md:items-start gap-10 px-1">
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
