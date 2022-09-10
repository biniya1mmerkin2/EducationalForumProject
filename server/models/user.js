import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  followers: { type: [String], default: [] },
  following: { type: [String], default: [] },
  university: { type: String, default: "" },
  profilePic: String,
});

const User = mongoose.model("userData", userSchema);
export default User;
