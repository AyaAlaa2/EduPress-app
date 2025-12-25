import React from "react";
import FeaturedContainer from "./FeaturedContainer";
import HeaderOfHomeSection from "@/components/hooks/HeaderOfHomeSection";

const Featured = () => {
  return (
    <div className="mt-[90px] w-full flex flex-col gap-[50px]">
      <HeaderOfHomeSection
        title="Featured Courses"
        subTitle="Explore our Popular Categories"
        buttonText="All categories"
        buttonLink="courses"
      />
      <FeaturedContainer />
    </div>
  );
};

export default Featured;
