import React, { useEffect, useState } from "react";
import Slidebar from "../components/Slidebar";
import qpData from '../../public/QP.json'; // Adjust the path if needed

const Questionpapers = () => {
  const [semesterId, setSemesterId] = useState("");
  const [questions, setQuestions] = useState(qpData.questionPapers || []); // Load questions from JSON
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Set loading to false since we're not fetching from an API

  useEffect(() => {
    const value = localStorage.getItem('selectedSemesterId');
    if (value) {
      setSemesterId(value);
    }
  }, []);

  return (
    <div className="flex space-x-2 min-h-screen">
      {/* Sidebar */}
      <Slidebar />

      {/* Question Papers Content */}
      <div className="p-6 flex-grow rounded-xl border-2 border-black shadow-green-300 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Question Papers</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black gap-6">
          {questions.map((paper) => (
            <div
              key={paper.title} // Using title as key
              className="bg-white shadow-xl shadow-green-300 rounded-lg p-4 flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2">{paper.title}</h2>
              <a
                href={paper.pdfUrl} // Ensure this is the correct property
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
              >
                Open PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questionpapers;
