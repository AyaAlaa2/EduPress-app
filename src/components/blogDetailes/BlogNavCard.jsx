import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildBlogSlug } from "../Utils/slug";
const BlogNavCard = ({ post, type = "prev" }) => {
  if (!post) {
    return (
      <div
        className={`bg-white border rounded-2xl p-4 opacity-50 ${
          type === "next" ? "text-right" : ""
        }`}
      >
        <p className="text-xs text-muted-foreground">
          {type === "prev" ? "Prev Articles" : "Next Articles"}
        </p>
        <p className="text-sm font-semibold mt-1">
          {type === "prev" ? "No previous post" : "No next post"}
        </p>
      </div>
    );
  }
  const isPrev = type === "prev";
  return (
    <Link
      to={`/blog/${buildBlogSlug(post)}`}
      className={`group bg-white border rounded-2xl p-4 flex items-center gap-4
                  transition hover:shadow-sm
                  ${isPrev ? "justify-start" : "justify-between"}`}
    >
      {isPrev && (
        <div
          className="h-10 w-10 rounded-xl border flex items-center justify-center
                     transition-colors group-hover:border-primary group-hover:bg-primary/10"
        >
          <ChevronLeft className="h-4 w-4 transition-colors group-hover:text-primary" />
        </div>
      )}

      {/* TEXT */}
      <div className={`min-w-0 ${isPrev ? "text-left" : "text-right flex-1"}`}>
        <p className="text-xs text-muted-foreground mb-1">
          {isPrev ? "Prev Articles" : "Next Articles"}
        </p>
        <p className="text-sm font-semibold leading-snug line-clamp-2">
          {post.title}
        </p>
      </div>

      {/* RIGHT ARROW (Next) */}
      {!isPrev && (
        <div
          className="h-10 w-10 rounded-xl border flex items-center justify-center
                     transition-colors group-hover:border-primary group-hover:bg-primary/10"
        >
          <ChevronRight className="h-4 w-4 transition-colors group-hover:text-primary" />
        </div>
      )}
    </Link>
  );
};

export default BlogNavCard;
