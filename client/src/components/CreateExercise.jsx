import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateExercise() {
  const [username, setUsername] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { username, day, date, description, duration };
    axios
      .post("/exercise/create", data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen mx-10">
      <div className="text-2xl font-bold mt-10 mb-2">Create Exercise</div>
      <div className="border border-gray-300 rounded-full"></div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-2 w-2/4 my-10 p-6 shadow-md border border-gray-300"
        >
          <div>Username</div>
          <input
            className="p-2 mb-5 border border-gray-300 rounded"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div>Day</div>
          <input
            className="p-2 mb-5 border border-gray-300 rounded"
            type="text"
            onChange={(e) => setDay(e.target.value)}
            required
          />
          <div>Date</div>
          <input
            className="p-2 mb-5 border border-gray-300 rounded"
            type="text"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <div>Description</div>
          <input
            className="p-2 mb-5 border border-gray-300 rounded"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div>Duration</div>
          <input
            className="p-2 mb-5 border border-gray-300 rounded"
            type="text"
            onChange={(e) => setDuration(e.target.value)}
            required
          />
          <button className="bg-green-400 hover:bg-green-500 p-2 rounded">
            Create Exercise
          </button>
        </form>
      </div>
    </div>
  );
}
