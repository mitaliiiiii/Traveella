import React from "react";

export default function SearchBar() {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex w-full max-w-6xl border border-gray-400 rounded-[15px] overflow-hidden shadow-sm py-2 px-5">
        <input
          type="text"
          placeholder="Search for your favorite location"
          className="flex-1 px-5 py-2 outline-none"
        />
        <button className="bg-black text-white px-4 py-0 hover:bg-gray-800 rounded-[15px]">
          Search
        </button>
      </div>


    </div>
  );
}
