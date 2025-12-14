import React from "react";

const BlogDetailsComments = ({ comments }) => {
  return (
    <section className="space-y-8">
      {/* Comments list */}
      <div className="bg-white border rounded-2xl p-6">
        <h2 className="font-semibold mb-4">Comments ({comments.length})</h2>

        {comments.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No comments yet. Be the first to comment.
          </p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{comment.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {comment.date}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {comment.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDetailsComments;
