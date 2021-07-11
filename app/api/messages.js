import apiClient from "./clients";

const send = (message, listingId) => {
  console.log("Ei je message", message);
  console.log("Ei je listing", listingId);
  apiClient.post("/messages", {
    message,
    listingId,
  });
};

export default {
  send,
};
