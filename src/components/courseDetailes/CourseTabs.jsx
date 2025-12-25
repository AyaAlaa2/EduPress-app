import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Reviews from "./review/Reviews";
import FAQsTab from "./faq/FAQsTab";
import Instructor from "./Instructor";
import OverviewPage from "./OverviewPage";
import Curriculum from "./Curriculum";

const CourseTabs = ({ course }) => {
  const tabs = [
    {
      value: "Overview",
      label: "Overview",
      component: <OverviewPage overview={course.overView} />,
    },
    {
      value: "Curriculum",
      label: "Curriculum",
      component: <Curriculum lessons={course.courseLessons} />,
    },
    {
      value: "Instructor",
      label: "Instructor",
      component: <Instructor course={course} />,
    },
    {
      value: "Reviews",
      label: "Reviews",
      component: (
        <Reviews
          reviewsStats={course.reviewsStats}
          reviewsList={course.reviewsList}
        />
      ),
    },
    { value: "FAQs", label: "FAQs", component: <FAQsTab /> },
  ];

  return (
    <div className="flex w-full flex-col border border-1 rounded-lg overflow-hidden">
      <Tabs defaultValue="Overview" className="gap-12 md:gap-2 border-0">
        <TabsList className="w-full flex flex-wrap text-[15px] sm:text-[16px] md:text-[18px] font-semibold gap-0 sm:gap-0 bg-white p-0">
          {tabs.map((item, index) => (
            <TabsTrigger
              value={item.value}
              key={index}
              className="p-5 data-[state=active]:bg-[#F5F5F5] data-[state=active]:text-primary data-[state=active]:border-none data-[state=active]:rounded-none "
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab, index) => (
          <TabsContent value={tab.value} key={index}>
            <Card className="bg-[#F5F5F5] p-[20px] md:p-[30px] rounded-none border-none">
              {tab.component}
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CourseTabs;
