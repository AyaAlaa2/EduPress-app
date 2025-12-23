import React from "react";
import { headerLinks } from "./headerLinks";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

const MobileHeader = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden py-[24px]">
        <Menu size={24} />
      </SheetTrigger>

      <SheetContent side="right" className="w-full md:w-[360px]">
        <div className="flex flex-col text-[16px] font-semibold py-[48px] font-[Exo]">
          {headerLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `px-[20px] py-[24px] hover:text-primary ${
                  isActive ? "bg-[#F5F5F5] text-primary" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button className="mt-[20px] text-start hover:text-orange-500 px-[20px]">
            Login / Register
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeader;
