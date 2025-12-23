import React from "react";
import Hero from "./Hero";
import TopCategories from "./category/TopCategories";
import Featured from "./feature/Featured";
import Adv from "./advSection/Adv";
import InformationSection from "./infoSection/InformationSection";
import WordpressTheme from "./wordpressTheme/WordpressTheme";
import SecondAdv from "./advSection/SecondAdv";
import SkillSection from "./skillSection/SkillSection";
import LatestArticles from "./latestArticles/LatestArticles";
import FeedbackSection from "./feedback/FeedbackSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-[50px] md:gap-[90px] items-start justify-center px-7 sm:px-15 md:px-30">
        <TopCategories />
        <Featured />
        <Adv />
        <InformationSection />
        <SkillSection />
        <WordpressTheme />
        <FeedbackSection />
        <SecondAdv />
        <LatestArticles />
      </div>
    </>
  );
};

export default HomePage;
