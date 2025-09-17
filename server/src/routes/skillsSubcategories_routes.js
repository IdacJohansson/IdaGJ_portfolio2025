import express from "express";
import {
  getSkillSubcategories,
  createSkillSubcategory,
  updateSkillSubcategory,
  deleteSkillSubcategory,
} from "../controller/skillsSubcategories_controller.js";

const router = express.Router();

router.get("/", getSkillSubcategories);
router.post("/", createSkillSubcategory);
router.put("/:id", updateSkillSubcategory);
router.delete("/:id", deleteSkillSubcategory);

export default router;
