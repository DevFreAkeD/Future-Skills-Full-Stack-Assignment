import React from "react";

const Card = () => {
  return (
    <div className="bg-zinc-100 shadow-lg rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">CardTitle</h3>
      <div className="border-t border-gray-300 my-4"></div>
      
      <div className="text-gray-700">
        <p>
          This is the card content. You can add more text or any other content here. Tailwind CSS allows you to style your card component easily, making it look clean and well-structured.
        </p>
      </div>
    </div>
  );
};

export default Card;