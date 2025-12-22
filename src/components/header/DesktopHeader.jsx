import React from "react";
import search from "./icons/search.svg";
import { NavLink } from "react-router-dom";
import { headerLinks } from "./headerLinks";

const DesktopHeader = () => {
  return (
    <div className="flex items-center gap-[40px]">
      <nav className="hidden md:flex items-center text-[16px] font-semibold  font-[Exo]">
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
      </nav>

      <div className="hidden md:flex items-center gap-[20px]  ">
        <button className="  hover:text-orange-500">
          <p className="font-medium text-[18px]">Login / Register</p>
        </button>
        <button>
          <img src={search} />
        </button>
      </div>
    </div>
  );
};

export default DesktopHeader;
