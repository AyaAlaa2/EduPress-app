import React from "react";
import icon1 from "./icons/icon1.svg";
const ArticelsCard = ({ article }) => {
  return (
    <div className="flex flex-col gap-5 h-[440px] items-center justify-center rounded-[20px] border border-1 border-[#EAEAEA] hover:shadow-lg hover:-translate-y-4 cursor-pointer transition-all duration-300 group overflow-hidden">
      <img src={article.Image} alt={article.name} />
      <div className="px-[20px] pb-[20px] flex flex-col items-start gap-3">
        <p className="text-[20px] font-semibold font-[Exo] group-hover:text-primary transition-colors duration-300">
          {article.name}
        </p>
        <div className="flex items-center justify-start gap-[8px]">
          <img src={icon1} alt="icon" />
          <p className="text-[16px] text-[#555555]">{article.time}</p>
        </div>
        <p className="text-[#555555] text-[16px] leading-[150%]">
          {article.desc}
        </p>
      </div>
    </div>
  );
};

export default ArticelsCard;
