import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
  return (
    <div className=" w-full flex flex-col sm:flex-row items-center justify-between gap-5">
      <div className="flex flex-col gap-3">
        <p className="font-[Exo] font-semibold text-xl sm:text-2xl md:text-4xl">
          Top Categories
        </p>
        <p className="text-[16px] md:text-[18px] text-[#555555]">
          Explore our Popular Categories
        </p>
      </div>
      <Button variant="outline">All categories</Button>
    </div>
  );
};

export default Header;
