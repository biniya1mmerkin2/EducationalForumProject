import Post from "../models/post.js";

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

export const getSinglePost = async (req, res) => {
  const param = req.params;
  try {
    const data = await Post.findById({ _id: param.id });
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