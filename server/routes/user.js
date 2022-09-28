import express from "express";
import {
  signin,
  signup,
  forgetPassword,
  checktoken,
  getAllUser,
  updateUserInfo,
} from "../controllers/user.js";
const user = express.Router();

user.post("/signin", signin);
user.post("/signup", signup);
user.get("/", getAllUser);
user.post("/forgetpassword", forgetPassword);
user.post("/forgetpassword/:token", checktoken);
user.patch("/update/:id", updateUserInfo);

export default user;
