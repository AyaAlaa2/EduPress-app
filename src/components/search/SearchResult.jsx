import { useParams } from "react-router-dom";
import { posts, courses } from "../data/data";
import CourseCard from "../courses/CourseCard";
import { UseSearchPagination } from "../hooks/useSearchPagination";
import { Pagination } from "@mantine/core";

const SearchResult = () => {
  const { query } = useParams();

  if (!query) {
    return (
      <p className="text-center text-gray-500 text-lg mt-8">
        Please enter a search term.
      </p>
    );
  }

  const normalizedQuery = query.toLowerCase();
  const filteredCourses =
    courses.filter(
      (course) =>
        course.title.toLowerCase().includes(normalizedQuery) ||
        course.category.toLowerCase().includes(normalizedQuery) ||
        course.instructor.toLowerCase().includes(normalizedQuery)
    ) ||
    posts.filter(
      (post) =>
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery)
    );

  const { page, onPageChange, totalPages } = UseSearchPagination(
    filteredCourses,
    {
      itemsPerPage: 6,
      searchKeys: ["title", "category", "instructor"],
    }
  );

  return (
    <div className="min-h-[300px] mt-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 pt-8">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">
            Search results for:
            <span className="text-primary font-semibold capitalize">
              {" "}
              {query}{" "}
            </span>
          </h2>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 min-h-[100px]">
              {filteredCourses.map((course) => (
                <CourseCard course={course} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-8">
              No matching results found.
            </p>
          )}

          <div className="flex justify-center mt-6">
            <Pagination
              total={totalPages}
              value={page}
              onChange={onPageChange}
              size="md"
              radius="xl"
              withControls
              color="black"
              className="select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
