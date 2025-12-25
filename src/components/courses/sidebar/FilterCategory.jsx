import React from "react";
import { courseCategories, courses } from "../../data/data";
import FilterSection from "./FilterSection";

const categoryCounts = courses.reduce((categoryCountMap, course) => {
  const courseCategory = course.category;
  categoryCountMap[courseCategory] =
    (categoryCountMap[courseCategory] || 0) + 1;

  return categoryCountMap;
}, {});

const FilterCategory = ({ selectedCategories, onToggleCategory }) => {
  return (
    <FilterSection
      title="Course Category"
      options={courseCategories}
      isChecked={(cat) => selectedCategories.includes(cat)}
      onToggle={(cat) => onToggleCategory(cat)}
      getCount={(cat) => categoryCounts[cat] || 0}
    />
  );
};

export default FilterCategory;
