import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Separator } from "../../ui/separator";
import ReviewAvarage from "./ReviewAvarage";
import Comments from "./Comments";

const Reviews = ({ reviewsStats, reviewsList }) => {
  const itemsPerPage = 3;
  const [pageNumber, setPageNumber] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  const pagesVisited = pageNumber * itemsPerPage;
  const displayReviews = reviewsList.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );

  const pageCount = Math.ceil(reviewsList.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="p-[5px] flex flex-col items-start w-full gap-[20px]">
        <ReviewAvarage stars={stars} reviewsStats={reviewsStats} />
        <Separator />
        <Comments displayReviews={displayReviews} />
      </div>
      <div className="flex justify-center mt-4">
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="flex gap-3"
          pageClassName="border rounded-full w-[48px] h-[48px] flex items-center justify-center cursor-pointer"
          activeClassName="bg-black text-white"
        />
      </div>
    </div>
  );
};

export default Reviews;
