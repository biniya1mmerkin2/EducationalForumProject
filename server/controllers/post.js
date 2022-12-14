import Post from "../models/post.js";
import PostBackUp from "../models/postbackup.js";

export const postdata = async (req, res) => {
  const { title, description, postimage, userid, categoryid } = req.body;
  try {
    const data = await Post.create({
      title: title,
      description: description,
      postimage: postimage,
      userid: userid,
      categoryid: categoryid,
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export const getallpost = async (req, res) => {
  const param = req.params;
  try {
    const data = await Post.find({ categoryid: param.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getallposts = async (req, res) => {
  try {
    const data = await Post.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSimilarpost = async (req, res) => {
  const param = req.params;
  try {
    const data = await Post.find({ categoryid: param.id }).limit(4);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSinglePost = async (req, res) => {
  const param = req.params;
  try {
    const data = await Post.findById({ _id: param.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatesinglepost = async (req, res) => {
  const param = req.params;
  const userdata = req.body;
  try {
    const data = await Post.findByIdAndUpdate(param.id, userdata, {
      returnDocument: "after",
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletesinglepost = async (req, res) => {
  const param = req.params;
  try {
    const data = await Post.findByIdAndDelete(param.id);
    const {
      id,
      title,
      description,
      postimage,
      likes,
      userid,
      categoryid,
      dateofpost,
      comments,
    } = data;
    const result = await PostBackUp.create({
      _id: id,
      title: title,
      description: description,
      postimage: postimage,
      likes: likes,
      userid: userid,
      categoryid: categoryid,
      dateofpost: dateofpost,
      comments: comments,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getLatestPost = async (req, res) => {
  try {
    const data = await Post.find({}).sort({ _id: -1 }).limit(3);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const postreaction = async (req, res) => {
  const param = req.params;
  const { userid } = req.body;
  try {
    const data = await Post.updateOne(
      { _id: param.id },
      { $push: { likes: userid } }
    );
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const postreactionremove = async (req, res) => {
  const param = req.params;
  const { userid } = req.body;
  try {
    const data = await Post.updateOne(
      { _id: param.id },
      { $pull: { likes: userid } }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json(error);
  }
};

export const postComment = async (req, res) => {
  const param = req.params;
  const { comment, userid } = req.body;
  try {
    const data = await Post.updateOne(
      { _id: param.id },
      { $push: { comments: { comment: comment, userid: userid } } }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const postCommentReaction = async (req, res) => {
  const param = req.params;
  const { userid, commentid } = req.body;
  try {
    const data = await Post.updateOne(
      { _id: param.id, "comments._id": commentid },
      { $push: { "comments.$.likes": userid } }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const postCommentReactionremove = async (req, res) => {
  const param = req.params;
  const { userid, commentid } = req.body;
  try {
    const data = await Post.updateOne(
      { _id: param.id, "comments._id": commentid },
      { $pull: { "comments.$.likes": userid } }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

