import apiClient from "./apiClient.js";
import { ENDPOINT } from "./endpoints.js";

export const getTodayText = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.TODAY);
    return response.data;
  } catch (error) {
    console.error("Error fetching today-text:", error);
    throw error;
  }
};
