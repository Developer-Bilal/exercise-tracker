import express from "express";
import {
  getExercises,
  createExercise,
  updateExercise,
  deleteExercise,
  getExerciseById,
} from "../controllers/ExerciseController.js";

const router = express.Router();

router.get("/", getExercises);

router.post("/create", createExercise);

router.get("/:id", getExerciseById);

router.put("/update/:id", updateExercise);

router.delete("/delete/:id", deleteExercise);

export default router;
