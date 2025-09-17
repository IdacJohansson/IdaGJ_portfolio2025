import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const WorkExperience = sequelize.define(
  "workExperience",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "work_experience",
  }
);

export default WorkExperience;
