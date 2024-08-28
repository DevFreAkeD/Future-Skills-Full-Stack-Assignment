import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const MainComponent = () => {
  return (
    <div className="max-h-screen overflow-hidden my-10">
      <div className="bg-zinc-200 py-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-2">How Can I Help You?</h2>
        
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-3 pl-4 pr-12 border border-zinc-800 rounded-md text-zinc-900 placeholder-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-800"
          />
          <FaArrowRight
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-800 cursor-pointer"
            size={18}
          />
        </div>
      </div>

      {/* Grid Section for Cards */}
      <div className="bg-zinc-50 py-10">
        <div className="container mx-auto px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;