import React, { useContext } from "react";
import { AppContext } from "../AppContent";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const MainComponent = () => {
  const { cards, searchTerm, setSearchTerm } = useContext(AppContext);

  // Filter cards based on the search term
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-h-full overflow-hidden my-10">
      <div className="bg-zinc-200 py-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-2">How Can I Help You?</h2>

        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
        <div className="container mx-auto px-4 sm:px-10 lg:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-6">
            {filteredCards.map((card) => (
              <Card key={card.id} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;