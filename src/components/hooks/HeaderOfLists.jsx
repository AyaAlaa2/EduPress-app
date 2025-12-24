import { Input } from "../ui/input";
import search from "../courses/icons/search.svg";
import filter from "../courses/icons/filter.svg";
import filter2 from "../courses/icons/filter2.svg";
import grid from "../courses/icons/grid.svg";
import grid2 from "../courses/icons/grid2.svg";
const HeaderOfLists = ({
  title,
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  rightSlot,
  changeGrid,
  gridCount,
}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <h1 className="text-[20px] md:text-[30px] font-semibold font-[Exo] leading-[120%]">
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
          <button onClick={() => changeGrid(2)}>
            {gridCount == 2 ? (
              <img src={grid} alt="g" loading="lazy" />
            ) : (
              <img src={grid2} alt="g" loading="lazy" />
            )}
          </button>

          <button onClick={() => changeGrid(1)}>
            {gridCount == 1 ? (
              <img src={filter2} alt="f" loading="lazy" />
            ) : (
              <img src={filter} alt="f" loading="lazy" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderOfLists;
