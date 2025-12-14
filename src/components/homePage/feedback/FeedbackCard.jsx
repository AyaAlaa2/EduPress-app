import React from "react";
import icon from "./icons/icon.svg";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="flex flex-col gap-6 items-start justify-center rounded-[20px] border border-1 border-[#EAEAEA] overflow-hidden px-[30px] py-[40px]">
      <div className="flex flex-col items-start gap-5">
        <img src={icon} alt="icon" />
        <p className="text-[16px] leading-[150%]">{feedback.comment}</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <h4 className="text-[20px] font-semibold leading-[120%]">
          {feedback.name}
        </h4>
        <p className="text-[#555555] text-[18px] leading-[150%]">
          {feedback.role}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
