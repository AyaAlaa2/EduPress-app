import React from "react";

const BlogDetailsContent = ({ post }) => {
  return (
    <section>
      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>

      {/* Meta */}
      <div className="text-sm text-muted-foreground mb-6">
        {post.date} • {post.readTime} • {post.commentsCount} Comments
      </div>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden border bg-white mb-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[280px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 text-sm leading-7 text-muted-foreground bg-white border rounded-2xl p-6">
        {post.content?.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

        {/* Tags */}
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
    </section>
  );
};

export default BlogDetailsContent;
