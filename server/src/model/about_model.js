import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const About = sequelize.define(
  "About",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paragraph: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "about_text",
  }
);

export default About;
