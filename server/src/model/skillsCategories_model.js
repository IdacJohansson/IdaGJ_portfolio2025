import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const SkillsCategories = sequelize.define(
  "SkillsCategories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "skills_categories",
  }
);

export default SkillsCategories;
