// import React from "react";
// import HeroSection from "../components/afterBeforeCommon/HeroSection";
// import { useNavigate } from "react-router-dom";
// import travel from "../images/traveellaSignup.png";
// import SearchBar from "../components/afterBeforeCommon/SearchBar";
// import landing from "../images/landingPageBg.jpg";
// import chooseTraveella from "../images/whyChoseTravella.png";

// export default function LandingPageOnScroll() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative w-full bg-white text-black">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-2 bg-white shadow-md">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={travel}
//             alt="Travel"
//             className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
//           />
//         </div>

//         {/* Navbar links */}
//         <div className="bg-black border border-black px-6 py-2 rounded-full hidden md:flex space-x-10 text-sm lg:text-base font-medium">
//           <button className="hover:text-gray-400 text-white transition-colors duration-200 font-bold">
//             Discovery
//           </button>
//           <button className="hover:text-gray-400 text-white transition-colors duration-200 font-bold">
//             Blogs
//           </button>
//           <button className="hover:text-gray-400 text-white transition-colors duration-200 font-bold">
//             About Us
//           </button>
//         </div>

//         {/* Auth buttons */}
//         <div className="flex space-x-2 sm:space-x-3 text-xs sm:text-sm">
//           <button
//             onClick={() => navigate("/signup")}
//             className="hover:text-gray-400 transition-colors duration-200 px-3 py-1 font-bold"
//           >
//             SIGNUP
//           </button>
//           <button
//             onClick={() => navigate("/login")}
//             className="border border-black px-4 text-white bg-black py-1 rounded-full hover:bg-white hover:text-black transition-all duration-200 font-extrabold"
//           >
//             LOGIN
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="pt-[120px]">
//         <HeroSection />
//       </div>

//       {/* Search Bar */}
//       <div className="mt-6 px-4 sm:px-8 lg:px-16">
//         <SearchBar />
//       </div>

//       {/* Mid Section */}
//       <div className="flex flex-col md:flex-row items-start justify-center w-full mt-10 px-4 sm:px-8 lg:px-16 gap-8">
//         {/* Left - Image */}
//         <div className="md:w-[45%] w-full relative flex items-center h-[400px]">
//           <img
//             src={landing}
//             alt="Travel"
//             className="w-full h-full rounded-xl object-cover shadow-lg"
//           />
//           <div className="h-[400px] bg-white relative">
//             {/* Button cutting the bottom-right corner */}
//             <div className="absolute bottom-0 right-0 translate-x-[20px] translate-y-[10px] bg-white text-black px-[120px] py-[30px] rounded-full font-semibold shadow-lg whitespace-nowrap">
//               <button className="absolute bg-black text-white rounded-[15px] -translate-x-[70px] -translate-y-[20px] px-[45px] py-[10px] hover:bg-gray-800 transition-colors duration-200 font-semibold">
//                 LET'S EXPLORE
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right - Text Box */}
//         <div className="md:w-[40%] w-full border border-gray-800 rounded-xl p-6 shadow-md bg-white h-[400px] flex flex-col justify-center">
//           <h2 className="text-2xl font-bold mb-11">
//             Want to know the best cafés in Bangalore?
//           </h2>
//           <p className="text-gray-700 mb-4">
//             Or maybe hidden coastal gems in Mangalore, cultural escapes in
//             Chennai, or budget-friendly adventures in Delhi? Our blogs bring
//             you real stories, smart itineraries, and insider tips from fellow
//             explorers.
//           </p>
//           <h2 className="text-2xl font-bold mb-4">Travel with the Travella Tribe.</h2>
//           <button className="bg-black w-[200px] text-white rounded-[20px] px-1 py-2 hover:bg-gray-800 transition-colors duration-200 font-semibold">
//             Check out our Blogs
//           </button>
//         </div>
//       </div>

//       {/* Footer Image */}
//       <div className="w-full mt-10 flex justify-center px-4 sm:px-8 lg:px-16">
//         <img
//           src={chooseTraveella}
//           alt="Why Choose Travella"
//           className="w-full max-w-[1200px] h-auto object-cover rounded-xl shadow-lg"
//         />
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white mt-10 p-6 text-center">
//         &copy; 2025 Travella. All rights reserved.
//       </footer>
//     </div>
//   );
// }
