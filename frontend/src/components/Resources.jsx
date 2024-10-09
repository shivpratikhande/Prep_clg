import React from "react";
import Cards from "./Cards.jsx";
import list from "../../public/list.json";

function Resources() {
  return (
    <>
      <div className="max-x-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Helpful Resources for Students
          </h1>
          <p className="mt-5">
            For any student, getting access to textbooks,videos,question papers on dozens of subjects
            can be an expensive affair. It is also not practical to purchase
            entire textbooks just to access a small part of it for references.
            That's where online open textbook sources and other online libraries
            and vendors come into play. By offering textbooks on a variety of
            subjects for free or for a heavily discounted price, they are a boon
            for students. Below is a collection of such similar sites to access
            textbooks online.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Resources;
