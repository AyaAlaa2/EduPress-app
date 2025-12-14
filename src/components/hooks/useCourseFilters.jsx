import { useMemo, useState } from "react";

/**
 * Holds all filter state for the Courses page
 * and returns the filtered list of courses.
 */
export function UseCourseFilters(allCourses) {
  // filter state
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedInstructors, setSelectedInstructors] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [priceFilter, setPriceFilter] = useState("All"); // "All" | "Free" | "Paid"
  const [minRating, setMinRating] = useState(null); // number or null

  // helper to toggle items in an array
  const toggleInArray = (current, value) =>
    current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

  // handlers
  const handleToggleCategory = (cat) => {
    setSelectedCategories((prev) => toggleInArray(prev, cat));
  };

  const handleToggleInstructor = (name) => {
    setSelectedInstructors((prev) => toggleInArray(prev, name));
  };

  const handleToggleLevel = (level) => {
    setSelectedLevels((prev) => toggleInArray(prev, level));
  };

  const handleChangePrice = (value) => {
    // click again on same -> reset to "All"
    setPriceFilter((prev) => (prev === value ? "All" : value));
  };

  const handleChangeRating = (stars) => {
    // click again -> clear rating filter
    setMinRating((prev) => (prev === stars ? null : stars));
  };

  // apply filters to full courses list
  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      if (
        selectedCategories.length &&
        !selectedCategories.includes(course.category)
      ) {
        return false;
      }

      if (
        selectedInstructors.length &&
        !selectedInstructors.includes(course.instructor)
      ) {
        return false;
      }

      if (selectedLevels.length && !selectedLevels.includes(course.level)) {
        return false;
      }

      if (priceFilter === "Free" && !course.isFree) {
        return false;
      }

      if (priceFilter === "Paid" && course.isFree) {
        return false;
      }

      if (minRating != null && course.rating < minRating) {
        return false;
      }

      return true;
    });
  }, [
    allCourses,
    selectedCategories,
    selectedInstructors,
    selectedLevels,
    priceFilter,
    minRating,
  ]);

  return {
    filteredCourses,
    selectedCategories,
    selectedInstructors,
    selectedLevels,
    priceFilter,
    minRating,
    handleToggleCategory,
    handleToggleInstructor,
    handleToggleLevel,
    handleChangePrice,
    handleChangeRating,
  };
}
