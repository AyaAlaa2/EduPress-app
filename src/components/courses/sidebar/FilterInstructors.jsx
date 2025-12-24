import React from "react";
import { courses } from "../../data/data";

const instructors = [
  "Kenny White",
  "John Doe",
  "Dexter Williamson",
  "Alexa Brown",
];

const instructorCounts = courses.reduce((acc, course) => {
  acc[course.instructor] = (acc[course.instructor] || 0) + 1;
  return acc;
}, {});

const FilterInstructors = ({ selectedInstructors, onToggleInstructor }) => {
  return (
    <section className="flex flex-col gap-[20px]">
      <h2 className="font-[Exo] font-semibold text-[20px] uppercase tracking-wide">
        Instructors
      </h2>
      <ul className="w-full flex flex-col gap-[10px] items-start ">
        {instructors.map((name) => (
          <li
            key={name}
            className="w-full flex items-center justify-between text-[13px] text-gray-700"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3 w-3 border-gray-300 rounded focus:ring-0"
                checked={selectedInstructors.includes(name)}
                onChange={() => onToggleInstructor(name)}
              />
              <span className="text-[#555555]">{name}</span>
            </div>
            <span className="text-gray-400 text-[11px]">
              {instructorCounts[name] || 0}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterInstructors;
