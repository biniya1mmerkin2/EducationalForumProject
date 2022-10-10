import express from "express";
import { postdata, getallpost, getSinglePost } from "../controllers/post.js";

const post = express.Router();

post.post("/", postdata);
post.get("/:id", getallpost);
post.get("/singlepost/:id", getSinglePost);

export default post;
