import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Cards({ item }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = () => {
    navigate('/access'); // Navigate to the Access component
  };

  return (
    <div className="my-3 p-3">
      <div 
        className="card w-full sm:w-64 md:w-72 shadow-xl hover:scale-105 duration-300 transform mx-auto dark:bg-gray-700 mb-6 transition-shadow hover:shadow-green-300 cursor-pointer" 
        onClick={handleCardClick} // Add onClick event
      >
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="w-32 h-32 object-cover mx-auto rounded-lg"
          />
        </figure>
        <div className="card-body text-center flex flex-col items-center">
          <h2 className="card-title text-lg font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-600">{item.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
