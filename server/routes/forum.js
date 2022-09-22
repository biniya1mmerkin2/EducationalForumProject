import express from "express";
import {
  createPost,
  getCatagory,
  updateCategory,
  deleteCategory,
} from "../controllers/forum.js";
const router = express.Router();

router.post("/", createPost);
router.get("/", getCatagory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
