import React from "react";
import { courses } from "../../data/data";
import FilterSection from "./FilterSection";

const priceCounts = courses.reduce(
  (acc, course) => {
    acc.All += 1;
    if (course.isFree) acc.Free += 1;
    else acc.Paid += 1;
    return acc;
  },
  { All: 0, Free: 0, Paid: 0 }
);

const priceOptions = ["All", "Free", "Paid"];

const FilterPrice = ({ priceFilter, onChangePrice }) => {
  return (
    <FilterSection
      title="Price"
      options={priceOptions}
      isChecked={(opt) => priceFilter === opt}
      onToggle={(opt) => onChangePrice(opt)}
      getCount={(opt) => priceCounts[opt]}
    />
  );
};

export default FilterPrice;
