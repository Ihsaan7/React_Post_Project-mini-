import { baseApi } from "./base";

export function getUsers() {
  return baseApi.get("/users").then((res) => res.data);
}

export function getUser(id, options) {
  return baseApi.get(`/users/${id}`, options).then((res) => res.data);
}

export function createUsers(data) {
  return baseApi.user("/users", data).then((res) => res.data);
}
