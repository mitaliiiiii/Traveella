import React, { useState } from "react";
import loginBg from "../images/loginBg.png";
import travel from "../images/traveellaSignup.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [activeTab, setActiveTab] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/users/login", {
        email: username,
        password,
      });
      setMessage(res.data.message || "Login successful!");
      setTimeout(() => navigate("/afterloggedinpage"), 500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* login card */}
      <div
  className="
    relative z-10
    w-[85%] max-w-lg sm:max-w-xl lg:max-w-2xl
    bg-white/80 backdrop-blur-xl 
    rounded-2xl shadow-2xl
    p-6 sm:p-8 md:p-10
    flex flex-col items-center
    max-h-[95vh] overflow-auto
  "
>
        {/* logo */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={travel}
            alt="Travel Logo"
            className="h-20 sm:h-28 md:h-32 lg:h-36 object-contain"
          />
        </div>

        {/* tabs */}
        <div className="flex justify-center w-full mb-6">
          <div className="flex bg-gray-100 rounded-full p-1 w-full max-w-xs shadow-inner">
            <button
              onClick={() => setActiveTab("user")}
              className={`flex-1 px-4 py-2 rounded-l-full text-sm sm:text-base md:text-base font-semibold transition-colors ${
                activeTab === "user"
                  ? "bg-black text-white shadow"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              User
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`flex-1 px-4 py-2 rounded-r-full text-sm sm:text-base md:text-base font-semibold transition-colors ${
                activeTab === "admin"
                  ? "bg-black text-white shadow"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        {/* heading */}
        <h1 className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center">
          Sign in
        </h1>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg space-y-4 sm:space-y-5"
        >
          <div>
            <label className="block text-gray-800 text-sm sm:text-base mb-1">
              Email
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 text-sm sm:text-base mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm gap-2 sm:gap-0">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-blue-500"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-gray-500 hover:underline"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 sm:py-3 md:py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-md"
          >
            Sign in
          </button>
        </form>

        {/* message feedback */}
        {message && (
          <p className="mt-4 text-center text-sm sm:text-base text-gray-700">
            {message}
          </p>
        )}

        {/* signup text */}
        <div className="text-sm sm:text-base text-gray-600 mt-6 text-center">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-500 underline font-semibold"
          >
            Sign Up
          </button>
        </div>

        {/* footer */}
        <div className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-gray-400 text-center">
          <p>
            Need help? Visit our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              support page
            </a>
          </p>
          <p className="mt-1">© 2025 TRAVELLA. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
