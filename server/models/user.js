import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  followers: { type: [String], default: [] },
  following: { type: [String], default: [] },
  university: { type: String, default: "" },
  joindate: { type: Date, default: Date.now() },
  profilePic: String,
  phonenumber: String,
  passwordresettoken: String,
  passwordtokenexpiredata: Date,
});

const User = mongoose.model("userData", userSchema);
export default User;
