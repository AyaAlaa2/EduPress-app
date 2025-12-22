import BlogList from "./BlogList";
import SidebarBlog from "./SidebarBlog";
import { posts, categories, tags, recentPosts } from "../data/data";
import HeaderOfLists from "../hooks/HeaderOfLists";
import { UseSearchPagination } from "../hooks/useSearchPagination";
import { Pagination } from "@mantine/core";
import BreadCrumb from "../hooks/BreadCrumb";

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

  const href = [{ title: "Homepage", href: "/" }, { title: "Blog" }];
  return (
    <div className="min-h-screen">
      <BreadCrumb href={href} />
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-3/4">
            <HeaderOfLists
              title="All Articles"
              searchPlaceholder="Search ..."
              searchValue={searchInput}
              onSearchChange={handleSearchChange}
            />
            <BlogList posts={visiblePosts} />

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

          <div className="w-full lg:w-1/4 lg:sticky lg:top-5 self-start">
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
