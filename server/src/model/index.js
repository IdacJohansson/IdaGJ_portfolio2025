import sequelize from "../config/db.js";
import Skills from "./skills_model.js";
import SkillsCategories from "./skillsCategories_model.js";
import SkillsSubcategories from "./skillsSubcategories_model.js";
import SkillsMap from "./skillsMap_model.js";
import DevelopmentExperience from "./developmentExperience_model.js";
import Education from "./education_model.js";
import WorkExperience from "./workExperience_model.js";
import Today from "./today_model.js";
import About from "./about_model.js";
import Projects from "./projects_modal.js";
import Contact from "./contact_model.js";

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

export {
  Skills,
  SkillsCategories,
  SkillsSubcategories,
  SkillsMap,
  DevelopmentExperience,
  Education,
  WorkExperience,
  Today,
  About,
  Projects,
  Contact,
  syncModels,
  sequelize
};
