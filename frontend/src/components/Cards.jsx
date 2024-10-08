import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="my-3 p-3">
        <div className="card w-full sm:w-80 md:w-96 shadow-xl hover:scale-105 duration-300 transform mx-auto dark:bg-gray-700 mb-6"> 
          <figure>
            <img
              src={item.image} 
              alt={item.name}
              className="w-full h-auto object-cover" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name} 
              <div className="badge badge-secondary">New</div>
            </h2>
            <p>{item.title}</p> 
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.category}</div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
