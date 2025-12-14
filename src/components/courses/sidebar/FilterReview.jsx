import React from "react";
import { courses } from "../../Data/data";

const ratingCounts = courses.reduce((acc, course) => {
  const stars = Math.floor(course.rating); // 4.7 -> 4
  acc[stars] = (acc[stars] || 0) + 1;
  return acc;
}, {});

const ratingOptions = [5, 4, 3, 2, 1];

const FilterReview = ({ minRating, onChangeRating }) => {
  return (
    <section>
      <h2 className="font-semibold mb-4 text-[13px] uppercase tracking-wide">
        Review
      </h2>
      <ul className="space-y-1">
        {ratingOptions.map((stars) => (
          <li
            key={stars}
            className="flex items-center justify-between text-[13px] text-gray-700"
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
                    ★
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
