import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const existinguser = await User.findOne({ email });
    if (existinguser)
      return res
        .status(400)
        .json({ message: "user exists with this email change the email" });
    const hashedpassword = await bycrypt.hash(password, 12);
    const result = await User.create({
      name: `${firstName}${" "}${lastName}`,
      email: email,
      password: hashedpassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "secret", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await User.findOne({ email });
    if (!existinguser)
      return res.status(400).json({ message: "no user with this email" });
    const matchpassword = await bycrypt.compare(
      password,
      existinguser.password
    );
    if (!matchpassword) return res.json({ message: "your password not match" });
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      "secret",
      { expiresIn: "1hr" }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json(error);
  }
};
