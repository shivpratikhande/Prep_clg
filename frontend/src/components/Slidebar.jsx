import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Slidebar = () => {
  return (
    <div className="space-x-2 ">
       {/* Close overlay */}
      <label aria-label="close sidebar" className="drawer-overlay"></label>
      {/* Sidebar menu */}
      <ul className="menu rounded-xl max-h-full border-2 min-h-[700px] shadow-green-300 shadow-lg border-black text-xl text-base-content text-black min-h-full w-56 lg:w-64 p-4 space-y-4 flex justify-center">
        <li>
          {/* Navigation link to "Syllabus" */}
          <Link
            to="/syllabus"
            className="btn bg-green-300 text-black w-full hover:bg-green-400"
          >
            Syllabus
          </Link>
        </li>
        <li>
          {/* Navigation link to "Notes" */}
          <Link
            to="/notes"
            className="btn bg-green-300 text-black w-full hover:bg-green-400"
          >
            Notes
          </Link>
        </li>
        <li>
          {/* Navigation link to "Textbooks" */}
          <Link
            to="/textbook"
            className="btn bg-green-300 text-black w-full hover:bg-green-400"
          >
            Textbooks
          </Link>
        </li>
        <li>
          {/* Navigation link to "Questions" */}
          <Link
            to="/questionpapers"
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
