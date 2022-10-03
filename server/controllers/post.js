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
