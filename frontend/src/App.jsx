import React from "react";
import Home from "./Home/home.jsx";
import Resources from "./Resource/Resource.jsx";
import Login from "./components/Login.jsx";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register.jsx";

function App() {
  return (
    <>
      {/* <Home/> */}
      <div className="min-h-screen">
        {" "}
        {/* Ensures background is white */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
