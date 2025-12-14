import React from "react";
import { CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Star, Users, BookOpen, Clock } from "lucide-react";
import { Separator } from "../ui/separator";

const CourseCard = ({ course }) => {
  const oldPrice = course.oldPrice ?? 29.0;
  return (
    <div className="overflow-hidden rounded-3xl shadow-sm border bg-white flex flex-col">
      {/* --- Image Section --- */}
      <div className="relative h-40 sm:h-48 w-full">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />

        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1 text-[11px] rounded-full">
          {course.category}
        </Badge>
      </div>

      {/* --- Content Section --- */}
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5 flex-1">
        {/* Instructor */}
        <p className="text-xs text-gray-400">by {course.instructor}</p>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-[15px] sm:text-base leading-snug line-clamp-2">
          {course.title}
        </h3>

        {/* Course meta info */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <BookOpen size={14} /> {course.lessons} Lessons
          </span>

          <span className="flex items-center gap-1">
            <Users size={14} /> {course.students} Students
          </span>

          <span className="flex items-center gap-1">
            <Clock size={14} /> {course.duration}
          </span>
        </div>

        {/* Separator (like screenshot) */}
        <Separator className="my-2" />

        {/* Bottom row: rating + price (left) and View More (right) */}
        <div className="flex items-center justify-between">
          {/* Left: rating + price */}
          <div className="flex items-center gap-4">
            {/* Price */}
            <div className="flex items-center gap-2">
              {!course.isFree ? (
                <>
                  <span className="text-xs line-through text-gray-300">
                    ${oldPrice.toFixed(1)}
                  </span>
                  <span className="text-sm font-semibold text-emerald-500">
                    ${Number(course.price).toFixed(0)}
                  </span>
                </>
              ) : (
                <span className="text-sm font-semibold text-emerald-500">
                  Free
                </span>
              )}
            </div>
          </div>

          {/* Right: View More */}
          <Button
            variant="ghost"
            className="text-xs font-medium px-0 hover:bg-transparent"
          >
            View More
          </Button>
        </div>
      </CardContent>
    </div>
  );
};

export default CourseCard;
