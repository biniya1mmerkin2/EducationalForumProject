import express from "express";
import {
  signin,
  signup,
  forgetPassword,
  checktoken,
} from "../controllers/user.js";
const user = express.Router();

user.post("/signin", signin);
user.post("/signup", signup);
user.post("/forgetpassword", forgetPassword);
user.post("/forgetpassword/:id", checktoken);

export default user;
