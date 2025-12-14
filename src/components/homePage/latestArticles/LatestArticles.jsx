import React from "react";
import Header from "./Header";
import ArticelsContainer from "./ArticelsContainer";

const LatestArticles = () => {
  return (
    <div className="w-full flex flex-col gap-[50px]">
      <Header />
      <ArticelsContainer />
    </div>
  );
};

export default LatestArticles;
