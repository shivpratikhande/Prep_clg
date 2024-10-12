import React from "react";
import Slidebar from "../components/Slidebar.jsx";

const Textbook = () => {
  const textbooks = [
    {
      id: 1,
      title: "Textbook 1: Cryptography and Network Security",
      description: "Comprehensive textbook on cryptography and network security.",
      downloadLink: "/path/to/textbook1.pdf",
    },
    {
      id: 2,
      title: "Textbook 2: Principles of Network Security",
      description: "Principles and methodologies in network security.",
      downloadLink: "/path/to/textbook2.pdf",
    },
    {
      id: 3,
      title: "Textbook 3: Advanced Encryption Techniques",
      description: "In-depth guide to modern encryption techniques.",
      downloadLink: "/path/to/textbook3.pdf",
    },
  ];

  return (
    <div className="flex space-x-2 min-h-screen">
      {/* Sidebar */}
      <Slidebar />

      {/* Textbook Content */}
      <div className="p-6 flex-grow rounded-xl border-2 border-black shadow-green-300 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 ">Textbooks</h1>

        <div className="grid grid-cols-1  md:grid-cols-2 text-black lg:grid-cols-3 gap-6">
          {textbooks.map((textbook) => (
            <div
              key={textbook.id}
              className="bg-white shadow-xl shadow-green-300 shadow-xl rounded-lg p-4 flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2">{textbook.title}</h2>
              <p className="mb-4 flex-grow">{textbook.description}</p>
             
              <a

                href="https://drive.google.com/file/d/1tnofXBKoQiFoNx6HL5smmyxrWeLQ8QqU/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
              >
                Open pdf
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Textbook;
