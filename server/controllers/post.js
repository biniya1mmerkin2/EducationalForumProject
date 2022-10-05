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
