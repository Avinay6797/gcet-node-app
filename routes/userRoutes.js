import express from "express";
import userModel from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userRouter = express.Router();
const SECRET_KEY = "vinay";

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  const hashpassword = await bcrypt.hash(pass, 10);
  const result = await userModel.create({
    name: name,
    email: email,
    pass: 1234,
  });
  return res.json(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.json({ message: "Invalid user or password" });

  const isMatch = await bcrypt.compare(pass, user.pass);
  if (!isMatch) return res.json({ message: "Invalid user or password" });

  const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY);
  return res.json({ user, token });
});

export default userRouter;