import React from "react";
import BlogCard from "./BlogCard";
import ArticelsCard from "../homePage/latestArticles/ArticelsCard";

const BlogList = ({ posts, gridCount }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${gridCount} gap-6`}>
      {gridCount == 2
        ? posts.map((post) => <ArticelsCard key={post.id} article={post} />)
        : posts.map((post) => <BlogCard key={post.id} post={post} />)}
    </div>
  );
};

export default BlogList;
