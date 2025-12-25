import React from "react";
import { courses } from "../../data/data";
import FilterSection from "./FilterSection";

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
    <FilterSection
      title="Instructors"
      options={instructors}
      isChecked={(name) => selectedInstructors.includes(name)}
      onToggle={(name) => onToggleInstructor(name)}
      getCount={(name) => instructorCounts[name] || 0}
    />
  );
};

export default FilterInstructors;
