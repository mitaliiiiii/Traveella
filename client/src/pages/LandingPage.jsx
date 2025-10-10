import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chevron from "../images/chevron.png";
import travel from "../images/traveellalogo.png";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight/8 ) {
        navigate("/LandingPageOnScroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

  return (
    <div className="relative min-h-[250vh] w-full">
    <div
      className="relative min-h-[100vh] w-full bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
 <nav className="fixed -top-3 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-0 text-white">



        {/* Logo */}
        <div className="flex items-center">
          <img
            src={travel}
            alt="Travel"
              className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 w-auto object-contain"
          />
        </div>

        {/* Navbar links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-base font-medium">
          <button className="hover:text-gray-300 transition-colors duration-200">Home</button>
          <button className="hover:text-gray-300 transition-colors duration-200">Blog</button>
          <button className="hover:text-gray-300 transition-colors duration-200">About Us</button>
        </div>

        {/* Auth buttons */}
        <div className="flex space-x-2 sm:space-x-3 text-xs sm:text-sm">
          <button
            onClick={() => navigate("/signup")}
            className="hover:text-gray-300 transition-colors duration-200 px-2 sm:px-3 py-1"
          >
            SIGNUP
          </button>
          <button
            onClick={() => navigate("/login")}
            className="border border-white px-3 sm:px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-200 text-xs sm:text-sm"
          >
            LOGIN
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-32 sm:py-40 lg:py-48">
        {/* Left side - Hero content */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-white w-full max-w-3xl mx-auto lg:mx-0 space-y-6 translate-y-[150px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            FIND MORE, CHOOSE <br className="hidden xs:block" /> SMARTER, WANDER FREELY
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-4 sm:mt-6 md:mt-8 w-full">
            <button className="border border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-white hover:text-black transition-all duration-200 font-medium w-full sm:w-auto">
              Join Co-Travelling
            </button>
            <button className="border border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-white hover:text-black transition-all duration-200 font-medium w-full sm:w-auto">
              Discover Places
            </button>
          </div>
        </div>

        {/* Right side - Scroll indicator */}
<div className="hidden lg:flex flex-col items-center justify-center h-full py-8 translate-y-[250px]">
  <div className="flex flex-col items-center gap-4 animate-bounce">
    <img src={chevron} alt="Scroll down" className="w-16 h-16 object-contain" />
    <img src={chevron} alt="Scroll down" className="w-16 h-16 object-contain" />
    <img src={chevron} alt="Scroll down" className="w-16 h-16 object-contain" />
  </div>
</div>

      </div>

      {/* Mobile scroll indicator */}
<div className="lg:hidden relative z-20 flex flex-col items-center justify-center pb-8 translate-y-[200px]">
  <div className="flex flex-col items-center gap-3 animate-bounce">
    <img src={chevron} alt="Scroll down" className="w-10 h-10 object-contain" />
    <img src={chevron} alt="Scroll down" className="w-10 h-10 object-contain" />
    <img src={chevron} alt="Scroll down" className="w-10 h-10 object-contain" />
  </div>
</div>

    </div>
    </div>
  );
}