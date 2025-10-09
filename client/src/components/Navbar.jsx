import React from "react";
import traveella from '../images/traveellaSignup.png'; 


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow-sm">
      <div className="flex items-center gap-2">
        <img src="traveella" alt="Traveella" className="w-8 h-8" />
        <h1 className="text-xl font-semibold">TRAVELLA</h1>
      </div>

      <ul className="flex gap-8 text-gray-800 font-medium">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Discovery</li>
        <li className="hover:text-black cursor-pointer">About Us</li>
      </ul>
    </nav>
  );
}
