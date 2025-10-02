import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { getUsers } from "../../api/users";
import { getPost, updatePost } from "../../api/posts";

function EditPost() {
  const { users, post } = useLoaderData();

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="card-header">
          <h1 className="heading-2">Edit Post</h1>
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
              defaultValue={post.title}
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
              {users.map((user) => (
                <option
                  key={user.id}
                  value={user.id}
                  selected={user.id === post.userId}
                >
                  {user.name}
                </option>
              ))}
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
              defaultValue={post.body}
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
    return redirect(`/posts/${postId}`);
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
