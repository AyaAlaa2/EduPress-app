import React from "react";
import icon from "./icons/icon.svg";
import { Button } from "@/components/ui/button";

const SecondAdv = () => {
  return (
    <div className="hidden md:flex w-full h-[200px] bg-[url(/advBackground2.svg)] bg-cover bg-center items-center justify-between rounded-[20px] px-[50px]">
      <div className="flex items-center justify-center gap-[32px]">
        <img src={icon} />
        <p className="font-semibold font-[Exo] text-[20px] leading-[120%]">
          Let’s Start With Academy LMS
        </p>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <Button variant="secondary">I’m a student</Button>
        <Button>Become an Instructor</Button>
      </div>
    </div>
  );
};

export default SecondAdv;
