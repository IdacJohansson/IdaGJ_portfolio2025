import apiClient from "./apiClient";
import { ENDPOINT } from "./endpoints";

export const getEducation = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.EDUCATION);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch education data:", error);
    throw error;
  }
};
