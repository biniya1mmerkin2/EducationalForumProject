import express from "express";
import { createPost, getCatagory } from "../controllers/forum.js";
const router = express.Router();

router.post("/", createPost);
router.get("/", getCatagory);

export default router;
