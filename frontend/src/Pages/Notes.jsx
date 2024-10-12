import React from "react";
import Slidebar from "../components/Slidebar";
import lisst from "../../public/lisst.json"

const Notes = () => {
  const notes = [
    {
      id: 1,
      title: "Introduction to Network Security",
      description: "Introduction and basics of Network Security.",
      downloadLink: "/path/to/chapter1-note1.pdf",
    },
    {
      id: 2,
      title: "Classical Encryption Techniques",
      description: "Detailed notes on classical encryption techniques.",
      downloadLink: "/path/to/chapter1-note2.pdf",
    },
    {
      id: 3,
      title: "Steganography",
      description: "Notes on the basics of steganography.",
      downloadLink: "/path/to/chapter1-note3.pdf",
    },
  ];

  // Sample video data
  const videos = [
    {
      id: 1,
      title: "Understanding Network Security",
      videoLink: "https://www.youtube.com/watch?v=example1",
    },
    {
      id: 2,
      title: "Classical Encryption Techniques Explained",
      videoLink: "https://www.youtube.com/watch?v=example2",
    },
    {
      id: 3,
      title: "Basics of Steganography",
      videoLink: "https://www.youtube.com/watch?v=example3",
    },
  ];

  const pdfUrl = "https://drive.google.com/file/d/1tnofXBKoQiFoNx6HL5smmyxrWeLQ8QqU/preview"

  const openPdf = (event) => {
    event.preventDefault(); 
    window.open(pdfUrl, '_blank', 'width=800,height=600'); 
};

  return (
    <div className="flex space-x-2 min-h-screen">
      {/* Sidebar */}
      <Slidebar />

      {/* Notes Content */}
      <div className="p-6 flex-grow rounded-xl border-2 border-black shadow-green-300 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Notes</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black ">
          {lisst.map((note) => (
            <div key={note.id} className="bg-white shadow-xl rounded-lg p-4 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{note.name}</h2>
              <p className="mb-4 flex-grow">{note.description}</p>
              {/* <a
                href={note.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
              >
                Open PDF
              </a> */}

              <iframe src={pdfUrl}
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
                frameborder="0" width="100%" height="500" onClick={openPdf}>
                Open pdf
              </iframe>

            </div>
          ))}
        </div>

        {/* Videos Section */}
        <h1 classNsyllabusame="text-3xl font-bold mt-10 mb-6">Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black ">
          {lisst.map((video) => (
            <div key={video.id} className="bg-white shadow-xl rounded-lg p-4 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{video.name}</h2>
              <a
                href={video.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
              >
                Watch Video
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
