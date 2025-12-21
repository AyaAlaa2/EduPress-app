import React from "react";
import time from "../courses/icons/time.svg";
import icon2 from "../courses/icons/icon2.svg";
import icon3 from "./icons//icons3.svg";
import icon4 from "./icons//icon4.svg";
import icon5 from "./icons//icon5.svg";

const Header = ({ course }) => {
  const courseInfo = [
    { icon: time, value: course.duration },
    { icon: icon2, value: `${course.students} students` },
    { icon: icon3, value: course.level },
    { icon: icon4, value: `${course.lessons} lessons` },
    { icon: icon5, value: `${course.quizzes} quizzes` },
  ];

  return (
    <div className="bg-black flex items-start justify-start w-full py-[50px] px-[20px] md:px-[150px]">
      <div className="flex flex-col items-start justify-start gap-[20px]">
        <div className="flex gap-[20px] items-center">
          <p className="font-medium text-[12px] md:text-[16px] bg-[#555555] text-white rounded-[8px] py-[8px] px-[12px]">
            {course.category}
          </p>
          <p className="text-[12px] md:text-[16px] text-white">
            <span className="text-[#9D9D9D]">by </span> {course.instructor}
          </p>
        </div>
        <h1 className="font-[Exo] text-[22px] md:text-[36px] font-semibold leading-[120%] text-white">
          {course.title}
        </h1>
        <div className="flex items-center flex-wrap gap-[24px]">
          {courseInfo.map((info, index) => (
            <div className="flex items-center gap-[8px] text-white">
            <img src={info.icon} alt="icon" />
            <p className="text-[#9D9D9D] text-[12px] md:text-[16px] leading-[150%] capitalize">
              {info.value}
            </p>
          </div>
          ))}     
        </div>
      </div>
    </div>
  );
};

export default Header;
