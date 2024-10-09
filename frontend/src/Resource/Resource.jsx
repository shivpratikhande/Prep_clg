import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Resources from "../components/Resources";

function Resource() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="min-h-screen">
          <Resources />
        </div>
      </div>
    </>
  );
}

export default Resource;
