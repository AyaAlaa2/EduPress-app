import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import CourseTabs from "./CourseTabs";
import { courses } from "../data/data";
import Header from "./Header";
import BreadCrumb from "../hooks/BreadCrumb";
import CommentForm from "../comments/CommentForm";

const CourseDetailesPage = () => {
  const { courseId } = useParams();
  const id = courseId.split(" ")[0];

  const course = useMemo(() => {
    if (!id) return null;
    return courses.find((c) => c.id == id);
  }, [id]);

  const href = [
    { title: "HomePage", href: "/" },
    { title: "Course", href: "/courses" },
    { title: course.title },
  ];

  if (!course) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-sm text-muted-foreground">Course not found.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto py-8">
        <BreadCrumb href={href} />

        <div className="flex flex-col gap-10 items-start justify-center">
          <Header course={course} />

          <div className="flex w-full md:w-[80%] mx-auto flex-col lg:flex-row gap-10 items-start justify-center px-[10px] md:px-[30px]">
            <div className="w-full flex items-center justify-center">
              <CourseTabs course={course} />
            </div>
          </div>
          <CommentForm
            title="Leave a Comment"
            subtitle="Your email address will not be published. Required fields are marked *"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailesPage;
