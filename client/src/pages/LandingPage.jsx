// import React from "react";
// import traveella from "../images/landingPageLogo.png";
// import chevron from "../images/chevron.png";
// import { useNavigate } from "react-router-dom";
// import travel from "../images/traveellalogo.png";




// export default function LandingPage() {

//   const navigate = useNavigate();



//   return (
//     <div
//       className="relative h-screen w-full bg-cover bg-center flex flex-col"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')", // replace with your own image
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Navbar */}
//       <nav className="relative z-20 flex items-center justify-between px-8 sm:px-16 py- text-white">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           {/* <span className="text-2xl font-bold tracking-wide">TRAVEELLA</span> */}
//            <div className="flex justify-center mb-4 sm:mb-4">
//                     <img
//                       src={travel}
//                       alt="Travel"
//                      className="h-30 sm:h-56 md:h-90 object-contain"
//                     />
//                   </div>
          
//         </div>

//         {/* Menu */}
//         <div className="hidden md:flex space-x-8 text-sm font-medium">
//           <button className="hover:text-gray-300">Home</button>
//           <button className="hover:text-gray-300">Blog</button>
//           <button className="hover:text-gray-300">About Us</button>
//         </div>

//         {/* Auth buttons */}
//         <div className="flex space-x-3">
//           <button onClick={() => navigate("/signup")} className="text-sm hover:text-gray-300">SIGNUP</button>
//           <button onClick={() => navigate("/login")} className="border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
//             LOGIN
//           </button>
//         </div>
//       </nav>

//       {/* Hero section */}
//       <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center text-white px-4">
//         <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
//           FIND MORE ,CHOOSE <br /> SMARTER , WANDER FREELY
//         </h1>

//         <div className="flex flex-col sm:flex-row gap-5 mt-4">
//           <button className="border border-white px-8 py-3 rounded-full text-sm hover:bg-white hover:text-black transition">
//             Join Co-Travelling
//           </button>
//           <button className="border border-white px-8 py-3 rounded-full text-sm hover:bg-white hover:text-black transition">
//             Discover Places
//           </button>
//         </div>
//       </div>

//       {/* Scroll Down Images */}
//      <div className="absolute bottom-6 right-24 z-20 flex flex-col items-center gap-1 animate-bounce">
//       <img src={chevron} alt="Scroll Icon" className="w-16 h-16 object-contain" />
//       <img src={chevron} alt="Scroll Icon" className="w-16 h-16 object-contain" />
//       <img src={chevron} alt="Scroll Icon" className="w-16 h-16 object-contain" />
//      </div>

      
//     </div>
//   );
// }
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chevron from "../images/chevron.png";
import travel from "../images/traveellalogo.png";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 5) {
        navigate("/LandingPageOnScroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

  return (
    <div
      className="relative min-h-[250vh] w-full bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-3 sm:py-4 md:py-6 text-white  backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={travel}
            alt="Travel"
            className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto object-contain"
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
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <img src={chevron} alt="Scroll down" className="w-8 h-8 object-contain" />
            <img src={chevron} alt="Scroll down" className="w-8 h-8 object-contain" />
            <img src={chevron} alt="Scroll down" className="w-8 h-8 object-contain" />
          </div>
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="lg:hidden relative z-20 flex flex-col items-center justify-center pb-8 translate-y-[200px]">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <img src={chevron} alt="Scroll down" className="w-6 h-6 object-contain" />
          <img src={chevron} alt="Scroll down" className="w-6 h-6 object-contain" />
          <img src={chevron} alt="Scroll down" className="w-6 h-6 object-contain" />
        </div>
      </div>
    </div>
  );
}
