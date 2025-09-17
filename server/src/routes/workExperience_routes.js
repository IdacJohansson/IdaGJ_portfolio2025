import express from "express";
import {
  getWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
  createWorkExperience,
} from "../controller/workExperience_controller.js";

const router = express.Router();

router.get("/", getWorkExperience);
router.post("/", createWorkExperience);
router.put("/:id", updateWorkExperience);
router.delete("/:id", deleteWorkExperience);

export default router;
