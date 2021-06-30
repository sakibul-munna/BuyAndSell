import apiClient from "./clients";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

const addListings = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.categoryId);
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    data.append("image", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return apiClient.post(endpoint, data, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export default {
  addListings,
  getListings,
};
