import express from "express";
import { postdata, getallpost } from "../controllers/post.js";

const post = express.Router();

post.post("/", postdata);
post.get("/:id", getallpost);

export default post;
