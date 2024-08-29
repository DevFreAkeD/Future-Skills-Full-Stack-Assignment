import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-zinc-100 shadow-lg rounded-lg p-6 border border-zinc-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="border-t border-zinc-300 my-2"></div>
      <div className="text-zinc-700 text-md">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;