import React from "react";
import FeaturedItem from "./FeaturedItem";

const FeaturedContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <FeaturedItem key={index} />
      ))}
    </div>
  );
};

export default FeaturedContainer;
