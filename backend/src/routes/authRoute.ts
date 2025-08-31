import express from "express";
// Example showcase import function
import { sendEmail } from "../controllers/authController.js";

const router = express.Router();

// Example showcase post
router.post("/send-email", sendEmail);

export default router;
