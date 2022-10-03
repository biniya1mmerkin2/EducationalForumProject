import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  postimage: String,
  likes: { type: [String], default: [] },
  comments: { type: [String], default: [] },
  userid: String,
  categoryid: String,
});

const Post = mongoose.model("postdata", postSchema);
export default Post;
