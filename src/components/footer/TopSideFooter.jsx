import React from "react";
import logo from "../header/icons/logo.svg";
import facebook from "../courseDetailes/icons//facebook.svg";
import xIcon from "../courseDetailes/icons//xIcon.svg";
import pIcon from "../courseDetailes/icons//pIcon.svg";
import instagram from "../courseDetailes/icons//instagram.svg";
import youtube from "../courseDetailes/icons//youtube.svg";
import { Link } from "react-router-dom";
import { footerLinks } from "./footerLinks";

const TopSideFooter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
      {/* Column 1 */}
      <div className="flex flex-col gap-[32px] items-start">
        <div className="flex items-center gap-[4px]">
          <img src={logo} alt="logo" loading="lazy" />
          <h2 className="text-[28px] leading-[120%] font-bold font-[Exo]">
            EduPress
          </h2>
        </div>
        <p className="text-[16px] text-[#555555] leading-[150%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-[32px] items-start">
        <h4 className="font-semibold text-[20px] font-[Exo]">GET HELP</h4>
        <ul className="flex flex-col gap-[12px] text-[16px] font-medium text-[#555555]">
          {footerLinks[0].helpLinks.map((link, index) => (
            <li key={index} className="hover:text-orange-500 cursor-pointer">
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-[32px] items-start">
        <h4 className="font-semibold text-[20px] font-[Exo]">PROGRAM</h4>
        <ul className="flex flex-col gap-[12px] text-[16px] font-medium text-[#555555]">
          {footerLinks[0].programLink.map((link, index) => (
            <li key={index} className="hover:text-orange-500 cursor-pointer">
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col gap-[32px] items-start">
        <h4 className="font-semibold text-[20px] font-[Exo]">CONTACT US</h4>
        <div className="flex flex-col items-start gap-[16px]">
          <p className="text-[16px] text-[#555555]">
            Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A
          </p>

          <p className="text-[16px] text-[#555555]">
            Phone: (123) 456 7890 <br />
            Email: support@gmail.com
          </p>
          <div className="flex items-center gap-[12px]">
            <p className="text-[#555555] text-[18px]">Follow:</p>
            <img src={facebook} alt="facebook icon" />
            <img src={pIcon} alt="p icon" />
            <img src={xIcon} alt="x icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={youtube} alt="youtube icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSideFooter;
