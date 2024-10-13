import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("/exercise")
      .then((res) => {
        setExercises(res.data.exercises);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setExercises]);

  return (
    <div className="min-h-screen mx-10">
      <div className="text-2xl font-bold mt-10 mb-2">Exercises</div>
      <div className="border border-gray-300 rounded-full"></div>
      <table className="w-full text-center my-10">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase ">
            <th className="py-3 px-4 border border-gray-300">Username</th>
            <th className="py-3 px-4 border border-gray-300">Day</th>
            <th className="py-3 px-4 border border-gray-300">Date</th>
            <th className="py-3 px-4 border border-gray-300">Description</th>
            <th className="py-3 px-4 border border-gray-300">Duration</th>
            <th className="py-3 px-4 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => {
            return (
              <tr key={exercise._id}>
                <td className="py-3 px-4 border border-gray-300">
                  {exercise.username}
                </td>
                <td className="py-3 px-4 border border-gray-300">
                  {exercise.day}
                </td>
                <td className="py-3 px-4 border border-gray-300">
                  {exercise.date}
                </td>
                <td className="py-3 px-4 border border-gray-300">
                  {exercise.description}
                </td>
                <td className="py-3 px-4 border border-gray-300">
                  {exercise.duration}
                </td>
                <td className="py-3 px-4 border border-gray-300">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      to={`/editExercise/${exercise._id}`}
                      className="text-green-400"
                    >
                      Edit
                    </Link>
                    <div className="h-5 border border-gray-500"></div>
                    <Link
                      to={`/deleteExercise/${exercise._id}`}
                      className="text-red-400"
                    >
                      Delete
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
