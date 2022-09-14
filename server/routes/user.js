import express from "express";
import { signin, signup, forgetPassword } from "../controllers/user.js";
const user = express.Router();

user.post("/signin", signin);
user.post("/signup", signup);
user.post("/forgetpassword", forgetPassword);

export default user;
