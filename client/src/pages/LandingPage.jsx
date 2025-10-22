
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import chevron from "../images/chevron.png";
// import travel from "../images/traveellalogo.png";

// export default function LandingPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > window.innerHeight/8 ) {
//         navigate("/LandingPageOnScroll");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [navigate]);

//   return (
//     <div className="relative min-h-[250vh] w-full">
//     <div
//       className="relative min-h-[100vh] w-full bg-cover bg-center bg-no-repeat flex flex-col"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Navbar */}
//  <nav className="fixed -top-3 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-0 text-white">



//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={travel}
//             alt="Travel"
//               className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 w-auto object-contain"
//           />
//         </div>

//         {/* Navbar links */}
//         <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-base font-medium">
//           <button className="hover:text-gray-300 transition-colors duration-200">Home</button>
//           <button className="hover:text-gray-300 transition-colors duration-200">Blog</button>
//           <button className="hover:text-gray-300 transition-colors duration-200">About Us</button>
//         </div>

//         {/* Auth buttons */}
//         <div className="flex space-x-2 sm:space-x-3 text-xs sm:text-sm">
//           <button
//             onClick={() => navigate("/signup")}
//             className="hover:text-gray-300 transition-colors duration-200 px-2 sm:px-3 py-1"
//           >
//             SIGNUP
//           </button>
//           <button
//             onClick={() => navigate("/login")}
//             className="border border-white px-3 sm:px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-200 text-xs sm:text-sm"
//           >
//             LOGIN
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-32 sm:py-40 lg:py-48">
//         {/* Left side - Hero content */}
//         <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-white w-full max-w-3xl mx-auto lg:mx-0 space-y-6 translate-y-[150px]">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             FIND MORE, CHOOSE <br className="hidden xs:block" /> SMARTER, WANDER FREELY
//           </h1>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-4 sm:mt-6 md:mt-8 w-full">
//             <button className="border border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-white hover:text-black transition-all duration-200 font-medium w-full sm:w-auto">
//               Join Co-Travelling
//             </button>
//             <button className="border border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-white hover:text-black transition-all duration-200 font-medium w-full sm:w-auto">
//               Discover Places
//             </button>
//           </div>
//         </div>

//         {/* Right side - Scroll indicator */}
// <div className="hidden lg:flex flex-col items-center justify-center h-full py-8 translate-y-[250px]">
//   <div className="flex flex-col items-center gap-4 animate-bounce">
//     <img src={chevron} alt="Scroll down" className="w-16 h-16 object-contain" />
//     <img src={chevron} alt="Scroll down" className="w-16 h-16 object-contain" />
//     <img src={chevron} alt="Scroll down" className="w-16 h-16 object-contain" />
//   </div>
// </div>

//       </div>

//       {/* Mobile scroll indicator */}
// <div className="lg:hidden relative z-20 flex flex-col items-center justify-center pb-8 translate-y-[200px]">
//   <div className="flex flex-col items-center gap-3 animate-bounce">
//     <img src={chevron} alt="Scroll down" className="w-10 h-10 object-contain" />
//     <img src={chevron} alt="Scroll down" className="w-10 h-10 object-contain" />
//     <img src={chevron} alt="Scroll down" className="w-10 h-10 object-contain" />
//   </div>
// </div>

//     </div>
//     </div>
//   );
//}
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import chevron from "../images/chevron.png";
import travel from "../images/traveellalogo.png";
import travel1 from "../images/traveellaSignup.png";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import landing from "../images/landingPageBg.jpg";
export default function LandingPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null); // This ref is fine, but not strictly needed for useScroll()
  
  // useScroll() without a target tracks the window scroll, which is correct here.
  const { scrollYProgress } = useScroll();

  // First section animations
  const blurValue = useTransform(scrollYProgress, [0, 0.6, 1], ["0px", "8px", "12px"]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4]);

  // Second section comes from bottom to top
  // FIX 2: Changed input range from [0, 1] to [0, 0.6] and added clamp: true
  // This makes it slide up during the first 60% of the scroll, matching the blur animation.
  const ySecond = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"], { clamp: true });

  return (
    // FIX 3: Removed overflow-hidden
    <div ref={containerRef} className="relative h-[150vh] bg-black">
      
      {/* === FIRST SECTION === */}
      <motion.div 
        className="fixed  top-0 left-0 flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat z-10"
        style={{
          filter: blurValue, // Applied blurValue directly
          opacity: opacityValue,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 lg:px-16 py-6 text-white">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={travel}
              alt="Travel"
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
            />
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8 text-sm lg:text-base font-medium">
            <button className="hover:text-gray-300 transition">Home</button>
            <button className="hover:text-gray-300 transition">Blog</button>
            <button className="hover:text-gray-300 transition">About Us</button>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-3 text-xs sm:text-sm">
            <button
              onClick={() => navigate("/signup")}
              className="hover:text-gray-300 transition px-2 sm:px-3 py-1"
            >
              SIGNUP
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
            >
              LOGIN
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between mt-[280px] px-6 lg:px-16 w-full">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-white space-y-6 mt-40 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              FIND MORE, CHOOSE <br className="hidden lg:block" /> SMARTER, WANDER FREELY
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition font-medium">
                Join Co-Travelling
              </button>
              <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition font-medium">
                Discover Places
              </button>
            </div>
          </div>

          {/* Right: Scroll Indicator */}
          <div className="hidden lg:flex flex-col items-center justify-center h-full mt-20">
            <div className="flex flex-col items-center gap-4 animate-bounce">
              <img src={chevron} alt="Scroll down" className="w-12 h-12" />
              <img src={chevron} alt="Scroll down" className="w-12 h-12" />
              <img src={chevron} alt="Scroll down" className="w-12 h-12" />
            </div>
          </div>
        </div>
             {/* Mobile scroll indicator */}
        <div className="lg:hidden relative z-20 flex flex-col items-center justify-center pb-8 translate-y-[100px]">
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <img src={chevron} alt="Scroll down" className="w-10 h-10 object-contain" />
            <img src={chevron} alt="Scroll down" className="w-10 h-10 object-contain" />
            <img src={chevron} alt="Scroll down" className="w-10 h-10 object-contain" />
          </div>
        </div>
      </motion.div>

      {/* === SECOND SECTION === */}
      <motion.div
        style={{ y: ySecond }}
        // FIX 1: Changed `absolute` to `fixed`
      //   className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black text-white z-30 shadow-2xl "
       className= " sticky top-0 left-0 flex flex-col items-center justify--center z-30 shadow-2xl h-[250vh] w-full bg-white text-black"
       >
              {/* Navbar */}
              <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-2 bg-white shadow-md">
                {/* Logo */}
                <div className="flex items-center">
                  <img
                    src={travel1}
                    alt="Travel"
                    className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                  />
                </div>
        
                {/* Navbar links */}
                <div className="bg-black border border-black px-6 py-2 rounded-full hidden md:flex space-x-10 text-sm lg:text-base font-medium">
                  <button className="hover:text-gray-400 text-white transition-colors duration-200 font-bold">
                    Discovery
                  </button>
                  <button className="hover:text-gray-400 text-white transition-colors duration-200 font-bold">
                    Blogs
                  </button>
                  <button className="hover:text-gray-400 text-white transition-colors duration-200 font-bold">
                    About Us
                  </button>
                </div>
        
                {/* Auth buttons */}
                <div className="flex space-x-2 sm:space-x-3 text-xs sm:text-sm">
                  <button
                    onClick={() => navigate("/signup")}
                    className="hover:text-gray-400 transition-colors duration-200 px-3 py-1 font-bold"
                  >
                    SIGNUP
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    className="border border-black px-4 text-white bg-black py-1 rounded-full hover:bg-white hover:text-black transition-all duration-200 font-extrabold"
                  >
                    LOGIN
                  </button>
                </div>
              </nav>
        
          <div className="pt-[120px]">
                <HeroSection />
              </div>
              <div className="mt-6 w-[950px]">
                      <SearchBar />
                    </div>

                     {/* Mid Section */}
<div className="flex flex-col md:flex-row items-start justify-center w-full mt-10 px-4 sm:px-8 lg:px-16 gap-8">
  {/* Left - Image (60%) */}
  <div className="md:w-[45%] w-full relative flex items-center h-[400px]">
    <img
      src={landing}
      alt="Travel"
      className="w-full h-full rounded-xl object-cover shadow-lg"
    />
 <div className="h-[400px] bg-white relative"> 
    {/* Button cutting the bottom-right corner */} 
   <div className="absolute bottom-0 right-0 translate-x-[20px] translate-y-[10px] bg-white text-black px-[120px] py-[30px] rounded-full font-semibold shadow-lg whitespace-nowrap">
  <button className="absolute  bg-black text-white rounded-[15px] -translate-x-[70px] -translate-y-[20px] px-[45px] py-[10px]  hover:bg-gray-800 transition-colors duration-200 font-semibold">
   LET'S EXPLORE
  </button>
</div>

</div>


  </div>

  {/* Right - Text Box (40%) */}
  <div className="md:w-[40%] w-full border border-gray-800 rounded-xl p-6 shadow-md bg-white h-[400px] flex flex-col justify-center">
    <h2 className="text-2xl font-bold mb-11">
      Want to know the best cafés in Bangalore?
    </h2>
    <p className="text-gray-700 mb-4">
      Or maybe hidden coastal gems in Mangalore, cultural escapes in Chennai,
      or budget-friendly adventures in Delhi? Our blogs bring you real stories,
      smart itineraries, and insider tips from fellow explorers.
    </p>
    <h2 className="text-2xl font-bold mb-4">Travel with the Travella Tribe.</h2>
    <button className="bg-black w-[200px] text-white rounded-[20px] px-1 py-2  hover:bg-gray-800 transition-colors duration-200 font-semibold">
      Check out our Blogs
    </button>
  </div>

</div>

            
      </motion.div>
    </div>
  );
}
