import React from "react";

export default function BlogHighlight() {
  return (
    <div className="max-w-4xl mx-auto mt-10 border border-gray-400 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold">
        Want to know the best cafés in Bangalore?
      </h3>

      <p className="mt-2 text-gray-600">
        Travel with the <span className="font-semibold">Travella Tribe</span>. 
        Or maybe hidden coastal gems in Mangalore, cultural escapes in Chennai, or budget-friendly adventures in Delhi?  
        Our blogs bring you real stories, smart itineraries, and insider tips from fellow explorers.
      </p>

      <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
        Check out our Blogs
      </button>
    </div>
  );
}
