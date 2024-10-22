import React, { useEffect, useState } from "react";
import Slidebar from "../components/Slidebar";
import axios from "axios";
import { url } from "../host";

const Questionpapers = () => {
  const [semesterId, setSemesterId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = localStorage.getItem('selectedSemesterId');
    if (value) {
      setSemesterId(value);
    }
  }, []);

  useEffect(() => {
    const fetchSemesters = async () => {
      if (!semesterId) return; // Ensure semesterId is present
      setLoading(true);
      try {
        const response = await axios.get(`${url}/api/semesters/${semesterId}/subjects`, {
          withCredentials: true
        });
        setQuestions(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSemesters();
  }, [semesterId]);

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
              key={paper.subjectName}
              className="bg-white shadow-xl shadow-green-300 rounded-lg p-4 flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2">{paper.subjectName}</h2>
              <p className="mb-4 flex-grow">{paper.description}</p>
              <a
                href={paper.questionPaper} // Ensure this is the correct property
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
