import express from "express";
import mongoose from "mongoose";
import router from "./routes/ExerciseRoute.js";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const port = process.env.PORT || 5555;

app.use(express.json());
app.use("/exercise", router);

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
