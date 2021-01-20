import httpClient from "./httpClient";

// Auth endpoints
export const loginApi = (params) => httpClient.post("login", params);
export const registerApi = (params) => httpClient.post("register", params);

// Book endpoints
export const bookApi = {
  getAll: () => httpClient.get("books"),
  get: (id) => httpClient.get(`books/${id}`),
  post: (data) => httpClient.post("books", data),
  put: (data) => httpClient.put(`books/${data.bookId}`, data),
};
