import express from "express";
import { home, test } from "../controllers/index.controller.js";

const router = express.Router();

router.get("/", home);

router.post("/test", test);

export default router;