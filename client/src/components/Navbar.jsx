import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-100 ">
      <div className="logo w-1/5 ">
        <div className="font-bold text-xl">Exercise Tracker</div>
      </div>
      <ul className="flex items-center justify-start gap-20">
        <li>
          <Link to="/">Exercises</Link>
        </li>
        <li>
          <button className="bg-green-400 hover:bg-green-500 p-2 rounded">
            <Link to="/createExercise">Create Exercise</Link>
          </button>
        </li>
        {/* <li>
          <Link to="/createUser">Create User</Link>
        </li> */}
      </ul>
    </div>
  );
}
