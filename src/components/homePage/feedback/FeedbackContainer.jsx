import React from "react";
import { feedback } from "./feedbackList";
import FeedbackCard from "./FeedbackCard";

const FeedbackContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
      {feedback.map((feedbackItem, index) => (
        <FeedbackCard key={index} feedback={feedbackItem} />
      ))}
    </div>
  );
};

export default FeedbackContainer;
