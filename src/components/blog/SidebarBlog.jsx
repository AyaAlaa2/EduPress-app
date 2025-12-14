import React from "react";
const SidebarBlog = ({ categories, recentPosts, tags }) => {
  return (
    <aside className="space-y-8 text-sm">
      {/* Category */}
      <section>
        <h2 className="font-semibold mb-4">Category</h2>

        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="flex items-center justify-between text-[13px] text-gray-700"
            >
              <span>{cat.name}</span>
              <span className="text-gray-400">{cat.count}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="font-semibold mb-4">Recent Posts</h2>

        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id} className="flex items-start gap-3">
              <div className="w-14 h-14 overflow-hidden rounded-md flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-[12px] leading-tight">
                {/* First line (small grey) */}
                <p className="text-gray-500">Best LearnPress</p>
                {/* Second line (orange like your screenshot) */}
                <p className="font-medium text-[#FF7A00]">WordPress Theme</p>
                {/* Third line (black, bold) */}
                <p className="font-semibold text-gray-900">
                  Collection For 2023
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Tags */}
      <section>
        <h2 className="font-semibold mb-4">Tags</h2>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-[11px] text-gray-700 hover:bg-gray-100"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default SidebarBlog;
