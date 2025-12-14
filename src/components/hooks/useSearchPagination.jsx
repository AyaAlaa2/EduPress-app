import { useState, useMemo, useEffect } from "react";
import { useDebouncedValue } from "@mantine/hooks";

export function UseSearchPagination(
  items,
  { itemsPerPage = 5, searchKeys = [] } = {}
) {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1); // 1-based

  const [debouncedSearch] = useDebouncedValue(searchInput, 300);

  // filter by search
  const filteredItems = useMemo(() => {
    const term = debouncedSearch.trim().toLowerCase();
    if (!term) return items;

    return items.filter((item) =>
      searchKeys.some((key) =>
        item[key]?.toString().toLowerCase().includes(term)
      )
    );
  }, [items, debouncedSearch, searchKeys]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / itemsPerPage)
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const start = (page - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(start, start + itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setPage(1);
  };

  const handlePageChange = (value) => {
    setPage(value);
  };

  return {
    searchInput,
    handleSearchChange,
    page,
    onPageChange: handlePageChange,
    totalPages,
    items: paginatedItems,
  };
}
