import apiClient from "./apiClient";
import { ENDPOINT } from "./endpoints.js";

export const getContactText = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.CONTACT);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact info:", error);
    throw error;
  }
};
