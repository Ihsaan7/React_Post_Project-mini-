import axios from "axios";

export const baseApi = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com",
});
