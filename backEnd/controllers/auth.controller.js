import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndsetCookie from "../utils/generateToken.js";
const signup = async (req, res) => {
  try {
    const { fullName, userName, password, gender, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: null,
    });
    if (newUser) {
      generateTokenAndsetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        id: newUser._id,
        message: "Registered successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = bcrypt.compare(password, user.password);
    if (!user | !isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credential" });
    }
    generateTokenAndsetCookie(user._id, res);
    res.status(200).json({
      id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      gender: user.gender,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { signup, login, logout };
