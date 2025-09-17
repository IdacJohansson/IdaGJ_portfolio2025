import apiClient from "./apiClient";
import { ENDPOINT } from "./endpoints";

export const getMappedSkills = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.SKILLS_MAP);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch mapped skills data:", error);
    throw error;
  }
};

export const getSkills = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.SKILLS);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch skills data:", error);
    throw error;
  }
};

export const getSkillsCategories = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.SKILLS_CATEGORIES);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch skills categories data:", error);
    throw error;
  }
};

export const getSkillsSubcategories = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.SKILLS_SUBCATEGORIES);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch skills subcategories data:", error);
    throw error;
  }
};
