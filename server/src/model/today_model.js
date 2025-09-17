import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Today = sequelize.define(
  "Today",
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
    tableName: "today_text",
  }
);

export default Today;
