import mongoose from "mongoose";

const ExerciseSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    day: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export const Exercises = mongoose.model("Exercises", ExerciseSchema);
