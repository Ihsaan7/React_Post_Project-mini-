import { baseApi } from "./base";

export function getPosts() {
  return baseApi.get("/posts").then((res) => res.data);
}

export function getPost(id) {
  return baseApi.get(`/posts/${id}`).then((res) => res.data);
}

export function createPost(data) {
  return baseApi.post("/posts", data).then((res) => res.data);
}
