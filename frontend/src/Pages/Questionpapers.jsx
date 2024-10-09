import React from "react";
import Slidebar from "../components/Slidebar";

const Questionpapers = () => {
  // Example question papers data for the chapter
  const questionPapers = [
    {
      id: 1,
      title: "Midterm Exam 2023",
      description: "Midterm exam questions for Chapter 1.",
      downloadLink: "/path/to/midterm-2023.pdf",
    },
    {
      id: 2,
      title: "Final Exam 2022",
      description: "Final exam questions for Chapter 1.",
      downloadLink: "/path/to/final-2022.pdf",
    },
    {
      id: 3,
      title: "Practice Questions",
      description: "Practice questions for Chapter 1.",
      downloadLink: "/path/to/practice-questions.pdf",
    },
  ];

  return (
    <div className="flex space-x-2 min-h-screen ">
      {/* Sidebar */}
      <Slidebar />

      {/* Question Papers Content */}
      <div className="p-6 flex-grow rounded-xl border-2 border-black shadow-green-300 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Question Papers</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black gap-6">
          {questionPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white shadow-xl shadow-green-300 rounded-lg p-4 flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2">{paper.title}</h2>
              <p className="mb-4 flex-grow">{paper.description}</p>
              <a
                href={paper.downloadLink}
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
