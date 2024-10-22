import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Access = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle card click
  const handleCardClick = () => {
    navigate('/syllabus'); // Navigate to the Availability page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Chapters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Map through the chapters and add onClick */}
          {['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'].map((chapter, index) => (
            <div
              key={index}
              className="card p-4 shadow-md rounded-lg hover:shadow-green-300 transition-shadow duration-300 cursor-pointer"
              onClick={handleCardClick} // Add onClick event to each card
            >
              <h2 className="text-lg font-semibold text-center">{chapter}</h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Access;
