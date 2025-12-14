import React from "react";
import CourseList from "./CourseList";
import SidebarCourses from "./Sidebar/SidebarCourses";
import { courses } from "../Data/data";
import HeaderOfLists from "../Hooks/HeaderOfLists";
import { UseSearchPagination } from "../hooks/useSearchPagination";
import { UseCourseFilters } from "../hooks/useCourseFilters";
import { Pagination } from "@mantine/core";

const CoursesPage = () => {
  // 1) all filter state + filtered list from the hook
  const {
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
  } = UseCourseFilters(courses);

  // 2) search + pagination on top of filtered courses
  const {
    searchInput,
    handleSearchChange,
    page,
    onPageChange,
    totalPages,
    items: visibleCourses,
  } = UseSearchPagination(filteredCourses, {
    itemsPerPage: 6,
    searchKeys: ["title", "category", "instructor"],
  });

  // optional debug:
  // console.log("filters:", { priceFilter, minRating, selectedCategories });
  // console.log("filtered len:", filteredCourses.length);

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
        <HeaderOfLists
          title="All Courses"
          searchPlaceholder="Search courses..."
          searchValue={searchInput}
          onSearchChange={handleSearchChange}
        />

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: courses + pagination */}
          <div className="w-full lg:w-2/3">
            <CourseList courses={visibleCourses} />

            <div className="flex justify-center mt-6">
              <Pagination
                total={totalPages}
                value={page}
                onChange={onPageChange}
                size="md"
                radius="xl"
                withControls
                color="orange"
                className="select-none"
              />
            </div>
          </div>

          {/* RIGHT: sidebar */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start">
            <SidebarCourses
              selectedCategories={selectedCategories}
              onToggleCategory={handleToggleCategory}
              selectedInstructors={selectedInstructors}
              onToggleInstructor={handleToggleInstructor}
              priceFilter={priceFilter}
              onChangePrice={handleChangePrice}
              minRating={minRating}
              onChangeRating={handleChangeRating}
              selectedLevels={selectedLevels}
              onToggleLevel={handleToggleLevel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
