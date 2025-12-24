import React from "react";
import { courses } from "../../data/data";
import { FaStar } from "react-icons/fa6";

const ratingCounts = courses.reduce((acc, course) => {
  const stars = Math.floor(course.rating);
  acc[stars] = (acc[stars] || 0) + 1;
  return acc;
}, {});

const ratingOptions = [5, 4, 3, 2, 1];

const FilterReview = ({ minRating, onChangeRating }) => {
  return (
    <section className="flex flex-col gap-[20px]">
      <h2 className="font-[Exo] font-semibold text-[20px] uppercase tracking-wide">
        Review
      </h2>
      <ul className="w-full flex flex-col gap-[10px] items-start ">
        {ratingOptions.map((stars) => (
          <li
            key={stars}
            className="w-full flex items-center justify-between text-[13px] text-gray-700"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3 w-3 border-gray-300 rounded"
                checked={minRating === stars}
                onChange={() => onChangeRating(stars)}
              />
              <div className="flex items-center gap-[2px] text-[11px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < stars ? "text-yellow-400" : "text-gray-300"}
                  >
                    <FaStar size={12} />
                  </span>
                ))}
              </div>
            </div>
            <span className="text-gray-400 text-[11px]">
              ({ratingCounts[stars] || 0})
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterReview;
