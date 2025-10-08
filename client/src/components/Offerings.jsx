import React from "react";
import backpackingImg from '../images/backpacking.png'; 
import coTravel from '../images/coTravel.png'; 
import luxuriousTrip from '../images/luxuriousTrip.png'; 
import soloTravel from '../images/soloTravel.png'; 
import trekking from '../images/trekking.png'; 





const offerings = [
  { title: "Backpacking", img: "/images/backpacking.jpg" },
  { title: "Couples Trip", img: "/images/couples.jpg" },
  { title: "Luxurious Trips", img: "/images/luxury.jpg" },
  { title: "Solo Travel", img: "/images/solo.jpg" },
  { title: "Co-Travel with others", img: "/images/co-travel.jpg" },
  { title: "Trekking", img: "/images/trekking.jpg" },
];

export default function Offerings() {
  return (
    <section className="max-w-6xl mx-auto mt-14 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Our Offerings</h2>
        <button className="text-indigo-600 font-medium hover:underline">
          See all
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {offerings.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={backpackingImg}
              alt={item.title}
              className="h-52 w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-black/40 px-3 py-1 rounded-md">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
