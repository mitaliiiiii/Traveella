import React from "react";
import TravelImg from "../../images/exploredetail.png";

export default function TravellingAlone() {
  return (
    <div className="w-screen bg-black text-white flex flex-col md:flex-row items-center md:items-stretch justify-between p-4 md:p-0">

      {/* LEFT SECTION */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[55%] space-y-4 p-4 md:p-10">
        <h2 className="text-3xl font-bold">Travelling Alone ?</h2>

        <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
          Join a Group and make new friends. Join a Group and make new friends.
          Join a Group and make new friends. Join a Group and make new friends.
          Join a Group and make new friends.
        </p>

        <button className="mt-2 bg-purple-500 text-white text-xs px-5 py-2 rounded-lg hover:bg-purple-600 transition">
          Join a Group Travel
        </button>
      </div>

      {/* RIGHT IMAGE (FULL HEIGHT) */}
      <div className="w-full md:w-[45%] h-64 md:h-auto flex md:block">
        <img
          src={TravelImg}
          alt="Travelling Alone"
          className="w-full h-full object-cover md:object-right"
        />
      </div>

    </div>
  );
}
