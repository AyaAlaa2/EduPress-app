import React from "react";
import { featuredCourses } from "../../data/data";
import CourseCard from "../../courses/CourseCard";

const FeaturedContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {featuredCourses.map((feat) => (
        <CourseCard key={feat.id} course={feat} />
      ))}
    </div>
  );
};

export default FeaturedContainer;
