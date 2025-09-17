import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Skills from "./skills_model.js";
import SkillsSubcategories from "./skillsSubcategories_model.js";
import SkillsCategories from "./skillsCategories_model.js";

const SkillsMap = sequelize.define(
  "SkillsMap",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Skills,
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: SkillsCategories,
        key: "id",
      },
    },
    subcategory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: SkillsSubcategories,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "skills_map",
  }
);
export default SkillsMap;
