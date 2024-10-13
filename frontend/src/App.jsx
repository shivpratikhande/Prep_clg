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
import AdminPage from "./Admin/Admin.jsx";
import AdminDashboard from "./Admin/Admin.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources">
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="notes" element={<Notes />} />
          <Route path="textbook" element={<Textbook />} />
          <Route path="questionpapers" element={<Questionpapers />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/access" element={<Access />} />
      </Routes>
    </div>
  );
}

export default App;
