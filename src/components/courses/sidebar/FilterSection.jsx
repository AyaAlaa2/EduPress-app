import React from "react";

const FilterSection = ({
  title,
  options = [],
  isChecked,
  onToggle,
  getCount,
  renderLabel,
  countPrefix = "",
  countSuffix = "",
}) => {
  return (
    <section className="flex flex-col gap-[20px]">
      <h2 className="font-[Exo] font-semibold text-[20px] uppercase tracking-wide">
        {title}
      </h2>

      <ul className="w-full flex flex-col gap-[10px] items-start">
        {options.map((opt) => (
          <li
            key={String(opt)}
            className="w-full flex items-center justify-between text-[13px]"
          >
            <label className="flex items-center gap-[7px] cursor-pointer select-none">
              <input
                type="checkbox"
                className="h-3 w-3 border-gray-300 rounded focus:ring-0"
                checked={!!isChecked(opt)}
                onChange={() => onToggle(opt)}
              />

              {/* Label (text OR stars) */}
              {renderLabel ? (
                renderLabel(opt)
              ) : (
                <span className="text-[#555555]">{String(opt)}</span>
              )}
            </label>

            {/* Count */}
            <span className="text-gray-400 text-[11px]">
              {countPrefix}
              {getCount ? getCount(opt) : 0}
              {countSuffix}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterSection;
