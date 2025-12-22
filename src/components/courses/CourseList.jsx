import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ courses, gridCount }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${gridCount} gap-6`}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
