import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { buildBlogSlug } from "../utils/slug";
import icon1 from "../homePage/latestArticles/icons/icon1.svg";

const BlogCard = ({ post }) => {
  const href = `/blog/${buildBlogSlug(post)}`;

  return (
    <div className="rounded-[20px] h-auto md:h-[250px] bg-white shadow-sm border overflow-hidden flex flex-col md:flex-row mb-6 group hover:bg-[#EAEAEA]">
      <Link to={href} className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-[310px] h-full">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-center gap-3">
          <Link to={href}>
            <h3 className="text-[20px] sm:text-xl font-semibold font-[Exo] leading-[150%] group-hover:text-primary trasition-color duration-300">
              {post.title}
            </h3>
          </Link>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <img src={icon1} alt="icon" />
            <span>{post.date}</span>
          </div>

          <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
