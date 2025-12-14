import React from "react";
import FeaturedItem from "./FeaturedItem";
import { featured } from "./featuredList";

const FeaturedContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {featured.map((feat, index) => (
        <FeaturedItem key={index} feature={feat} />
      ))}
    </div>
  );
};

export default FeaturedContainer;
