import express from "express";
import {
  getSkillCategory,
  createSkillCategory,
  updateSkillCategory,
  deleteSkillCategory,
} from "../controller/skillsCategories_controller.js";

const router = express.Router();

router.get("/", getSkillCategory);
router.post("/", createSkillCategory);
router.put("/:id", updateSkillCategory);
router.delete("/:id", deleteSkillCategory);

export default router;
