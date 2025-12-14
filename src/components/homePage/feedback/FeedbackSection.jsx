import React from "react";
import FeedbackContainer from "./FeedbackContainer";

const FeedbackSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-[50px]">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="font-[Exo] text-[32px] font-semibold">
          Student Feedbacks
        </h2>
        <p className="text-[18px] leading-[150%] text-[#555555]">
          What Students Say About Academy LMS
        </p>
      </div>
      <FeedbackContainer />
    </div>
  );
};

export default FeedbackSection;
