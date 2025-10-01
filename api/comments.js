import { baseApi } from "./base";

export function getComments() {
  return baseApi.get("/comments").then((res) => res.data);
}

export function getComment(id) {
  return baseApi.get(`/comments/${id}`).then((res) => res.data);
}

export function createComment(data) {
  return baseApi.comment("/comments", data).then((res) => res.data);
}
