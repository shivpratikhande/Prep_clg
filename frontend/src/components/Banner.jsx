import React from "react";
import banner from "../../public/Banner.png";
import ChatBot from "../../public/ChatBot.png";
import Student from "../../public/Student.png";

function Banner() {
  return (
    //issue
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row pt-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-6xl font-bold">STUDY SMARTER, STUDY WISER</h1>
            <div>
              <p className="mt-12 text-lg">Grow Smarter Together</p>
            </div>
            <label className="input input-bordered flex items-center gap-2 bg-green-300 text-black">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 ml-10">
          <img src={banner} className="w-92 h-92" alt="img" />
        </div>
      </div>

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="order-1 w-full md:w-1/2">
          <img src={Student} className="w-80 h-80 ml-32 mt-20" alt="img" />
        </div>
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-5xl font-bold">
              100M STUDENTS SAVED THEIR DAY
            </h1>
            <div>
              <p className="mt-10 text-lg">New Material Uploaded EveryDay</p>
              <div className="flex justify-between space-x-4">
                <div className="text-center">
                  <h1 className="text-3xl font-bold">30M</h1>
                  <p className="text-lg mt-1">Resources</p>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">115k</h1>
                  <p className="text-lg mt-1">Institutes</p>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold">60M</h1>
                  <p className="text-lg mt-1">Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-20">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-6xl font-bold">LEARN WITH CHATBOT</h1>
            <div>
              <p className="mt-12 text-lg">
                Different Way to Explore more Possibilities
              </p>
            </div>
            <button className="btn btn-wide bg-green-300 text-black hover:bg-green-300 hover:text-white">
              Try ChatBot
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 ml-10 mb-10">
          <img src={ChatBot} className="w-92 h-92" alt="img" />
        </div>
      </div>
    </>
  );
}

export default Banner;
