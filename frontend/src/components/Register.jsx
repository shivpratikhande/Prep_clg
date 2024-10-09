import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Register() {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    semesterName: "",
  });
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError(""); // Reset error message when user types
  };

  const toggleRole = () => {
    setRole((prevRole) => (prevRole === "Student" ? "Admin" : "Student"));
    setFormData((prevData) => ({ ...prevData, semesterName: "" })); // Reset semester
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: role.toLowerCase(),
        semesterName: role === "Student" ? formData.semesterName : undefined,
      });
      console.log("Registration successful:", response.data);
      navigate("/Login"); // Redirect to the login page
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Registration failed. Please try again.");
      } else {
        setError("Registration failed. Please try again.");
      }
      console.error("Registration failed:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row text-black">
      <div className="order-1 w-full md:w-1/2 ml-10">
        <img src="signup.png" className="w-85 h-85 justify-center align-center mt-10" alt="Sign Up" />
      </div>
      <div className="order-2 md:order-1 md:w-1/2 mt-1 md:mt-32">
        <div className="space-y-12">
          <div className="flex justify-center min-h-screen">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>

              {/* Role Toggle Switch */}
              <div className="flex items-center justify-center mb-4">
                <span className="mr-2">{role}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    onChange={toggleRole}
                    checked={role === "Admin"}
                  />
                  <div className="w-10 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 transition duration-200"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition duration-200 peer-checked:translate-x-full peer-checked:bg-blue-500"></div>
                </label>
              </div>

              <input
                type="text"
                placeholder="Enter your Full Name"
                className="input input-bordered w-full bg-white text-black placeholder-black border border-gray-300 rounded-full p-2"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />

              <input
                type="email"
                placeholder="Enter Email address"
                className="input mt-8 input-bordered w-full bg-white text-black placeholder-black border border-gray-300 rounded-full p-2"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full bg-white text-black placeholder-black border border-gray-300 rounded-full p-2 mt-8"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              {role === "Student" && (
                <select
                  name="semesterName"
                  value={formData.semesterName}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-white text-black border border-gray-300 rounded-full p-2 mt-8"
                >
                  <option value="">Select Semester</option>
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i + 1} value={`Semester ${i + 1}`}>
                      Semester {i + 1}
                    </option>
                  ))}
                </select>
              )}

              {error && <p className="text-red-500">{error}</p>}

              <button
                className={`w-full ${loading ? "bg-gray-500" : "bg-green-300"} text-black text-md rounded-full hover:bg-green-300 hover:text-black transition duration-150 mt-8`}
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>

              <a href="/Login" className="block mt-8">
                <button className="w-full bg-green-300 text-black text-md rounded-full hover:bg-green-300 hover:text-black transition duration-150">
                  Already a User
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
