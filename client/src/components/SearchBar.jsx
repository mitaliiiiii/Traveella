import React from "react";

export default function SearchBar() {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex w-full max-w-xl border border-gray-400 rounded-full overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search for your favorite location"
          className="flex-1 px-5 py-3 outline-none"
        />
        <button className="bg-black text-white px-6 py-3 hover:bg-gray-800">
          Search
        </button>
      </div>
    </div>
  );
}
