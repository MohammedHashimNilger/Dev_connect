import express from "express";
import {
  getUserProfile,
  updateProfile,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public route
router.get("/:id", getUserProfile);

// Protected route
router.patch("/me", verifyToken, updateProfile);

export default router;
