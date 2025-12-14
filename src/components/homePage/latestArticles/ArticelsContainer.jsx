import React from "react";
import { articels } from "./articelsList";
import ArticelsCard from "./ArticelsCard";

const ArticelsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      {articels.map((article, index) => (
        <ArticelsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticelsContainer;
