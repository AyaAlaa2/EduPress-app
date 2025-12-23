import React from "react";
import logo from "./icons/logo.svg";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="border-b bg-white fixed top-0 w-full z-3">
      <div className="container mx-auto flex items-center justify-between px-8 md:px-5 gap-10 md:gap-50">
        <Link to="/" className="flex gap-[8px] items-center">
          <img src={logo} alt="logo" />
          <p className="font-[Exo] text-[28px] font-bold">EduPress</p>
        </Link>

        <DesktopHeader />

        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;
