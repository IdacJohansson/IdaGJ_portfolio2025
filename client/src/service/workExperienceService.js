import apiClient from "./apiClient";
import { ENDPOINT } from "./endpoints";

export const getWorkExperiences = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.WORK_EXPERIENCE);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch work experiences data:", error);
    throw error;
  }
};
