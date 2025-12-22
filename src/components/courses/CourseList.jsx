import React from "react";
import CourseCard from "./CourseCard";
import SecondCourseCard from "./SecondCourseCard";

const CourseList = ({ courses, gridCount }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${gridCount} gap-6`}>
      {gridCount == 1
        ? courses.map((course) => (
            <SecondCourseCard key={course.id} course={course} />
          ))
        : courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
    </div>
  );
};

export default CourseList;
