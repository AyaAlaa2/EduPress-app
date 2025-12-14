import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { buildBlogSlug } from "../Utils/slug";

const BlogCard = ({ post }) => {
  const href = `/blog/${buildBlogSlug(post)}`;

  return (
    <div className="rounded-3xl bg-white shadow-sm border overflow-hidden flex flex-col md:flex-row mb-6">
      <Link to={href} className="w-full md:w-1/2 h-48 sm:h-56 md:h-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </Link>

      {/* CONTENT SECTION */}
      <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-center gap-3">
        {/* TITLE */}
        <Link to={href}>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug hover:underline">
            {post.title}
          </h3>
        </Link>

        {/* META DATA */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          <Calendar size={16} className="text-primary" />
          <span>{post.date}</span>
          <span>• {post.readTime}</span>
        </div>

        {/* EXCERPT */}
        <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;