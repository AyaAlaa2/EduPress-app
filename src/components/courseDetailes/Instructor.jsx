import React from "react";
import facebook from "./icons//facebook.svg";
import xIcon from "./icons//xIcon.svg";
import pIcon from "./icons//pIcon.svg";
import instagram from "./icons//instagram.svg";
import youtube from "./icons//youtube.svg";
import icon2 from "./icons//icon2.svg";
import cap from "./icons//cap.svg";

const Instructor = ({ course }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[20px]">
      <div className="flex flex-col md:flex-row items-center gap-[24px]">
        <div>
          <img src={course.instructorImage} alt="instructor Image" />
        </div>
        <div className="flex flex-col gap-[12px]">
          <h4 className="font-semibold text-[20px] font-[Exo]">
            {course.instructor}
          </h4>
          <p className="text-[#555555] text-[18px]">{course.instructorBio}</p>
          <div className="flex gap-[8px] items-center">
            <img src={cap} alt="icon 2" />
            <span className="text-[16px] text-[#555555] capitalize">
              {course.students} students
            </span>
          </div>
          <div className="flex gap-[8px] items-center">
            <img src={icon2} alt="icon 2" />
            <span className="text-[16px] text-[#555555] capitalize">
              {course.lessons} lessons
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#555555] text-[18px]">{course.instructorBio}</p>
      </div>
      <div className="flex items-center gap-[12px]">
        <p className="text-[#555555] text-[18px]">Follow:</p>
        <img src={facebook} alt="facebook icon" />
        <img src={pIcon} alt="p icon" />
        <img src={xIcon} alt="x icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={youtube} alt="youtube icon" />
      </div>
    </div>
  );
};

export default Instructor;
