
import React, { useRef,useEffect,useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import chevron from "../images/chevron.png";
import travel from "../images/traveellalogo.png";
import travel1 from "../images/traveellaSignup.png";
import HeroSection from "../components/afterBeforeCommon/HeroSection";
import SearchBar from "../components/afterBeforeCommon/SearchBar";
import landing from "../images/landingPageBg.jpg";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Offerings from "../components/afterBeforeCommon/Offerings";
import BackPacking from "../components/afterBeforeCommon/BackPacking";
import aeroplane from "../images/aeroplane.svg"
import LuxuriousTravel from "../components/afterBeforeCommon/LuxuriousTravel"
import aeroplanebackward from "../images/aeroplanebackward.svg"
import CoTravel from "../components/afterBeforeCommon/CoTravel";
import Footer from "../components/common/Footer";
import NavbarBeforeloggedin from "../components/beforeLoggedInPage/navbarbeforeloggedin";
import ArrowScrolldown from "../components/landingPage/ArrowScrolldown";
import chooseTraveella from "../images/whyChoseTravella.png";



export default function LandingPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  // use of gsap animation
  const headingRef = useRef(null);
   useGSAP(() => {
    // Select all words inside h1
    const words = headingRef.current.querySelectorAll("span");

    gsap.from(words, {
      opacity: 0,
      y: 60,
      stagger: 0.3,
      duration: 1.5,
      ease: "power3.out",
   
    });
  }, []);
  // for smooth scrolling 
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  // Smooth parallax / blur animations
  const blurValue = useTransform(scrollYProgress, [0, 0.6, 1], ["0px", "8px", "12px"]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4]);
  const ySecond = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"], { clamp: true });

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-black  overflow-x-hidden">
      {/* === FIRST SECTION === */}
      <motion.div
        className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat z-10"
        style={{
          filter: blurValue,
          opacity: opacityValue,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4 text-white">
                    {/* Logo */}
                    <img
                      src={travel}
                      alt="Travel"
                      className="h-14 sm:h-20 w-auto object-contain"
                    />
          
                    {/* Navbar Links */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-base font-medium">
                      <button className="hover:text-gray-300 transition">Home</button>
                      <button className="hover:text-gray-300 transition">Blog</button>
                      <button className="hover:text-gray-300 transition">About Us</button>
                    </div>
          
                    {/* Auth Buttons */}
                    <div className="flex space-x-2 sm:space-x-4 text-xs sm:text-sm">
                      <button
                        onClick={() => navigate("/signup")}
                        className="hover:text-gray-300 transition"
                      >
                        SIGNUP
                      </button>
                      <button
                        onClick={() => navigate("/login")}
                        className="border border-white px-3 sm:px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
                      >
                        LOGIN
                      </button>
                    </div>
                  </nav>
        
        {/* Hero Section */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between mt-[280px] px-6 lg:px-16 w-full">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-white space-y-6 mt-32 lg:mt-0">
            <h1    ref={headingRef} className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-[800px]">
             <span className="text-[rgba(226,173,100,1)] inline-block">FIND MORE,</span> <br className="hidden lg:block" />  <span className="inline-block">CHOOSE SMARTER,</span > <br className="hidden lg:block" /> <span className="text-[rgba(108,99,255,1)] inline-block">WANDER FREELY</span>
            </h1>
              
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="border border-white px-6 sm:px-8 py-3 rounded-full hover:bg-white hover:text-black transition font-medium text-sm sm:text-base">
                Join Co-Travelling
              </button>
              <button className="border border-white px-6 sm:px-8 py-3 rounded-full hover:bg-white hover:text-black transition font-medium text-sm sm:text-base">
                Discover Places
              </button>
            </div>
          </div>

          <ArrowScrolldown/>
        </div>

       
      </motion.div>

      {/* === SECOND SECTION === */}
      <motion.div
        style={{ y: ySecond }}
        className="sticky top-0 flex flex-col items-center z-30 bg-white text-black shadow-2xl min-h-[200vh] w-screen"
      >
        {/* Navbar */}
       <NavbarBeforeloggedin/>

        {/* Content */}
        <div className="pt-[120px] px-4 sm:px-6 lg:px-16 w-full max-w-8xl mx-auto">
          <HeroSection />
          <div className="mt-6 w-full max-w-4xl mx-auto">
            <SearchBar />
          </div>

          {/* Mid Section */}
          <div className="flex flex-col md:flex-row items-start justify-center w-full mt-10 gap-8">
            {/* Left - Image */}
            <div className="md:w-1/2 w-full relative h-[300px] sm:h-[400px]">
              <img
                src={landing}
                alt="Travel"
                className="w-full h-full rounded-xl object-cover shadow-lg"
              />

              {/* Floating Button */}
              <div className="absolute bottom-4 right-4">
                <button className="bg-black text-white rounded-full px-6 sm:px-10 py-3 hover:bg-gray-800 transition font-semibold shadow-lg text-sm sm:text-base">
                  LET'S EXPLORE
                </button>
              </div>
            </div>

            {/* Right - Text Box */}
            <div className="md:w-1/2 w-full border border-gray-300 rounded-xl p-6 shadow-md bg-white h-auto flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Want to know the best cafés in Bangalore?
              </h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Or maybe hidden coastal gems in Mangalore, cultural escapes in Chennai,
                or budget-friendly adventures in Delhi? Our blogs bring you real stories,
                smart itineraries, and insider tips from fellow explorers.
              </p>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Travel with the Travella Tribe.
              </h2>
              <button className="bg-black text-white rounded-full px-4 sm:px-8 py-2 hover:bg-gray-800 transition font-semibold text-sm sm:text-base w-fit">
                Check out our Blogs
              </button>
            </div>
          </div>
           <br className="gap-y-[80px]"></br>
     <Offerings/>
     <br className="gap-y-[80px]"></br>
     <BackPacking/>
             <img
               src={aeroplane}
               alt="aeroplane icon"
               className="  mr-[70px]  w-screen h-[170px]
                  sm:w-screen sm:h-[200px]
              md:w-screen md:h-[230px]
           lg:w-screen lg:h-[250px]
              xl:w-screen xl:h-[300px] " 
             />

          <LuxuriousTravel/>
            <img
               src={aeroplanebackward}
               alt="aeroplane icon"
               className="  mr-[70px]  w-screen h-[170px]
                  sm:w-screen sm:h-[200px]
              md:w-screen md:h-[230px]
           lg:w-screen lg:h-[250px]
              xl:w-screen xl:h-[300px] " 
             />
             <CoTravel/>

             {/* Footer Image */}
                   <div className="w-full mt-10 flex justify-center px-4 sm:px-8 lg:px-16">
                     <img
                       src={chooseTraveella}
                       alt="Why Choose Travella"
                       className="w-full max-w-[1200px] h-auto object-cover rounded-xl shadow-lg"
                     />
                   </div>
           
           
        </div>
          <div className="w-full"><Footer/></div>
      </motion.div>
        
    </div>
  );
}