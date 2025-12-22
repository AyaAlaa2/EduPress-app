import { Input } from "../ui/input";
import search from "../courses/icons/search.svg";
import filter from "../courses/icons/filter.svg";
import grid from "../courses/icons/grid.svg";
const HeaderOfLists = ({
  title,
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  rightSlot,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <h1 className="text-[30px] font-semibold font-[Exo] leading-[120%]">
        {title}
      </h1>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        {rightSlot}
        <div className="flex w-full items-center gap-[20px]">
          <div className="relative w-full sm:w-64 flex items-center justify-between border-b-2 border-b-black ">
            <Input
              type="text"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={onSearchChange}
              className="border-0 focus:border-b-black focus-visible:ring-0"
            />
            <img src={search} alt="s" loading="lazy" />
          </div>
          <img src={grid} alt="g" loading="lazy" />
          <img src={filter} alt="f" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default HeaderOfLists;
