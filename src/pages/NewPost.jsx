import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { getUsers } from "../../api/users";
import { createPost } from "../../api/posts";

function NewPost() {
  const users = useLoaderData();

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="card-header">
          <h1 className="heading-2">Create New Post</h1>
        </div>

        <Form
          className="card-content"
          method="post"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-lg)",
          }}
        >
          <div>
            <label
              htmlFor="title"
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "var(--spacing-xs)",
                color: "var(--text-primary)",
              }}
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              style={{
                width: "100%",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-sm) var(--spacing-md)",
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                fontSize: "1rem",
              }}
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label
              htmlFor="userId"
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "var(--spacing-xs)",
                color: "var(--text-primary)",
              }}
            >
              Author
            </label>
            <select
              name="userId"
              id="userId"
              required
              style={{
                width: "100%",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-sm) var(--spacing-md)",
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                fontSize: "1rem",
              }}
            >
              <option value="">Select an author</option>
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label
              htmlFor="body"
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "var(--spacing-xs)",
                color: "var(--text-primary)",
              }}
            >
              Body
            </label>
            <textarea
              name="body"
              id="body"
              rows="6"
              required
              style={{
                width: "100%",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-sm) var(--spacing-md)",
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                fontSize: "1rem",
                resize: "vertical",
                minHeight: "120px",
              }}
              placeholder="Write your post content here..."
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "var(--spacing-md)",
              paddingTop: "var(--spacing-md)",
            }}
          >
            <Link to="/posts" className="btn btn-secondary">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary">
              Save Post
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = parseInt(formData.get("userId"));

  try {
    const post = await createPost({ title, body, userId });
    return redirect(`/posts/${post.id}`);
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post. Please try again.");
  }
}

async function loader({ request: { signal } }) {
  return getUsers({ signal });
}

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
};
