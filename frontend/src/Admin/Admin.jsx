import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [semesters, setSemesters] = useState([]);
  const [semesterName, setSemesterName] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [resourceData, setResourceData] = useState({});

  // Fetch semesters
  const fetchSemesters = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/semesters', {
        credentials: 'include',
      });
      const data = Array.isArray(response.data) ? response.data : [];
      setSemesters(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching semesters:', error);
    }
  };

  useEffect(() => {
    fetchSemesters();
  }, []);

  // Add semester
  const handleAddSemester = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/semesters', { name: semesterName, year: 2024 });
      setSemesters([...semesters, response.data]);
      setSemesterName('');
    } catch (error) {
      console.error('Error creating semester:', error);
    }
  };

  // Add subject
  const handleAddSubject = async (semesterId) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/semesters/${semesterId}/subjects`, { name: subjectName });
      const updatedSemesters = semesters.map((semester) =>
        semester._id === semesterId ? { ...semester, subjects: [...(semester.subjects || []), response.data] } : semester
      );
      setSemesters(updatedSemesters);
      setSubjectName('');
    } catch (error) {
      console.error('Error creating subject:', error);
    }
  };

  // Add chapter
  const handleAddChapter = async (semesterId, subjectId) => {
    try {
      const response = await axios.post(`/api/semesters/${semesterId}/subjects/${subjectId}/chapters`, { name: chapterName });
      const updatedSemesters = semesters.map((semester) =>
        semester._id === semesterId ? {
          ...semester,
          subjects: semester.subjects.map((subject) =>
            subject._id === subjectId ? { ...subject, chapters: [...(subject.chapters || []), response.data] } : subject
          )
        } : semester
      );
      setSemesters(updatedSemesters);
      setChapterName('');
    } catch (error) {
      console.error('Error creating chapter:', error);
    }
  };

  // Add resource
  const handleAddResource = async (semesterId, subjectId, chapterId) => {
    try {
      const response = await axios.post(`/api/semesters/${semesterId}/subjects/${subjectId}/chapters/${chapterId}/resources`, resourceData);
      setResourceData({});
    } catch (error) {
      console.error('Error adding resource:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Add Semester Form */}
      <form onSubmit={handleAddSemester} className="mb-6">
        <select
          value={semesterName}
          onChange={(e) => setSemesterName(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded mr-2"
        >
          <option value="">--Select Semester--</option>
          {semesters.map((semester) => (
            <option key={semester._id} value={semester._id}>{semester.semesterName}</option>
          ))}
        </select>
        <button type="submit" className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded">Add Semester</button>
      </form>

      {/* Semester List */}
      <h2 className="text-2xl font-semibold mb-2">Semesters</h2>
      <ul className="space-y-4">
        {semesters.map((semester) => (
          <li key={semester._id} className="border p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">{semester.name}</h3>

            {/* Add Subject Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleAddSubject(semester._id); }} className="mb-4">
              <input
                type="text"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                placeholder="Subject Name"
                required
                className="border border-gray-300 p-2 rounded mr-2"
              />
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Subject</button>
            </form>

            {/* Subject List */}
            <ul className="space-y-2">
              {semester.subjects && semester.subjects.map((subject) => (
                <li key={subject._id} className="border p-3 rounded bg-gray-100">
                  <h4 className="font-semibold">{subject.name}</h4>

                  {/* Add Chapter Form */}
                  <form onSubmit={(e) => { e.preventDefault(); handleAddChapter(semester._id, subject._id); }} className="mb-2">
                    <input
                      type="text"
                      value={chapterName}
                      onChange={(e) => setChapterName(e.target.value)}
                      placeholder="Chapter Name"
                      required
                      className="border border-gray-300 p-2 rounded mr-2"
                    />
                    <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Add Chapter</button>
                  </form>

                  {/* Chapter List */}
                  <ul className="space-y-1">
                    {subject.chapters && subject.chapters.map((chapter) => (
                      <li key={chapter._id} className="border p-2 rounded bg-gray-200">
                        <span>{chapter.name}</span>

                        {/* Add Resource Form */}
                        <form onSubmit={(e) => { e.preventDefault(); handleAddResource(semester._id, subject._id, chapter._id); }} className="mt-2">
                          <input
                            type="text"
                            value={resourceData.name || ''}
                            onChange={(e) => setResourceData({ ...resourceData, name: e.target.value })}
                            placeholder="Resource Name"
                            required
                            className="border border-gray-300 p-2 rounded mr-2"
                          />
                          <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">Add Resource</button>
                        </form>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
