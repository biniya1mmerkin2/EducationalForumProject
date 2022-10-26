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
  updatesinglepost,
  deletesinglepost,
  getSimilarpost,
} from "../controllers/post.js";

const post = express.Router();

post.post("/", postdata);
post.patch("/reaction/:id", postreaction);
post.patch("/reactionremove/:id", postreactionremove);
post.get("/:id", getallpost);
post.get("/similarpost/:id", getSimilarpost);
post.get("/singlepost/:id", getSinglePost);
post.patch("/singlepost/:id", updatesinglepost);
post.delete("/singlepost/:id", deletesinglepost);
post.get("/", getLatestPost);
post.patch("/comment/:id", postComment);
post.patch("/commentreaction/:id", postCommentReaction);
post.patch("/commentreactionremove/:id", postCommentReactionremove);
export default post;
