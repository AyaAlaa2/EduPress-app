import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import SidebarBlog from "../blog/SidebarBlog";
import BlogDetailsContent from "./BlogDetailsContent";
import BlogDetailsComments from "./BlogDetailsComments";
import { posts, categories, tags, recentPosts } from "../data/data";
import { getIdFromSlug } from "../Utils/slug";
import CommentForm from "../comments/CommentForm";
import BlogPrevNext from "./BlogPrevNext";
import BreadCrumb from "../hooks/BreadCrumb";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  const postId = getIdFromSlug(slug);

  const post = useMemo(() => {
    if (!postId) return null;
    return posts.find((p) => p.id === postId);
  }, [postId]);

  const href = [
    { title: "HomePage", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: post.title },
  ];

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-sm text-muted-foreground">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <BreadCrumb href={href} />

      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT */}
          <div className="w-full lg:flex-[2] space-y-8">
            <BlogDetailsContent post={post} />
            <BlogPrevNext post={post} posts={posts} />
            <BlogDetailsComments comments={post.comments || []} />
            <CommentForm
              title="Leave a Comment"
              subtitle="Your email address will not be published. Required fields are marked *"
              buttonText="Posts Comment"
            />
          </div>

          {/* RIGHT */}
          <div className="w-full lg:flex-[1] lg:max-w-xs lg:ml-auto lg:sticky lg:top-24">
            <SidebarBlog
              categories={categories}
              recentPosts={recentPosts}
              tags={tags}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
