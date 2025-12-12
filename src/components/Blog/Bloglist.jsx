import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
