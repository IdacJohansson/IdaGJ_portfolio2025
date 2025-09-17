import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Skills = sequelize.define(
  "Skills",
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
    tableName: "skills",
  }
);

export default Skills;
