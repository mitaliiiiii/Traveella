import React, { useState } from "react";
import loginBg from "../images/loginBg.png";
import travel from "../images/traveellaSignup.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [activeTab, setActiveTab] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ activeTab, username, password, remember });
  };

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* login card */}
      <div
        className="
          relative z-10 
          w-full max-w-md sm:max-w-lg lg:max-w-xl 
          bg-white/80 backdrop-blur-xl border border-white/30 
          rounded-2xl shadow-xl 
          p-6 sm:p-10 
          flex flex-col items-center
        "
      >
        {/* logo */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={travel}
            alt="Travel"
            className="h-24 sm:h-32 md:h-40 object-contain"
          />
        </div>

        {/* tabs */}
        <div className="flex justify-center w-full mb-4 sm:mb-6">
          <div className="flex bg-gray-100 rounded-full p-1 w-full max-w-xs">
            <button
              onClick={() => setActiveTab("user")}
              className={`flex-1 px-3 sm:px-4 py-2 rounded-l-full text-sm sm:text-base font-medium transition-colors ${
                activeTab === "user"
                  ? "bg-black text-white shadow-sm"
                  : "text-black hover:text-gray-700"
              }`}
            >
              User
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`flex-1 px-3 sm:px-4 py-2 rounded-r-full text-sm sm:text-base font-medium transition-colors ${
                activeTab === "admin"
                  ? "bg-black text-white shadow-sm"
                  : "text-black hover:text-gray-700"
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        {/* heading */}
        <h1 className="text-gray-800 text-2xl sm:text-3xl font-semibold mb-4">
          Sign in
        </h1>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-4 sm:space-y-5"
        >
          <div>
            <label className="block text-gray-800 text-sm sm:text-base mb-1">
              Email or phone number
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-blue-500"
              />
              Remember me
            </label>
            <a href="#" className="text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Sign in
          </button>
        </form>

        {/* signup text */}
        <div className="text-sm sm:text-base text-gray-600 mt-5 text-center">
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
