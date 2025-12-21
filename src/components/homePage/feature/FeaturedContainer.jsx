import React from "react";
import { courses } from "../../data/data";
import CourseCard from "../../courses/CourseCard";

const FeaturedContainer = () => {
  const subCourses = courses.slice(0,6)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {subCourses.map((feat) => (
         <CourseCard key={feat.id} course={feat} />
      ))}
    </div>
  );
};

export default FeaturedContainer;
