import express from "express";
import {
  getDevelopmentExperience,
  createDevelopmentExperience,
  updateDevelopmentExperience,
  deleteDevelopmentExperience,
} from "../controller/developmentExperience_controller.js";

const router = express.Router();

router.get("/", getDevelopmentExperience);
router.post("/", createDevelopmentExperience);
router.put("/:id", updateDevelopmentExperience);
router.delete("/:id", deleteDevelopmentExperience);

export default router;
