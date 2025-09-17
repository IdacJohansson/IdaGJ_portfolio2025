import express from "express";
import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controller/education_controller.js";

const router = express.Router();
router.get("/", getEducation);
router.post("/", createEducation);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

export default router;
