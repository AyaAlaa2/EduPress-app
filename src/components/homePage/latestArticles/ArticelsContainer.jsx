import React from "react";
import { posts } from "../../data/data";
import ArticelsCard from "./ArticelsCard";

const ArticelsContainer = () => {
  const articles = posts.slice(0, 3);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      {articles.map((article, index) => (
        <ArticelsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticelsContainer;
