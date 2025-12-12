import React from "react";
import { courseCategories, courses } from "../../Data/data";

const categoryCounts = courses.reduce((acc, course) => {
  acc[course.category] = (acc[course.category] || 0) + 1;
  return acc;
}, {});

const FilterCategory = ({ selectedCategories, onToggleCategory }) => {
  return (
    <section>
      <h2 className="font-semibold mb-4 text-[13px] uppercase tracking-wide">
        Course Category
      </h2>
      <ul className="space-y-2">
        {courseCategories.map((cat) => (
          <li
            key={cat}
            className="flex items-center justify-between text-[13px] text-gray-700"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3 w-3 border-gray-300 rounded focus:ring-0"
                checked={selectedCategories.includes(cat)}
                onChange={() => onToggleCategory(cat)}
              />
              <span>{cat}</span>
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
