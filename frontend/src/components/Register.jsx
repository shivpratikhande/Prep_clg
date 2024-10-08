import React from "react";

function Register() {
  return (
    <div>
      <div>
        <div className="max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row text-black">
          <div className="order-1 w-full md:w-1/2 ml-10">
            <img
              src="signup.png"
              className="w-85 h-85 justify-center align-center mt-10"
              alt="img"
            />
          </div>
          <div className="order-2 md:order-1  md:w-1/2 mt-1 md:mt-32">
            <div className="space-y-12">
              <div className="flex justify-center min-h-screen">
                <div className="w-full max-w-md">
                  {" "}
                  <h1 className="text-3xl font-bold text-center mb-6 ">
                    Signup
                  </h1>
                  <label className="form-control w-full ">
                    <input
                      type="text"
                      placeholder="Enter your Fullname"
                      className="input input-bordered w-full bg-white text-black placeholder-black border border-gray-300 rounded-full p-2"
                    />
                    <input
                      type="email"
                      placeholder="Enter Email address"
                      className="input mt-8 input-bordered w-full bg-white text-black placeholder-black border border-gray-300 rounded-full p-2"
                    />
                    <input
                      type="phonenumber"
                      placeholder="Enter PhoneNumber"
                      className="input mt-8 input-bordered w-full bg-white text-black placeholder-black border border-gray-300 rounded-full p-2"
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="input mt-8 input-bordered w-full  bg-white text-black placeholder-black border border-gray-300 rounded-full p-2 mt-8"
                    />
                  </label>
                  <a href="/" className="block mt-8">
                    <button className="btn btn-outline w-full bg-green-300 text-black text-md rounded-full hover:bg-green-300 hover:text-black transition duration-150">
                    Register
                    </button>
                  </a>
                
                  {/* Additional Buttons */}
                  <a href="/Register" className="block mt-8">
                    <button className="btn btn-outline w-full bg-green-300 text-black text-md rounded-full hover:bg-green-300 hover:text-black transition duration-150">
                      Already a User
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
