import apiClient from "./apiClient";
import { ENDPOINT } from "./endpoints";

export const getProject = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.PROJECTS);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch project data:", error);
    throw error;
  }
};
