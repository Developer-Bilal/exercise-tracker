import { Exercises } from "../models/ExerciseModel.js";

export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercises.find({});

    if (!exercises) {
      return res.status(404).json({ message: "No exercises found!" });
    }

    res.status(200).json({ count: exercises.length, exercises });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

export const getExerciseById = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await Exercises.findById(id);

    if (!exercise) {
      return res.status(404).json({ message: "No exercise found!" });
    }

    res.status(200).json(exercise);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

export const createExercise = async (req, res) => {
  try {
    const { username, day, date, description, duration } = req.body;
    if (!username || !day || !date || !description || !duration) {
      res.status(404).json({ message: "Please Enter all fields!" });
    }

    const exercise = await Exercises.create({
      username,
      day,
      date,
      description,
      duration,
    });
    res.status(201).json({ message: "Successfully created!", exercise });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

export const updateExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const isExist = await Exercises.findById(id);
    if (!isExist) {
      return res.status(404).json({ message: "Exercise not Found!" });
    }

    const { username, day, date, description, duration } = req.body;
    if (!username || !day || !date || !description || !duration) {
      res.status(404).json({ message: "Please Enter all fields!" });
    }

    const exercise = await Exercises.findByIdAndUpdate(id, {
      username,
      day,
      date,
      description,
      duration,
    });
    res.status(201).json({ message: "Successfully updated!", exercise });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

export const deleteExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const isExist = await Exercises.findById(id);
    if (!isExist) {
      return res.status(404).json({ message: "Exercise not Found!" });
    }
    const exercise = await Exercises.findByIdAndDelete(id);
    return res.status(201).json({ message: "Successfully Deleted!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error!" });
  }
};
