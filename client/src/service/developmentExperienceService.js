import apiClient from "./apiClient";
import { ENDPOINT } from "./endpoints";

export const getDevelopmentExperience = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.DEVELOPMENT_EXPERIENCE);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch development experiences data:", error);
    throw error;
  }
};