import React from "react";
import Category from "./Category";
import HeaderOfHomeSection from "@/components/hooks/HeaderOfHomeSection";

const TopCategories = () => {
  return (
    <div className="mt-[90px] w-full flex flex-col gap-[50px]">
      <HeaderOfHomeSection
        title="Top Categories"
        subTitle="Explore our Popular Categories"
        buttonText="All categories"
        buttonLink="courses"
      />
      <Category />
    </div>
  );
};

export default TopCategories;
