import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CreateExercise from "./components/CreateExercise";
import Exercises from "./components/Exercises";
import EditExercise from "./components/EditExercise";
import DeleteExercise from "./components/DeleteExercise";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes className="App">
        <Route path="/" element={<Exercises />} />
        <Route path="/createExercise" element={<CreateExercise />} />
        <Route path="/editExercise/:id" element={<EditExercise />} />
        <Route path="/deleteExercise/:id" element={<DeleteExercise />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
