import React, { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import lisst from "../../public/lisst.json"
import axios from "axios";
import { url } from "../host.js";

function Resources() {
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSemesterId, setSelectedSemesterId] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [loadingSubjects, setLoadingSubjects] = useState(false);
  const [errorSubjects, setErrorSubjects] = useState(null);

  // Fetch semesters on mount
  const fetchSemesters = async () => {
    try {
      const response = await axios.get(`${url}/api/semesters`, {
        withCredentials: true, // Use withCredentials instead of credentials
      });
      console.log(response);
      const data = Array.isArray(response.data) ? response.data : [];
      setSemesters(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Ensure setLoading is defined
    }
  };
  
  useEffect(() => {
    fetchSemesters();
  }, []);
  

  // Fetch subjects when a semester is selected
  useEffect(() => {
    const fetchSubjects = async () => {
      if (!selectedSemesterId) return; // Exit if no semester is selected
      setLoadingSubjects(true);
      setErrorSubjects(null);
  
      try {
        const response = await axios.get(`${url}/api/semesters/${selectedSemesterId}/subjects`, {
          withCredentials: true, // Include credentials (cookies)
        });
        setSubjects(response.data); 
        console.log(response)
      } catch (err) {
        setErrorSubjects(err.message); // Handle any errors
      } finally {
        setLoadingSubjects(false); // Stop loading
      }
    };
  
    fetchSubjects();
  }, [selectedSemesterId]);
  

  const handleSemesterChange = (e) => {
    const id = e.target.value;
    setSelectedSemesterId(id);
    localStorage.setItem("selectedSemesterId", id);
   
  };

 /*  const handleSubjectChange = (id) => {
    setSelectedSubId(id);
    localStorage.setItem("selectedSubId", id);
    // Navigate to the resource page or perform the desired action
  }; */

  if (loading) {
    return <div>Loading semesters...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="max-x-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Helpful Resources for Students
          </h1>
          <p className="mt-5">
            For any student, getting access to textbooks, videos, question papers on dozens of subjects
            can be an expensive affair. It is also not practical to purchase
            entire textbooks just to access a small part of it for references.
            That's where online open textbook sources and other online libraries
            and vendors come into play. By offering textbooks on a variety of
            subjects for free or for a heavily discounted price, they are a boon
            for students. Below is a collection of such similar sites to access
            textbooks online.
          </p>
        </div>

        {/* Semester Selection */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold">Select a Semester</h2>
          <select
            onChange={handleSemesterChange}
            value={selectedSemesterId || ""}
            className="mt-2 p-2 rounded-lg bg-green-400 border-black border-2"
          >
            <option value="" className=" bg-white">Select a semester</option>
            {semesters.map((semester) => (
              <option key={semester._id} value={semester._id} className=" bg-white rounded-lg">
                {semester.semesterName} ({semester.year})
              </option>
            ))}
          </select>
        </div>

        {/* Subjects based on selected semester */}
        {loadingSubjects && <div>Loading subjects...</div>}
        {errorSubjects && <div>Error: {errorSubjects}</div>}
        {subjects.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Subjects for Selected Semester</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-4 justify-center">
              {subjects.map((subject) => (
                <Cards key={subject.id} item={subject.subjectName} navi={subject.subjectId} />
              ))}

              {
                lisst.map((e) => {
                  <>
                    <h1> {e.name}</h1>
                    <iframe src={e.youtubeLink} frameborder="0"></iframe>
                  </>


                })

              }


            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Resources;
