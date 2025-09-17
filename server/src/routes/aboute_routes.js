import express from "express";
import {
  getAboutText,
  createAboutText,
  updateAboutText,
  deleteAboutText,
} from "../controller/about_controller.js";

const router = express.Router();

router.get("/", getAboutText);
router.post("/", createAboutText);
router.put("/:id", updateAboutText);
router.delete("/:id", deleteAboutText);

export default router;
