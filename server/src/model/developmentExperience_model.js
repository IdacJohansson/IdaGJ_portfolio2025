import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const DevelopmentExperience = sequelize.define(
  "DevelopmentExperience",
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
    tableName: "development_experience",
  }
);

export default DevelopmentExperience;
