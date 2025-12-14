import BlogList from "./BlogList";
import SidebarBlog from "./SidebarBlog";
import { posts, categories, tags, recentPosts } from "../data/data";
import HeaderOfLists from "../hooks/HeaderOfLists";
import { UseSearchPagination } from "../hooks/useSearchPagination";
import { Pagination } from "@mantine/core";

const BlogPage = () => {
  const {
    searchInput,
    handleSearchChange,
    page,
    onPageChange,
    totalPages,
    items: visiblePosts,
  } = UseSearchPagination(posts, {
    itemsPerPage: 5,
    searchKeys: ["title", "excerpt", "category"],
  });
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
        <HeaderOfLists
          title="All Articles"
          searchPlaceholder="Search articles..."
          searchValue={searchInput}
          onSearchChange={handleSearchChange}
        />

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: posts + pagination */}
          <div className="w-full lg:w-2/3">
            <BlogList posts={visiblePosts} />

            <div className="flex justify-center mt-6">
              <Pagination
                total={totalPages}
                value={page}
                onChange={onPageChange}
                size="md"
                radius="xl"
                withControls
                color="orange"
                className="select-none"
              />
            </div>
          </div>

          {/* RIGHT: sidebar */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start">
            <SidebarBlog
              categories={categories}
              recentPosts={recentPosts}
              tags={tags}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
