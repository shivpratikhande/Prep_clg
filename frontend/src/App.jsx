import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/home.jsx";
import Resources from "./Resource/Resource.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Access from "./components/Access.jsx";
import Syllabus from "./Pages/Syllabus.jsx";
import Notes from "./Pages/Notes.jsx";
import Textbook from "./Pages/Textbook.jsx";
import Questionpapers from "./Pages/Questionpapers.jsx";
import About from "./components/About.jsx";

function App() {
  return (
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/access" element={<Access />} />
          <Route path="/Syllabus" element={<Syllabus />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Textbook" element={<Textbook />} />
          <Route path="/Questionpapers" element={<Questionpapers />} />
        </Routes>
      </div>
  );
}

export default App;
