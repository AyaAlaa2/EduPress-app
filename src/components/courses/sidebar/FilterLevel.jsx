import React from "react";
import { courseLevels, courses } from "../../data/data";
import FilterSection from "./FilterSection";

const levelCounts = courses.reduce((levelCountMap, course) => {
  const courseLevel = course.level;
  levelCountMap[courseLevel] = (levelCountMap[courseLevel] || 0) + 1;

  return levelCountMap;
}, {});

const FilterLevel = ({ selectedLevels, onToggleLevel }) => {
  return (
    <FilterSection
      title="Level"
      options={courseLevels}
      isChecked={(lvl) => selectedLevels.includes(lvl)}
      onToggle={(lvl) => onToggleLevel(lvl)}
      getCount={(lvl) => levelCounts[lvl] || 0}
    />
  );
};

export default FilterLevel;
