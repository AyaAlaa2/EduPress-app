import React from "react";
import { courseCategories, courses } from "../../data/data";

const categoryCounts = courses.reduce((acc, course) => {
  acc[course.category] = (acc[course.category] || 0) + 1;
  return acc;
}, {});

const FilterCategory = ({ selectedCategories, onToggleCategory }) => {
  return (
    <section className="flex flex-col gap-[20px]">
      <h2 className="font-[Exo] font-semibold text-[20px] uppercase tracking-wide">
        Course Category
      </h2>
      <ul className="w-full flex flex-col gap-[10px] items-start ">
        {courseCategories.map((cat) => (
          <li
            key={cat}
            className="w-full flex items-center justify-between text-[13px] taxt-[#555555]"
          >
            <div className="flex items-center justify-between gap-[7px]  ">
              <input
                type="checkbox"
                className="h-3 w-3 border-gray-300 rounded focus:ring-0 "
                checked={selectedCategories.includes(cat)}
                onChange={() => onToggleCategory(cat)}
              />
              <span className="text-[#555555]">{cat}</span>
            </div>
            <span className="text-gray-400 text-[11px]">
              {categoryCounts[cat] || 0}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterCategory;
