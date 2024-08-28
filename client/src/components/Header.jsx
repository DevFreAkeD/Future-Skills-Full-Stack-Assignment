import React from "react";

const Header = () => {
  return (
    <div className="bg-zinc-950 px-24 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <rect x="7" y="7" width="37" height="37" rx="11" ry="11" fill="white" />
          <path d="M14,14 L36,14 L36,36" stroke="black" strokeWidth="3" fill="none" />
          <circle cx="25" cy="25" r="5" stroke="black" strokeWidth="3" fill="none" />
        </svg>

        <h2 className="text-md font-semibold text-zinc-100">Abstract | Help Center</h2>
      </div>

      <a
        href="/"
        className="bg-zinc-700 px-5 py-1.5 border text-zinc-300 font-semibold border-zinc-300 rounded-lg"
      >
        Submit A Request
      </a>
    </div>
  );
};

export default Header;