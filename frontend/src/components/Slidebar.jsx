import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Slidebar = () => {
  const [semesterId, setSemesterId] = useState("");
  const [subjectID, setSubjectId] = useState("");

  useEffect(() => {
    const value = localStorage.getItem('selectedSemesterId');
    const sub = localStorage.getItem("subjectId");
    if (value) {
      setSemesterId(value);
    }
    if (sub) {
      setSubjectId(sub);
    }
  }, []);

  return (
    <div className="space-x-2">
      {/* Close overlay */}
      <label aria-label="close sidebar" className="drawer-overlay"></label>
      {/* Sidebar menu */}
      <ul className="menu rounded-xl max-h-full border-2 min-h-[700px] shadow-green-300 shadow-lg border-black text-xl text-base-content text-black min-h-full w-56 lg:w-64 p-4 space-y-4 flex justify-center">
        <li>
          <Link
            to={`/resources/${semesterId}/syllabus`}
            className="btn bg-green-300 text-black w-full hover:bg-green-400"
          >
            Syllabus
          </Link>
        </li>
        <li>
          <Link
            to={`/resources/${semesterId}/notes`}
            className="btn bg-green-300 text-black w-full hover:bg-green-400"
          >
            Notes
          </Link>
        </li>
        <li>
          <Link
            to="/resources/textbook"
            className="btn bg-green-300 text-black w-full hover:bg-green-400"
          >
            Textbooks
          </Link>
        </li>
        <li>
          <Link
            to={`/resources/${semesterId}/questionpapers`}
            className="btn bg-green-300 text-black w-full hover:bg-green-400"
          >
            Questions Papers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;
