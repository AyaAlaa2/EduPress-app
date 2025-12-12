import React from "react";
import { categoryList } from "./categoryList";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {categoryList.map((catItem) => (
        <CategoryItem item={catItem} />
      ))}
    </div>
  );
};

export default Category;
