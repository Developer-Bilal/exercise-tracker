import express from "express";
import mongoose from "mongoose";
import router from "./routes/ExerciseRoute.js";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const port = process.env.PORT || 5555;

app.use(express.json());
app.use("/exercise", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Home type /exercise in path to get data!" });
});

app.get("*", (req, res) => {
  res.status.json({ message: "This route does not exist!" });
});

const start = async () => {
  const connectDB = await mongoose.connect(process.env.MONGO_URI);

  if (!connectDB) {
    console.log("Database Connection Failed!");
  }

  console.log("Database Connected!");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

start();
