import React from "react";
import ArticelsContainer from "./ArticelsContainer";
import HeaderOfHomeSection from "@/components/hooks/HeaderOfHomeSection";

const LatestArticles = () => {
  return (
    <div className="w-full flex flex-col gap-[50px]">
      <HeaderOfHomeSection
        title="Latest Articles"
        subTitle="Explore our Popular Categories"
        buttonText="All articles"
      />
      <ArticelsContainer />
    </div>
  );
};

export default LatestArticles;
