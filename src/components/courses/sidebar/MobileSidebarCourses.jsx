import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import FilterCategory from "./FilterCategory";
import FilterInstructors from "./FilterInstructors";
import FilterPrice from "./FilterPrice";
import FilterReview from "./FilterReview";
import FilterLevel from "./FilterLevel";

const MobileSidebarCourses = ({
  selectedCategories,
  onToggleCategory,
  selectedInstructors,
  onToggleInstructor,
  priceFilter,
  onChangePrice,
  minRating,
  onChangeRating,
  selectedLevels,
  onToggleLevel,
}) => {
  return (
    <div className="lg:hidden mb-4">
      <Sheet>
        <SheetTrigger className="flex items-center gap-2 border p-3 rounded-md">
          <SlidersHorizontal size={18} />
          Filter
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[80%] sm:w-[360px] overflow-y-auto px-5 py-8"
        >
          <aside className="space-y-8 text-sm">
            <FilterCategory
              selectedCategories={selectedCategories}
              onToggleCategory={onToggleCategory}
            />
            <FilterInstructors
              selectedInstructors={selectedInstructors}
              onToggleInstructor={onToggleInstructor}
            />
            <FilterPrice
              priceFilter={priceFilter}
              onChangePrice={onChangePrice}
            />
            <FilterReview
              minRating={minRating}
              onChangeRating={onChangeRating}
            />
            <FilterLevel
              selectedLevels={selectedLevels}
              onToggleLevel={onToggleLevel}
            />
          </aside>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebarCourses;
