import React from "react";
import Header from "./Header";
import FeaturedContainer from "./FeaturedContainer";

const Featured = () => {
  return (
    <div className="mt-[90px] w-full flex flex-col gap-[50px]">
      <Header />
      <FeaturedContainer />
    </div>
  );
};

export default Featured;
