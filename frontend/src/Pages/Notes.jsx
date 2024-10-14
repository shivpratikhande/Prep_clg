import React, { useEffect, useState } from "react";
import Slidebar from "../components/Slidebar";
import lisst from "../../public/lisst.json";
import axios from "axios";

const Notes = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(""); 
  const [videoUrl, setVideoUrl] = useState(""); // Dynamic PDF URL
  const [chapters, setChapters] = useState([]); // Chapters data
  const [err, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [semesterId, setSemesterId] = useState("");
  const [subjectId, setSubjectId] = useState("");

  const openPdf = (url) => {
    setPdfUrl(url); // Set dynamic PDF URL
    setIsPdfOpen(true); // Open PDF viewer
    setVideoUrl(url)
  };

  const closePdf = () => {
    setIsPdfOpen(false); // Close PDF viewer
    setPdfUrl(""); // Reset PDF URL
  };

  useEffect(() => {
    const value = localStorage.getItem('selectedSemesterId');
    const sub = localStorage.getItem("subjectId");
    if (value) {
      setSemesterId(value);
    }
    if (sub) {
      setSubjectId(sub);
    }
  }, []);

  useEffect(() => {
    const fetchSemesters = async () => {
      if (!semesterId || !subjectId) return; // Avoid fetching if IDs are not available
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/api/semesters/${semesterId}/subjects/${subjectId}/chapters`, {
          withCredentials: true
        });

        setChapters(response.data); // Set chapters directly from response
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSemesters();
  }, [semesterId, subjectId]);

  // Separate PDFs and videos
  const pdfResources = chapters.flatMap(chapter =>
    chapter.resources.filter(resource => resource.resourceType === "pdf").map(resource => ({
      title: chapter.chapterName,
      resourceId: resource.resourceId,
      resourceUrl: resource.resourceUrl,
    }))
  );

  const videoResources = chapters.flatMap(chapter =>
    chapter.resources.filter(resource => resource.resourceType === "video").map(resource => ({
      title: chapter.chapterName, // Get chapter name for video title
      resourceId: resource.resourceId,
      resourceUrl: resource.resourceUrl, // Assuming resourceUrl for video
      // Include other video-specific properties as needed
    }))
  );

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

        {/* PDF Resources */}
        <h2 className="text-2xl font-semibold mb-4">PDF Resources</h2>
        {pdfResources.length === 0 && !loading && <p>No PDF resources available.</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
          {pdfResources.map(resource => (
            <div key={resource.resourceId} className="bg-white shadow-xl rounded-lg p-4 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <iframe
                src={resource.resourceUrl}
                title="PDF Viewer"
                width="100%"
                height="300"
                className="border-0"
              ></iframe>
              <button
                onClick={() => openPdf(resource.resourceUrl)} // Use resource.resourceUrl
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
              >
                Open PDF
              </button>
            </div>
          ))}
        </div>

        {isPdfOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg p-4">
              <button onClick={closePdf} className="absolute top-0 right-0 p-2 px-3 hover:bg-red-700 bg-red-600 rounded-md text-white border shadow-lg font-bold border-black">
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
        <h2 className="text-2xl font-semibold mt-10 mb-4">Video Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
          {videoResources.length === 0 && <p>No video resources available.</p>}
          {videoResources.map(video => (
            <div key={video.resourceId} className="bg-white shadow-xl rounded-lg p-4 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <a
                href={video.resourceUrl} // Use resourceUrl for video
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
              >
                Watch Video
              </a>
            </div>
          ))}
        </div>
        {isPdfOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg p-4">
              <button onClick={closePdf} className="absolute top-0 right-0 p-2 px-3 hover:bg-red-700 bg-red-600 rounded-md text-white border shadow-lg font-bold border-black">
                X
              </button>
              <iframe
                src={videoUrl}
                title="PDF Viewer"
                width="1000"
                height="600"
                className="border-0"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
