import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Cards({ item , navi}) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = () => {
    navigate(`/syllabus`); // Navigate to the Access component
  };

  return (
    <div className="my-3 p-3">
      <div 
        className="card w-full sm:w-64 md:w-72 shadow-xl hover:scale-105 duration-300 transform mx-auto dark:bg-gray-700 mb-6 transition-shadow hover:shadow-green-300 cursor-pointer" 
        onClick={handleCardClick} // Add onClick event
      >
        <figure>
          <img
            src={"https://img.freepik.com/free-vector/flat-design-stack-books-illustration_23-2149380226.jpg?t=st=1727025340~exp=1727028940~hmac=5caf325d031c37b7eef3682e66789b77c7972b2c1939809e0640acfb530f2038&w=740"}
            alt={"image"}
            className="w-32 h-32 object-cover mx-auto rounded-lg"
          />
        </figure>
        <div className="card-body text-center flex flex-col items-center">
          <h2 className="card-title text-lg font-semibold">{item}</h2>
{/*           <p className="text-sm text-gray-600">{"dull form"}</p>       excluded
 */}        </div>
      </div>
    </div>
  );
}

export default Cards;
