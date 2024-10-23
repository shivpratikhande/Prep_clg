import React, { useEffect, useState } from "react";
import Slidebar from "../components/Slidebar";
import axios from "axios";
import { url } from "../host";

const Notes = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [chapters, setChapters] = useState([]);
  const [err, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [semesterId, setSemesterId] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [completionStatus, setCompletionStatus] = useState({}); // State for completion status

  const openPdf = (url) => {
    setPdfUrl(url);
    setIsPdfOpen(true);
  };

  const closePdf = () => {
    setIsPdfOpen(false);
    setPdfUrl("");
  };

  const openVideo = (url) => {
    setVideoUrl(url);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
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
        const response = await axios.get(`${url}/api/semesters/${semesterId}/subjects/${subjectId}/chapters`, {
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

  const allResources = [...pdfResources, ...videoResources]; // Combine both resources for completion tracking

  const toggleCompletion = (resourceId) => {
    setCompletionStatus((prev) => ({
      ...prev,
      [resourceId]: !prev[resourceId], // Toggle completion status
    }));
  };

  const completionPercentage = () => {
    const completedCount = Object.values(completionStatus).filter(Boolean).length;
    return (completedCount / allResources.length) * 100 || 0; // Calculate completion percentage
  };

  return (
    <div className="flex space-x-3 min-h-screen ">
      <Slidebar />
      <div className="p-6 flex-grow rounded-xl border-2 border-black shadow-green-300 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Notes</h1>

        {loading && <p>Loading chapters...</p>}
        {err && <p className="text-red-500">{err}</p>}

        {/* Completion Status Bar */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Completion Status</h2>
          <div className="relative w-full h-6 bg-gray-300 rounded">
            <div
              className="absolute top-0 left-0 h-full bg-green-500 rounded"
              style={{ width: `${completionPercentage()}%` }}
            ></div>
          </div>
          <p className="text-right">{completionPercentage().toFixed(0)}% completed</p>
        </div>

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
              <button
                onClick={() => toggleCompletion(resource.resourceId)}
                className="inline-block bg-blue-300 hover:bg-blue-400 text-black py-2 px-4 rounded mt-2"
              >
                {completionStatus[resource.resourceId] ? "Completed" : "Mark as Complete"}
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
                src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
                frameBorder="0"
                allowFullScreen
                className="border-0"
              ></iframe>
              <button
                onClick={() => openVideo(video.resourceUrl)}
                className="inline-block bg-green-300 hover:bg-green-400 text-black py-2 px-4 rounded mt-auto"
              >
                Watch Video
              </button>
              <button
                onClick={() => toggleCompletion(video.resourceId)}
                className="inline-block bg-blue-300 hover:bg-blue-400 text-black py-2 px-4 rounded mt-2"
              >
                {completionStatus[video.resourceId] ? "Completed" : "Mark as Complete"}
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
                src={`https://www.youtube.com/embed/${videoUrl}`}
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
