import apiClient from "./clients";

const register = (pushToken) =>
  apiClient.post("/expoPushTokens", { token: pushToken });

export default { register };
