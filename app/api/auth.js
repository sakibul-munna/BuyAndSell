import apiClient from "./clients";

const login = (email, password) => apiClient.post("/auth", { email, password });

export default {
  login,
};
