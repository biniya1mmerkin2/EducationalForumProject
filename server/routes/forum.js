import express from "express";
import {
  createPost,
  getCatagory,
  updateCategory,
} from "../controllers/forum.js";
const router = express.Router();

router.post("/", createPost);
router.get("/", getCatagory);
router.patch("/:id", updateCategory);

export default router;
