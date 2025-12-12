import React from "react";
import Hero from "./Hero";
import TopCategories from "./category/TopCategories";
import Featured from "./feature/Featured";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-[90px] items-start justify-center px-5 sm:px-10 md:px-33">
        <TopCategories />
        <Featured />
      </div>
    </>
  );
};

export default HomePage;
