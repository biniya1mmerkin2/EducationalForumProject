import express from "express";
import {
  postdata,
  getallpost,
  getSinglePost,
  getLatestPost,
  postreaction,
  postreactionremove,
} from "../controllers/post.js";

const post = express.Router();

post.post("/", postdata);
post.patch("/reaction/:id", postreaction);
post.patch("/reactionremove/:id", postreactionremove);
post.get("/:id", getallpost);
post.get("/singlepost/:id", getSinglePost);
post.get("/", getLatestPost);

export default post;
