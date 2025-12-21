import React from "react";
import { CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Star, Users, BookOpen, Clock } from "lucide-react";
import { Separator } from "../ui/separator";
import icon2 from "./icons/icon2.svg";
import time from "./icons/time.svg";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const href = `/course/${course.id + " " + course.title}`;
  const oldPrice = course.oldPrice ?? 29.0;
  return (
    <div className="overflow-hidden rounded-3xl shadow-sm border bg-white flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-4 cursor-pointer group">
      {/* --- Image Section --- */}
      <Link to={href}>
        <div className="relative h-40 sm:h-48 w-full">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />

          {/* Category Badge */}
          <Badge className="absolute top-[20px] left-[15px] bg-black text-white px-[12px] py-[6px] text-[12px] rounded-[8px] font-medium">
            {course.category}
          </Badge>
        </div>

        {/* --- Content Section --- */}
        <CardContent className="flex flex-col gap-3 p-4 sm:p-5 flex-1">
          {/* Instructor */}
          <p className="text-[14px] text-[#555555]">
            by <span className="text-[#000000] ">{course.instructor}</span>
          </p>

          {/* Title */}
          <h3 className="font-semibold font-[Exo] text-[20px] leading-[120%] group-hover:text-primary">
            {course.title}
          </h3>

          {/* Course meta info */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <img src={icon2} alt="icon2" />
              <span className="text-[#555555] text-[16px]">
                {course.students} Students
              </span>
            </span>

            <span className="flex items-center gap-1">
              <img src={time} alt="icon2" />
              <span className="text-[#555555] text-[16px]">
                {course.duration}
              </span>
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
              className="text-[18px] font-medium px-0 hover:bg-transparent"
            >
              <span className="text-[18px] font-medium"> View More</span>
            </Button>
          </div>
        </CardContent>
      </Link>
    </div>
  );
};

export default CourseCard;
