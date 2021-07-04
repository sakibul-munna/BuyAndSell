import apiClient from "./clients";

const register = (userInfo) => apiClient.post("/users", userInfo);

export default {
  register,
};
