import React from "react";
import traveella from "../images/traveellaSignup.png";
import chevron from "../images/chevron.png";
import { useNavigate } from "react-router-dom";



export default function App() {

  const navigate = useNavigate();


  
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')", // replace with your own image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 sm:px-16 py-6 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wide">TRAVEELLA</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <button className="hover:text-gray-300">Home</button>
          <button className="hover:text-gray-300">Blog</button>
          <button className="hover:text-gray-300">About Us</button>
        </div>

        {/* Auth buttons */}
        <div className="flex space-x-3">
          <button onClick={() => navigate("/signup")} className="text-sm hover:text-gray-300">SIGNUP</button>
          <button onClick={() => navigate("/login")} className="border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
            LOGIN
          </button>
        </div>
      </nav>

      {/* Hero section */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
          FIND MORE ,CHOOSE <br /> SMARTER , WANDER FREELY
        </h1>

        <div className="flex flex-col sm:flex-row gap-5 mt-4">
          <button className="border border-white px-8 py-3 rounded-full text-sm hover:bg-white hover:text-black transition">
            Join Co-Travelling
          </button>
          <button className="border border-white px-8 py-3 rounded-full text-sm hover:bg-white hover:text-black transition">
            Discover Places
          </button>
        </div>
      </div>

      {/* Scroll Down Images */}
     <div className="absolute bottom-6 right-24 z-20 flex flex-col items-center gap-1 animate-bounce">
      <img src={chevron} alt="Scroll Icon" className="w-16 h-16 object-contain" />
      <img src={chevron} alt="Scroll Icon" className="w-16 h-16 object-contain" />
      <img src={chevron} alt="Scroll Icon" className="w-16 h-16 object-contain" />
     </div>

    </div>
  );
}