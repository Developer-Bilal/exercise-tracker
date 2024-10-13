import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditExercise() {
  const [username, setUsername] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/exercise/${id}`)
      .then((res) => {
        setUsername(res.data.username);
        setDay(res.data.day);
        setDate(res.data.date);
        setDescription(res.data.description);
        setDuration(res.data.duration);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { username, day, date, description, duration };

    axios
      .put(`/exercise/update/${id}`, data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen mx-10">
      <div className="text-2xl font-bold mt-10 mb-2">Edit Exercise</div>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div>Day</div>
          <input
            className="p-2 mb-5 border border-gray-300 rounded"
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          />
          <div>Date</div>
          <input
            className="p-2 mb-5 border border-gray-300 rounded"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <div>Description</div>
          <input
            className="p-2 mb-5 border border-gray-300 rounded"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div>Duration</div>
          <input
            className="p-2 mb-5 border border-gray-300 rounded"
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
          <button className="bg-green-400 hover:bg-green-500 p-2 rounded">
            Edit Exercise
          </button>
        </form>
      </div>
    </div>
  );
}
