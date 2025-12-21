import React, { useMemo } from "react";
import BlogNavCard from "./BlogNavCard";

const BlogPrevNext = ({ post, posts }) => {
  const { prevPost, nextPost } = useMemo(() => {
    const sorted = [...posts].sort((a, b) => a.id - b.id);
    const index = sorted.findIndex((p) => p.id === post.id);

    return {
      prevPost: index > 0 ? sorted[index - 1] : null,
      nextPost:
        index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : null,
    };
  }, [post.id, posts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <BlogNavCard post={prevPost} type="prev" />
      <BlogNavCard post={nextPost} type="next" />
    </div>
  );
};

export default BlogPrevNext;
