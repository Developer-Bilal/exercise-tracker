import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteExercise() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`/exercise/delete/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen mx-10">
      <div className="text-2xl font-bold mt-10 mb-2">Delete Exercise</div>
      <div className="border border-gray-300 rounded-full"></div>
      <div className="flex items-center justify-center mt-20">
        <button
          className="text-2xl bg-red-400 hover:bg-red-500 px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Confirm Delete!
        </button>
      </div>
    </div>
  );
}
