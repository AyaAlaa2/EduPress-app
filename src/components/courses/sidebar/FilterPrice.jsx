import React from "react";
import { courses } from "../../Data/data";

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
    <section>
      <h2 className="font-semibold mb-4 text-[13px] uppercase tracking-wide">
        Price
      </h2>
      <ul className="space-y-2">
        {priceOptions.map((label) => (
          <li
            key={label}
            className="flex items-center justify-between text-[13px] text-gray-700"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3 w-3 border-gray-300 rounded focus:ring-0"
                checked={priceFilter === label}
                onChange={() => onChangePrice(label)}
              />
              <span>{label}</span>
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
