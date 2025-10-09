import React, { useState } from "react";
import loginBg from "../images/loginBg.png";
import travel from "../images/traveellaSignup.png"
export default function TravelLogin() {
  const [activeTab, setActiveTab] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ activeTab, username, password, remember });
  };

  return (
    <div
    
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="relative overflow-hidden px-4"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Card */}


      <div
  style={{
    background: "rgba(255, 255, 255, 0.85)", // semi-transparent
    backdropFilter: "blur(10px)",           // blur effect
    WebkitBackdropFilter: "blur(10px)",    // Safari support
    borderRadius: "1rem",                   // rounded corners
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)", // soft shadow
    border: "1px solid rgba(255, 255, 255, 0.3)", // faint border
  }}
   className="p-8 w-[550px] h-[700px] mx-auto"
>
  {/* Your content here */}

        {/* Logo */}
<div className="flex  justify-center ">
  <img
    className="h-[200px] -translate-y-20"
    src={travel}
    alt="Travel"
  />
</div>

        {/* Tabs */}
        <div className="flex justify-center">
        <div className="flex mb-6 bg-gray-100 rounded-full p-1 w-full max-w-xs -translate-y-[130px]">
  <button
    onClick={() => setActiveTab("user")}
    className={`flex-1 px-4 py-2 rounded-l-full text-sm font-medium transition-colors ${
      activeTab === "user"
        ? "bg-black text-white shadow-sm"
        : "text-black hover:text-gray-700"
    }`}
  >
    User
  </button>
  <button
    onClick={() => setActiveTab("admin")}
    className={`flex-1 px-4 py-2 rounded-r-full text-sm font-medium transition-colors ${
      activeTab === "admin"
        ? "bg-black text-white shadow-sm"
        : "text-black hover:text-gray-700"
    }`}
  >
    Admin
  </button>
</div>
</div>
        {/* Form */}
        <div className="flex justify-center">
               <h1 className="text-gray-800 text-3xl font-medium -translate-y-[130px]">Sig in</h1>
        </div>
        <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="space-y-4 w-[300px] -translate-y-[110px]">
          <h1 className="text-gray-800">Email or phone number</h1>
          <input
            type="text"
            placeholder=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
       <h1 className="text-gray-800">Password</h1>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="flex items-center justify-between text-sm">
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
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Sig in
          </button>
        </form>
         
</div>
   <div className="text-1xl text-gray-600 translate-x-[115px] -translate-y-[70px]">Dont't have an account?<button className="text-blue-500 underline">Sign Up</button> </div>
        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-400 -translate-y-[50px]">
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
