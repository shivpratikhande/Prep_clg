import React, { useEffect, useState } from "react";
import Slidebar from "../components/Slidebar";
import lisst from "../../public/lisst.json";
import axios from "axios";

const Notes = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const pdfUrl = "https://drive.google.com/file/d/1tnofXBKoQiFoNx6HL5smmyxrWeLQ8QqU/preview";

  const [chapter, setChapter] = useState([]);
  const [err, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const openPdf = (event) => {
    event.preventDefault();
    setIsPdfOpen(true); // Open PDF viewer
  };

  const closePdf = () => {
    setIsPdfOpen(false); // Close PDF viewer
  };

  useEffect(() => {
    const fetchSemesters = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get('http://localhost:3000/api/semesters/670729f6f042ac4ef2f3a8df/subjects/67072a3ef042ac4ef2f3a8eb/chapters');
        
        // Assuming response.data contains the chapters
        setChapter(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchSemesters();
  }, []);

  console.log(chapter)

  return (
    <div className="flex space-x-3 min-h-screen">
      {/* Sidebar */}
      <Slidebar />

      {/* Notes Content */}
      <div className="p-6 flex-grow rounded-xl border-2 border-black shadow-green-300 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Notes</h1>

        {/* Loading State */}
        {loading && <p>Loading chapters...</p>}
        {err && <p className="text-red-500">{err}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
          {chapter.map((note) => (
            <div key={note.id} className="bg-white shadow-xl rounded-lg p-4 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{note.name}</h2>
              <p className="mb-4 flex-grow">{note.description}</p>
              <button
                onClick={openPdf}
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
              >
                Open PDF
              </button>
            </div>
          ))}
        </div>

        {/* PDF Viewer Modal */}
        {isPdfOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg p-4">
              <button onClick={closePdf} className="absolute top-0 right-0 p-2 px-3 hover:bg-red-700 bg-red-600 rounded-md text-white border shadow-lg blur-1 font-bold border-black">
                X
              </button>
              <iframe
                src={pdfUrl}
                title="PDF Viewer"
                width="1000"
                height="600"
                className="border-0"
              ></iframe>
            </div>
          </div>
        )}

        {/* Videos Section */}
        <h1 className="text-3xl font-bold mt-10 mb-6">Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
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
