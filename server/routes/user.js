import express from "express";
import { signin, signup } from "../controllers/user.js";
const user = express.Router();

user.post("/signin", signin);
user.post("/signup", signup);

export default user;
