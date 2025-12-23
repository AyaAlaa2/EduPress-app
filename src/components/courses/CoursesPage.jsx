import React, { useState } from "react";
import CourseList from "./CourseList";
import SidebarCourses from "./sidebar/SidebarCourses";
import { courses } from "../data/data";
import HeaderOfLists from "../hooks/HeaderOfLists";
import { UseSearchPagination } from "../hooks/useSearchPagination";
import { UseCourseFilters } from "../hooks/useCourseFilters";
import { Pagination } from "@mantine/core";
import BreadCrumb from "../hooks/BreadCrumb";

const CoursesPage = () => {
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

  const [gridCount, setGridCount] = useState(2);

  const changeGrid = (gridCol) => {
    setGridCount(gridCol);
  };

  const href = [{ title: "Homepage", href: "/" }, { title: "Courses" }];

  return (
    <div className="min-h-screen">
      <BreadCrumb href={href} />
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-3/4">
            <HeaderOfLists
              title="All Courses"
              searchPlaceholder="Search ..."
              searchValue={searchInput}
              onSearchChange={handleSearchChange}
              changeGrid={changeGrid}
              gridCount={gridCount}
            />
            <CourseList courses={visibleCourses} gridCount={gridCount} />

            <div className="flex justify-center mt-6">
              <Pagination
                total={totalPages}
                value={page}
                onChange={onPageChange}
                size="md"
                radius="xl"
                withControls
                color="black"
                className="select-none"
              />
            </div>
          </div>

          {/* RIGHT: sidebar */}
          <div className="w-full lg:w-1/4 lg:sticky lg:top-5 self-start">
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
