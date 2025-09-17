import express from "express";
import {
  getSkillsMap,
  getSkillsMapQuery,
} from "../controller/skillsMap_controller.js";

const router = express.Router();
router.get("/", getSkillsMap);
router.get("/map", getSkillsMapQuery);

export default router;
