import React from "react";
import Header from "./Header";
import Category from "./Category";

const TopCategories = () => {
  return (
    <div className="mt-[90px] w-full flex flex-col gap-[50px]">
      <Header />
      <Category />
    </div>
  );
};

export default TopCategories;
