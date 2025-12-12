import { Input } from "../ui/input";
const HeaderOfLists = ({
  title,
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  rightSlot,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <h1 className="text-xl font-bold">{title}</h1>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        {rightSlot}
        <Input
          type="text"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={onSearchChange}
          className="w-full sm:w-64"
        />
      </div>
    </div>
  );
};

export default HeaderOfLists;
