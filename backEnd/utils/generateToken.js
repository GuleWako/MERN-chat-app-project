import jwt from "jsonwebtoken";

const generateTokenAndsetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRETKEY, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.ENV !== 'development'
  });
};
export default generateTokenAndsetCookie;
