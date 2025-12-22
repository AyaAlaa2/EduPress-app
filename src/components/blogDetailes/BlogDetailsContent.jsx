import React from "react";
import icon1 from "../homePage/latestArticles/icons/icon1.svg";
import commentIcon from "./icons/commentIcon.svg";

const BlogDetailsContent = ({ post }) => {
  return (
    <section className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[10px] items-start">
        <p className="text-[30px] font-semibold font-[Exo]">{post.title}</p>

        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[4px]">
            <img src={icon1} alt="icon" loading="lazy" />
            <p className="text-[16px] text-[#555555]">{post.date}</p>
          </div>
          <div className="flex items-center gap-[4px]">
            <img src={commentIcon} alt="icon" loading="lazy" />
            <p className="text-[16px] text-[#555555]">
              {post.commentsCount} Comments
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="rounded-2xl overflow-hidden border bg-white mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[280px] object-cover"
          />
        </div>

        <div className="space-y-4 text-sm leading-7 text-muted-foreground bg-white border rounded-2xl p-6">
          {post.content?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {post.tags?.length ? (
            <div className="pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border text-xs bg-muted/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
