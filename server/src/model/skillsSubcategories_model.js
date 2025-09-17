import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import SkillsCategories from "./skillsCategories_model.js";

const SkillsSubcategories = sequelize.define(
  "SkillsSubcategories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: SkillsCategories,
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "skills_subcategories",
  }
);

export default SkillsSubcategories;
