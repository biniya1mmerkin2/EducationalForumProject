import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import nodemailer from "nodemailer";
import jwt_decode from "jwt-decode";

export const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const existinguser = await User.findOne({ email });
    if (existinguser)
      return res
        .status(200)
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

export const getAllUser = async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
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

export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const existinguser = await User.findOne({ email });
    if (!existinguser)
      return res.status(200).json({
        message: "user with this email number is not found!",
        status: false,
      });

    const token = jwt.sign({ email: email }, process.env.SECRET, {
      expiresIn: "20000",
    });

    const update = await User.updateOne(
      { email: email },
      {
        passwordresettoken: token,
        passwordtokenexpiredata: Date.now() + 600000,
      }
    );
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Password Reset Link",
      text:
        "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
        "Please click on the following link, or paste this into your browser to complete the process within 2 minute of receiving this message.\n\n" +
        `http://localhost:3000/forgetpassword/${token}\n\n` +
        "If you didn`t requested this, Please ignore this email and your password will remain unchanged.\n",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(404).json({ message: error, status: false });
      } else {
        res
          .status(200)
          .json({ message: "Check your email now!", status: true });
      }
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

export const checktoken = async (req, res) => {
  const { token } = req.params;
  const data = req.body;
  
  

  try {
    const { email } = jwt_decode(token);

    const result = await User.findOne({
      email: email,
      passwordresettoken: token,
      passwordtokenexpiredata: { $gt: Date.now() },
    });

    if (result === null)
      return res.status(200).json({
        message: `Please,${email} Your session is expired resend request!`,
        status: false,
      });

    const hashedpassword = await bycrypt.hash(data.password, 12);
    const updated = await User.updateOne(
      { email: email },
      { $set: { password: hashedpassword } }
    );
    if (!updated)
      return res
        .status(200)
        .json({ message: "error in the server", status: false });

    res.status(200).json({
      message: `${email} your request is successfully finished!`,
      status: true,
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};;
