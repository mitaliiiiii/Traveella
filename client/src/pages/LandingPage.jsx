import React from "react";
import { FaAngleDown } from "react-icons/fa";
import landingpage from "../images/landingPageBg.jpg";

export default function LandingPage() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${landingpage})` }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-10 py-6 bg-transparent">
        <div className="text-2xl font-bold tracking-wide flex items-center space-x-2">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
          <span>TRAVEELLA</span>
        </div>

        <ul className="flex items-center space-x-8">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Discovery</a></li>
          <li><a href="#" className="hover:text-gray-300">About Us</a></li>
        </ul>

        <div className="flex space-x-4">
          <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
            SIGNUP
          </button>
          <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
            LOGIN
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
          FIND MORE, CHOOSE <br /> SMARTER, WANDER FREELY
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <button className="border border-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition">
            Join Co-Travelling
          </button>
          <button className="border border-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black transition">
            Discover Places
          </button>
        </div>
      </div>

      {/* Down Arrows */}
      <div className="absolute bottom-6 flex flex-col items-center space-y-2 animate-bounce">
        <FaAngleDown size={24} />
        <FaAngleDown size={24} />
        <FaAngleDown size={24} />
      </div>
    </div>
  );
}
