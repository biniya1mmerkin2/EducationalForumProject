import mongoose from "mongoose";
import CreateCatagory from "../models/forum.js";

export const createPost = async (req, res) => {
  const post = req.body;
  const newpost = new CreateCatagory(post);
  try {
    await newpost.save();
    res.status(200).json(newpost);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getCatagory = async (req, res) => {
  try {
    const data = await CreateCatagory.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
