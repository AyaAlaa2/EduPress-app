import React from "react";
const SidebarBlog = ({ categories, recentPosts, tags }) => {
  return (
    <aside className="space-y-8 text-sm">
      <section>
        <h2 className="font-[Exo] text-[20px] font-semibold mb-5">Category</h2>

        <ul className="flex flex-col gap-[10px] items-start w-full">
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="w-full flex items-center justify-between text-[#555555] text-[16px]"
            >
              <span>{cat.name}</span>
              <span>{cat.count}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-[Exo] text-[20px] font-semibold mb-5">
          Recent Posts
        </h2>

        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id} className="flex items-start gap-3">
              <div className="w-[90px] h-[90px] overflow-hidden rounded-[12px] flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-[16px] font-medium">
                <p className="text-gray-500">Best LearnPress</p>
                <p>WordPress Theme</p>
                <p>Collection For 2023</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-[Exo] text-[20px] font-semibold mb-5">Tags</h2>

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
