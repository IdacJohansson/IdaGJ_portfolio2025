import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { sequelize, syncModels } from "./src/model/index.js";

const PORT = process.env.PORT;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    await syncModels();
    console.log("Models synchronized successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
start();
