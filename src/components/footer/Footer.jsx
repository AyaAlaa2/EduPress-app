import React from "react";
import TopSideFooter from "./TopSideFooter";
import CopyrightSide from "./CopyrightSide";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F5] border-t mt-[50px] md:mt-[90px] ">
      <div className="max-w-6xl mx-auto pt-[90px] px-12">
        <TopSideFooter />
        <CopyrightSide />
      </div>
    </footer>
  );
};

export default Footer;
