import React from "react";
import { courseLevels, courses } from "../../data/data";

const levelCounts = courses.reduce((acc, course) => {
  acc[course.level] = (acc[course.level] || 0) + 1;
  return acc;
}, {});

const FilterLevel = ({ selectedLevels, onToggleLevel }) => {
  return (
    <section className="flex flex-col gap-[20px]">
      <h2 className="font-[Exo] font-semibold text-[20px] uppercase tracking-wide">
        Level
      </h2>
      <ul className="w-full flex flex-col gap-[10px] items-start ">
        {courseLevels.map((level) => (
          <li
            key={level}
            className="w-full flex items-center justify-between text-[13px] text-gray-700"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3 w-3 border-gray-300 rounded"
                checked={selectedLevels.includes(level)}
                onChange={() => onToggleLevel(level)}
              />
              <span className="text-[#555555]">{level}</span>
            </div>
            <span className="text-gray-400 text-[11px]">
              {levelCounts[level] || 0}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterLevel;
