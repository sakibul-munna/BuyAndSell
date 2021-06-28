import apiClient from "./clients";

const endpoint = "/listings";

export default getListings = () => apiClient.get(endpoint);
