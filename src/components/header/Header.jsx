import React from "react";
import logo from "./icons/logo.svg";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="max-w-6xl mx-auto border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-4">
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
