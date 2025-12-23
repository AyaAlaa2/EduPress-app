import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center rounded-[20px] border border-1 border-[#EAEAEA] hover:shadow-lg hover:-translate-y-4 cursor-pointer h-auto md:h-[234px] transition-all duration-300 group py-5 md:py-0">
      <img src={item.icon} alt={item.name} />
      <p className="text-[20px] font-semibold font-[Exo] group-hover:text-primary transition-colors duration-300">
        {item.name}
      </p>
      <p className="text-[#555555] text-[18px]">{item.numOfCourses} Courses</p>
    </div>
  );
};

export default CategoryItem;
