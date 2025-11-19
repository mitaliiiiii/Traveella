import { useState } from "react";
import luxImg from "../images/luxuriousTrip.png";


export default function Card() {

    const [click ,setclick]=useState(false);
  return (
    <div className="w-80 rounded-2xl shadow-lg overflow-hidden bg-black">
      {/* Image Section with Sharp Bottom Cut */}
      <div className="relative w-full h-48 bg-gray-300 clip-custom">
        <img
          src={luxImg}
          alt="Sample"
          className="w-full h-full object-cover"
        />
        <button onClick={()=>setclick(!click)} className={`absolute top-3 right-3  p-2 shadow text-lg  ${    click ? "text-green-500 " : "text-white"
}`}>
    ♥
          
        </button>
      </div>

      <div className="p-4 space-y-2">
        <div className="text-sm bg-white px-2 py-1 rounded-full shadow w-fit">
          ★ 4.5 (200 reviews)
        </div>

        <h2 className="text-lg font-semibold leading-tight">
          Sample Experience Title
        </h2>

        <p className="text-gray-500 text-sm flex items-center space-x-1">
          <span>📍</span>
          <span>Sample Location</span>
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-lg font-bold">$00.00</span>
            <span className="text-gray-500 text-sm"> / person</span>
          </div>
          <button className="rounded-xl px-4 py-2 bg-black text-white text-sm">
            Book Now
          </button>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .clip-custom {
          clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
        }
      `}</style>
    </div>
  );
}