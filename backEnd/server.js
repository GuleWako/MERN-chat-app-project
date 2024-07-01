import express, { json } from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import connectDatabase from "./db/connectToMongodb.js";
import messageRouter from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import userRouter from './routes/user.routes.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  connectDatabase();
  console.log(`server listen on port ${PORT}`);
});
