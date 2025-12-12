import React from "react";
import { courseLevels, courses } from "../../Data/data";

const levelCounts = courses.reduce((acc, course) => {
  acc[course.level] = (acc[course.level] || 0) + 1;
  return acc;
}, {});

const FilterLevel = ({ selectedLevels, onToggleLevel }) => {
  return (
    <section>
      <h2 className="font-semibold mb-4 text-[13px] uppercase tracking-wide">
        Level
      </h2>
      <ul className="space-y-2">
        {courseLevels.map((level) => (
          <li
            key={level}
            className="flex items-center justify-between text-[13px] text-gray-700"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3 w-3 border-gray-300 rounded"
                checked={selectedLevels.includes(level)}
                onChange={() => onToggleLevel(level)}
              />
              <span>{level}</span>
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
