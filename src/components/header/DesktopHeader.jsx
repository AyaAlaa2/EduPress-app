import React from "react";
import search from "./icons/search.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { headerLinks } from "./headerLinks";

const DesktopHeader = ({ setShowSearch, showSearch }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full flex items-center justify-between gap-35">
        <nav className="hidden lg:flex items-center text-[16px] font-semibold  font-[Exo]">
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

        <div className="hidden lg:flex items-center gap-[20px]  ">
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer hover:text-orange-500"
          >
            <p className="font-medium text-[18px]">Login / Register</p>
          </button>
          <button onClick={() => setShowSearch(!showSearch)}>
            <img src={search} alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
