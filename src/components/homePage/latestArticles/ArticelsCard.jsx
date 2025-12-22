import React from "react";
import icon1 from "./icons/icon1.svg";
import { buildBlogSlug } from "../../utils/slug";
import { Link } from "react-router-dom";

const ArticelsCard = ({ article }) => {
  const href = `/blog/${buildBlogSlug(article)}`;
  return (
    <div className="flex flex-col gap-5 items-center justify-center rounded-[20px] border border-1 border-[#EAEAEA] group hover:bg-[#EAEAEA] overflow-hidden">
      <Link to={href} className="w-full flex flex-col gap-[20px]">
        <div className="relative h-40 sm:h-48 w-full">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-[20px] pb-[20px] flex flex-col items-start gap-3">
          <p className="text-[20px] font-semibold font-[Exo] group-hover:text-primary transition-colors duration-300">
            {article.title}
          </p>
          <div className="flex items-center justify-start gap-[8px]">
            <img src={icon1} alt="icon" />
            <p className="text-[16px] text-[#555555]">{article.date}</p>
          </div>
          <p className="text-[#555555] text-[16px] leading-[150%]">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ArticelsCard;
