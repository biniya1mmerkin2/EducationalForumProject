import express from "express";
import { postdata } from "../controllers/post.js";

const post = express.Router();

post.post("/", postdata);

export default post;
