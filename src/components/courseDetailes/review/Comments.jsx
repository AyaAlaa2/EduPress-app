import React from "react";
import forword from "../icons/forwordIcon.svg";
import { Separator } from "../../ui/separator";

const Comments = ({ displayReviews }) => {
  return (
    <div className="w-full flex flex-col gap-[20px] items-start">
      {displayReviews.map((item) => (
        <div
          key={item.id}
          className="flex items-start justify-center gap-[20px]"
        >
          <div className="flex items-center justify-center gap-[20px]">
            <div className="w-[60px] h-[60px]">
              <img
                src={item.avatar}
                alt={item.name.charAt(0)}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-[8px] justify-between ">
            <span className="font-semibold font-[Exo] text-[14px] md:text-[16px]">
              {item.name}
            </span>
            <p className="text-[#555555] text-[14px] md:text-[16px] leading-[150%]">
              {item.comment}
            </p>
            <button className="text-[16px] font-medium cursor-pointer flex gap-2 items-center">
              <img src={forword} />
              Reply
            </button>
            <Separator />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
