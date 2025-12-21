import React from "react";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const ReviewAvarage = ({ stars, reviewsStats }) => {
  return (
    <div className="w-full">
      <h3 className="font-semibold text-[20px] font-[Exo] ">Comments</h3>

      <div className="w-full flex items-center justify-start gap-[12px]">
        <p className="text-[36px] font-[Exo] font-semibold">
          {reviewsStats.average.toFixed(1)}
        </p>
        <div className="flex flex-col items-start text-yellow-400 text-xl gap-[4px]">
          <div className="flex justify-center items-center">
            {stars.map((star) =>
              star <= Math.round(reviewsStats.average) ? (
                <FaStar key={star} size={18} color="#F6B40A" />
              ) : (
                <CiStar key={star} size={20} color="#F6B40A" />
              )
            )}
          </div>
          <p className="text-[16px] text-[#555555] leading-[150%]">
            based on {reviewsStats.totalRatings.toLocaleString()} ratings
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[12px] mt-5">
        {[5, 4, 3, 2, 1].map((star) => (
          <div className="flex flex-col md:flex-row items-start gap-[8px] md:gap-[20px]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-[2px]">
                {stars.map((star2) =>
                  star2 <= Math.round(star) ? (
                    <FaStar key={star} size={14} color="#F6B40A" />
                  ) : (
                    <CiStar key={star} size={16} color="#F6B40A" />
                  )
                )}
              </div>
              <span className="text-[18px] text-[#555555] w-10">
                {reviewsStats.breakdown[star]}%
              </span>
            </div>
            <div className="bg-gray-200 w-full h-[8px]">
              <div
                className="bg-[#F6B40A] h-2"
                style={{ width: `${reviewsStats.breakdown[star]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewAvarage;
