import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { getUsers } from "../../api/users";
import { getPost, updatePost } from "../../api/posts";

function EditPost() {
  const { users, post } = useLoaderData();

  return (
    <div className="post-detail-container">
      {/* Header */}
      <div className="post-detail-header">
        <Link to="/posts" className="back-link">
          ← Back to Posts
        </Link>
        <div className="post-meta">
          <span className="post-id">✏️ Edit Post #{post.id}</span>
        </div>
      </div>

      {/* Main Form Card */}
      <div
        className="card"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          boxShadow: "var(--shadow-lg)",
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-primary)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <div
          className="card-header"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-accent), var(--bg-accent-hover))",
            color: "white",
            borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
            padding: "var(--spacing-xl)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "1.75rem",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-md)",
            }}
          >
            <span style={{ fontSize: "2rem" }}>✏️</span>
            Edit Post
          </h1>
          <p
            style={{
              margin: "var(--spacing-sm) 0 0 0",
              opacity: 0.9,
              fontSize: "1rem",
            }}
          >
            Update your post content and details
          </p>
        </div>

        <Form
          method="post"
          style={{
            padding: "var(--spacing-xl)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-xl)",
          }}
        >
          {/* Title Field */}
          <div className="form-group">
            <label
              htmlFor="title"
              style={{
                display: "block",
                fontWeight: "600",
                marginBottom: "var(--spacing-sm)",
                color: "var(--text-primary)",
                fontSize: "1.1rem",
              }}
            >
              📝 Post Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={post.title}
              required
              className="form-input"
              style={{
                width: "100%",
                border: "2px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-md) var(--spacing-lg)",
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                fontSize: "1.1rem",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
              placeholder="Enter an engaging title for your post..."
              onFocus={(e) => (e.target.style.borderColor = "var(--bg-accent)")}
              onBlur={(e) =>
                (e.target.style.borderColor = "var(--border-primary)")
              }
            />
          </div>

          {/* Author Field */}
          <div className="form-group">
            <label
              htmlFor="userId"
              style={{
                display: "block",
                fontWeight: "600",
                marginBottom: "var(--spacing-sm)",
                color: "var(--text-primary)",
                fontSize: "1.1rem",
              }}
            >
              👤 Author
            </label>
            <select
              name="userId"
              id="userId"
              required
              defaultValue={post.userId}
              style={{
                width: "100%",
                border: "2px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-md) var(--spacing-lg)",
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                fontSize: "1.1rem",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--bg-accent)")}
              onBlur={(e) =>
                (e.target.style.borderColor = "var(--border-primary)")
              }
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} (@{user.username})
                </option>
              ))}
            </select>
          </div>

          {/* Body Field */}
          <div className="form-group">
            <label
              htmlFor="body"
              style={{
                display: "block",
                fontWeight: "600",
                marginBottom: "var(--spacing-sm)",
                color: "var(--text-primary)",
                fontSize: "1.1rem",
              }}
            >
              💬 Post Content
            </label>
            <textarea
              name="body"
              id="body"
              rows="8"
              required
              defaultValue={post.body}
              style={{
                width: "100%",
                border: "2px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-md) var(--spacing-lg)",
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                fontSize: "1.1rem",
                resize: "vertical",
                minHeight: "200px",
                lineHeight: "1.6",
                transition: "border-color 0.2s ease",
              }}
              placeholder="Write your post content here...\n\nShare your thoughts, ideas, or stories with the community."
              onFocus={(e) => (e.target.style.borderColor = "var(--bg-accent)")}
              onBlur={(e) =>
                (e.target.style.borderColor = "var(--border-primary)")
              }
            />
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "var(--spacing-md)",
              paddingTop: "var(--spacing-lg)",
              borderTop: "1px solid var(--border-primary)",
              marginTop: "var(--spacing-lg)",
            }}
          >
            <Link
              to="/posts"
              className="btn btn-secondary"
              style={{
                padding: "var(--spacing-md) var(--spacing-xl)",
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                border: "2px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                transition: "all 0.2s ease",
              }}
            >
              ✖ Cancel
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: "var(--spacing-md) var(--spacing-xl)",
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: "var(--bg-accent)",
                color: "white",
                border: "2px solid var(--bg-accent)",
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              💾 Update Post
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

async function loader({ request: { signal }, params }) {
  const users = await getUsers({ signal });
  const post = await getPost(params.postId, { signal });

  return { users, post };
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = parseInt(formData.get("userId"));

  try {
    const post = await updatePost(postId, { title, body, userId });
    console.log("Post updated successfully:", post);
    
    // JSONPlaceholder simulates updates but doesn't persist them
    // The original post will still be returned when we navigate back
    // So we redirect to posts list with a success message
    return redirect(`/posts?updated=true&id=${postId}&title=${encodeURIComponent(title)}`);
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("Failed to update post. Please try again.");
  }
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
};
