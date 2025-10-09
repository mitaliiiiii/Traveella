import React from "react";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import BlogHighlight from '../components/BlogHighlight';
import Offerings from '../components/Offerings';



export default function AfterLoggedInPage() {
        return (
          <div className="min-h-screen font-sans bg-white text-black">
            <Navbar />
            <HeroSection />
            <SearchBar />
            <BlogHighlight />
            <Offerings />
          </div>
        );
      }