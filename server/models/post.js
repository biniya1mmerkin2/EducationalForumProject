import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  postimage: String,
  likes: { type: [String], default: [] },
  comments: [
    {
      userid: String,
      comment: String,
      likes: { type: [String], default: [] },
      replay: [],
      date: { type: Date, default: Date.now() },
    },
  ],
  userid: String,
  categoryid: String,
  dateofpost: { type: Date, default: Date.now() },
});

const Post = mongoose.model("postdata", postSchema);
export default Post;
