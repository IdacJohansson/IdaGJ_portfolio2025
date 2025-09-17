import express from "express";
import {
  getContactInfo,
  createContactInfo,
  updateContactInfo,
  deleteContactInfo,
} from "../controller/contact_controller.js";

const router = express.Router();

router.get("/", getContactInfo);
router.post("/", createContactInfo);
router.put("/:id", updateContactInfo);
router.delete("/:id", deleteContactInfo);

export default router;
