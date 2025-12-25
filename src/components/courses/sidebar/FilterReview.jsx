import React from "react";
import { courses } from "../../data/data";
import { FaStar } from "react-icons/fa6";
import FilterSection from "./FilterSection";

const ratingCounts = courses.reduce((acc, course) => {
  const stars = Math.floor(course.rating);
  acc[stars] = (acc[stars] || 0) + 1;
  return acc;
}, {});

const ratingOptions = [5, 4, 3, 2, 1];
const Stars = ({ value }) => (
  <div className="flex items-center gap-[2px] text-[11px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < value ? "text-yellow-400" : "text-gray-300"}>
        <FaStar size={12} />
      </span>
    ))}
  </div>
);

const FilterReview = ({ minRating, onChangeRating }) => {
  return (
    <FilterSection
      title="Review"
      options={ratingOptions}
      isChecked={(stars) => minRating === stars}
      onToggle={(stars) => onChangeRating(stars)}
      getCount={(stars) => ratingCounts[stars] || 0}
      countPrefix="("
      countSuffix=")"
      renderLabel={(stars) => <Stars value={stars} />}
    />
  );
};

export default FilterReview;
