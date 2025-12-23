import React from "react";
import { CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import icon2 from "./icons/icon2.svg";
import time from "./icons/time.svg";
import { Link } from "react-router-dom";
import icon3 from "../courseDetailes/icons/icons3.svg";
import icon4 from "../courseDetailes/icons/icon4.svg";

const SecondCourseCard = ({ course }) => {
  const href = `/course/${course.id + " " + course.title}`;
  const oldPrice = course.oldPrice ?? 29.0;

  return (
    <div className="rounded-[20px] h-auto bg-white shadow-sm border overflow-hidden flex flex-col md:flex-row mb-6 group">
      <Link to={href} className="w-full flex flex-col md:flex-row">
        <div className="relatived md:w-[260px] h-full">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-[10px] left-[10px] bg-black text-white px-[12px] py-[6px] text-[12px] rounded-[8px] font-medium">
            {course.category}
          </Badge>
        </div>

        <CardContent className="flex flex-col gap-[10px] md:gap-[67px] p-4 sm:p-5 flex-1">
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-[14px] text-[#555555]">
              by <span className="text-[#000000] ">{course.instructor}</span>
            </p>

            <h3 className="font-semibold font-[Exo] text-[20px] leading-[120%] group-hover:text-primary">
              {course.title}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-gray-500">
              <span className="flex items-center gap-1">
                <img src={icon2} alt="icon2" />
                <span className="text-[#555555] text-[14px]">
                  {course.students} Students
                </span>
              </span>

              <span className="flex items-center gap-1">
                <img src={time} alt="icon2" />
                <span className="text-[#555555] text-[14px]">
                  {course.duration}
                </span>
              </span>

              <span className="flex items-center gap-1">
                <img src={icon3} alt="icon2" />
                <span className="text-[#555555] text-[14px]">
                  {course.level}
                </span>
              </span>

              <span className="flex items-center gap-1">
                <img src={icon4} alt="icon2" />
                <span className="text-[#555555] text-[14px]">
                  {course.lessons} Lessons
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between">
            <Separator className="my-2" />

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-row items-center gap-4">
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

              <Button
                variant="ghost"
                className="text-[18px] font-medium px-0 hover:bg-transparent"
              >
                <span className="text-[18px] font-medium"> View More</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </div>
  );
};

export default SecondCourseCard;
