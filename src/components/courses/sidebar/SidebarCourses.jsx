import React from "react";
import FilterCategory from "./FilterCategory";
import FilterInstructors from "./FilterInstructors";
import FilterPrice from "./FilterPrice";
import FilterReview from "./FilterReview";
import FilterLevel from "./FilterLevel";

const SidebarCourses = ({
  selectedCategories,
  onToggleCategory,
  selectedInstructors,
  onToggleInstructor,
  priceFilter,
  onChangePrice,
  minRating,
  onChangeRating,
  selectedLevels,
  onToggleLevel,
}) => {
  return (
    <aside className="space-y-8 text-sm">
      <FilterCategory
        selectedCategories={selectedCategories}
        onToggleCategory={onToggleCategory}
      />
      <FilterInstructors
        selectedInstructors={selectedInstructors}
        onToggleInstructor={onToggleInstructor}
      />
      <FilterPrice priceFilter={priceFilter} onChangePrice={onChangePrice} />
      <FilterReview minRating={minRating} onChangeRating={onChangeRating} />
      <FilterLevel
        selectedLevels={selectedLevels}
        onToggleLevel={onToggleLevel}
      />
    </aside>
  );
};

export default SidebarCourses;
