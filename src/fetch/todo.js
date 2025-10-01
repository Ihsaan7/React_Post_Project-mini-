import { baseApi } from "./base";

export function getTodo(options) {
  return baseApi
    .get(`users/${userId}/todos`, { options })
    .then((res) => res.data);
}
