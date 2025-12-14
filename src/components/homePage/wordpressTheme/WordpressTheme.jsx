import { Button } from "@/components/ui/button";
import React from "react";

const WordpressTheme = () => {
  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center py-[60px] gap-6 px-3">
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="font-[Exo] text-[14px] sm:text-[16px] font-semibold">
          PROVIDING AMAZING
        </p>
        <p className="text-center capitalize font-[Exo] text-[22px] sm:text-[32px] font-semibold">
          education wordpress theme
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <p className="text-[16px] sm:text-[18px] text-[#555555] text-center">
          The next level of LMS WordPress Theme. Learn anytime and anywhere.
        </p>
        <Button>Explorer course</Button>
      </div>
    </div>
  );
};

export default WordpressTheme;
