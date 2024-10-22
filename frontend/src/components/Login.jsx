import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../host";

const InputField = ({ type, placeholder, name, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="input input-bordered w-full bg-white text-black placeholder-black border border-gray-300 rounded-full p-2"
    name={name}
    value={value}
    onChange={onChange}
  />
);

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    semester: "",
    role: "Student",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Reset error message when user types
  };

  const toggleRole = () => {
    setFormData((prev) => ({
      ...prev,
      role: prev.role === "Student" ? "Admin" : "Student",
      semester: "", // Reset semester when switching roles
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${url}/auth/login`, {
        email: formData.email,
        password: formData.password,
        role: formData.role.toLowerCase(),
        semester: formData.role === "Student" ? formData.semester : undefined,
      }, { withCredentials: true });
      console.log("Login successful:", response.data);
      formData.role === "Admin" ? navigate("/admin") : navigate("/resources")

/*       navigate("/resources"); // Redirect after successful login
 */    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      setError(errorMessage);
      console.error("Login failed:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row text-black">
      <div className="order-1 w-full md:w-1/2 ml-10">
        <img
          src="Login.png"
          className="w-92 h-92 justify-center align-center mt-20"
          alt="img"
        />
      </div>
      <div className="order-2 md:order-1 md:w-1/2 mt-1 md:mt-32">
        <div className="space-y-12">
          <div className="flex justify-center min-h-screen">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

              {/* Role Toggle Button */}
              <div className="flex justify-center mb-4">
                <button
                  className={`btn ${formData.role === "Admin" ? "bg-gray-300" : "bg-gray-300"
                    } text-black rounded-full w-1/2 hover:bg-green-300`}
                  onClick={toggleRole}
                >
                  {formData.role}
                </button>
              </div>

              <label className="form-control w-full">
                <InputField
                  type="email"
                  placeholder="Enter Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <InputField
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-8"
                />

                {/* Conditional Semester Dropdown */}
                {formData.role === "Student" && (
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white text-black border border-gray-300 rounded-full p-2 mt-8"
                  >
                    <option value="">Select Semester</option>
                    {[...Array(8).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        Semester {i + 1}
                      </option>
                    ))}
                  </select>
                )}
              </label>

              {error && <p className="text-red-500">{error}</p>} {/* Error message */}

              <button
                className="btn btn-outline w-full bg-green-300 text-black text-md rounded-full hover:bg-green-300 hover:text-black transition duration-150 mt-8"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <div className="flex flex-col items-center mt-8">
                <p className="text-md mb-4">Continue With</p>
                <div className="flex space-x-4">
                  <span className="border border-gray-300 rounded p-2 hover:bg-gray-100 transition">
                    <i className="fab fa-google text-2xl"></i>
                  </span>
                  <span className="border border-gray-300 rounded p-2 hover:bg-gray-100 transition">
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </span>
                  <span className="border border-gray-300 rounded p-2 hover:bg-gray-100 transition">
                    <i className="fab fa-apple text-2xl"></i>
                  </span>
                </div>
              </div>

              <a href="/Register" className="block mt-8">
                <button className="btn btn-outline w-full bg-green-300 text-black text-md rounded-full hover:bg-green-300 hover:text-black transition duration-150">
                  Register
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
