import React, { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import list from "../../public/list.json";

function Resources() {
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSemesterId, setSelectedSemesterId] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [loadingSubjects, setLoadingSubjects] = useState(false);
  const [errorSubjects, setErrorSubjects] = useState(null);

  // Fetch semesters on mount
  useEffect(() => {
    const fetchSemesters = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/semesters');
        if (!response.ok) {
          throw new Error('Failed to fetch semesters');
        }
        const data = await response.json();
        setSemesters(data);
        console.log(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSemesters();
  }, []);

  // Fetch subjects when a semester is selected
  useEffect(() => {
    const fetchSubjects = async () => {
      if (!selectedSemesterId) return; // Exit if no semester is selected
      setLoadingSubjects(true);
      setErrorSubjects(null);
      console.log(selectedSemesterId)

      try {
        const response = await fetch(`http://localhost:3000/api/semesters/${selectedSemesterId}/subjects`);
        if (!response.ok) {
          throw new Error('Failed to fetch subjects');
        }
        const data = await response.json();
        setSubjects(data);
        console.log(data)
      } catch (err) {
        setErrorSubjects(err.message);
      } finally {
        setLoadingSubjects(false);
      }
    };

    fetchSubjects();
  }, [selectedSemesterId]);

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
        {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-4">
                    {list.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div> */}

        {/* Semester Selection */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold">Select a Semester</h2>
          <select
            onChange={(e) => setSelectedSemesterId(e.target.value)}
            value={selectedSemesterId || ""}
            className="mt-2 p-2 border rounded"
          >
            <option value="">Select a semester</option>
            {semesters.map((semester) => (
              <option key={semester._id} value={semester._id}>
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
            <ul>
            {/*   {subjects.map((subject) => (
                <li key={subject._id}>
                  {subject.subjectName}
                </li>
              ))} */}

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-4 justify-center ">
                {subjects.map((subject) => (
                  <Cards key={subject.id} item={subject.subjectName} />
                ))}
              </div>

            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Resources;
