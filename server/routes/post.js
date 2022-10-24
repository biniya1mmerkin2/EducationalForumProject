import express from "express";
import {
  postdata,
  getallpost,
  getSinglePost,
  getLatestPost,
  postreaction,
  postreactionremove,
  postComment,
  postCommentReaction,
  postCommentReactionremove,
} from "../controllers/post.js";

const post = express.Router();

post.post("/", postdata);
post.patch("/reaction/:id", postreaction);
post.patch("/reactionremove/:id", postreactionremove);
post.get("/:id", getallpost);
post.get("/singlepost/:id", getSinglePost);
post.get("/", getLatestPost);
post.patch("/comment/:id", postComment);
post.patch("/commentreaction/:id", postCommentReaction);
post.patch("/commentreactionremove/:id", postCommentReactionremove);
export default post;
