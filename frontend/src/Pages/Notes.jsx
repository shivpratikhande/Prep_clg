import React, { useEffect, useState } from "react";
import Slidebar from "../components/Slidebar";
import lisst from "../../public/lisst.json";
import axios from "axios";

const Notes = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false); // State for video
  const [pdfUrl, setPdfUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState(""); // Dynamic video URL
  const [chapters, setChapters] = useState([]);
  const [err, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [semesterId, setSemesterId] = useState("");
  const [subjectId, setSubjectId] = useState("");

  const openPdf = (url) => {
    setPdfUrl(url);
    setIsPdfOpen(true);
  };

  const closePdf = () => {
    setIsPdfOpen(false);
    setPdfUrl("");
  };

  const openVideo = (url) => {
    setVideoUrl(url); // Set the dynamic video URL
    setIsVideoOpen(true); // Open video viewer
  };

  const closeVideo = () => {
    setIsVideoOpen(false); // Close video viewer
    setVideoUrl(""); // Reset video URL
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
      if (!semesterId || !subjectId) return;
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/api/semesters/${semesterId}/subjects/${subjectId}/chapters`, {
          withCredentials: true
        });
        setChapters(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSemesters();
  }, [semesterId, subjectId]);

  const pdfResources = chapters.flatMap(chapter =>
    chapter.resources.filter(resource => resource.resourceType === "pdf").map(resource => ({
      title: chapter.chapterName,
      resourceId: resource.resourceId,
      resourceUrl: resource.resourceUrl,
    }))
  );

  const videoResources = chapters.flatMap(chapter =>
    chapter.resources.filter(resource => resource.resourceType === "video").map(resource => ({
      title: chapter.chapterName,
      resourceId: resource.resourceId,
      resourceUrl: resource.resourceUrl,
    }))
  );

  return (
    <div className="flex space-x-3 min-h-screen ">
      <Slidebar />
      <div className="p-6 flex-grow rounded-xl border-2 border-black shadow-green-300 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Notes</h1>

        {loading && <p>Loading chapters...</p>}
        {err && <p className="text-red-500">{err}</p>}

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
                onClick={() => openPdf(resource.resourceUrl)}
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

        <h2 className="text-2xl font-semibold mt-10 mb-4">Video Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
          {videoResources.length === 0 && <p>No video resources available.</p>}
          {videoResources.map(video => (
            <div key={video.resourceId} className="bg-white shadow-xl rounded-lg p-4 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`} // Embed video using the video ID
                frameBorder="0"
                allowFullScreen
                className="border-0"
              ></iframe>
              <button
                onClick={() => openVideo(video.resourceUrl)} // Use resourceUrl for video
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
              >
                Watch Video
              </button>
            </div>
          ))}
        </div>

        {isVideoOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg p-4">
              <button onClick={closeVideo} className="absolute top-0 right-0 p-2 px-3 hover:bg-red-700 bg-red-600 rounded-md text-white border shadow-lg font-bold border-black">
                X
              </button>
              <iframe
                width="1000"
                height="600"
                src={`https://www.youtube.com/embed/${videoUrl}`} // Embed video using the video ID
                title="Video Player"
                frameBorder="0"
                allowFullScreen
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
