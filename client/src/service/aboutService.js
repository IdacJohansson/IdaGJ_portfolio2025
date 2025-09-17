import apiClient from "./apiClient.js";
import { ENDPOINT } from "./endpoints.js";

export const getAboutText = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.ABOUT);
    return response.data;
  } catch (error) {
    console.error("Error fetching about-text:", error);
    throw error;
  }
};
