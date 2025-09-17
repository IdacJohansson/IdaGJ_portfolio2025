import express from "express";
import {
  getTodayText,
  createTodayText,
  updateTodayText,
  deleteTodayText,
} from "../controller/today_controller.js";

const router = express.Router();

router.get("/", getTodayText);
router.post("/", createTodayText);
router.put("/:id", updateTodayText);
router.delete("/:id", deleteTodayText);

export default router;
