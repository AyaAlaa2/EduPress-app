import React from "react";
import { courses } from "../../data/data";

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
    <section className="flex flex-col gap-[20px]">
      <h2 className="font-[Exo] font-semibold text-[20px] uppercase tracking-wide">
        Price
      </h2>
      <ul className="w-full flex flex-col gap-[10px] items-start ">
        {priceOptions.map((label) => (
          <li
            key={label}
            className="w-full flex items-center justify-between text-[13px] text-gray-700"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3 w-3 border-gray-300 rounded focus:ring-0"
                checked={priceFilter === label}
                onChange={() => onChangePrice(label)}
              />
              <span className="text-[#555555]">{label}</span>
            </div>
            <span className="text-gray-400 text-[11px]">
              {priceCounts[label]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterPrice;
