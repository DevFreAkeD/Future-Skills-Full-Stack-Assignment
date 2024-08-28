import React from "react";

const Header = () => {
  return (
    <div className="bg-zinc-950 px-4 sm:px-6 md:px-12 lg:px-24 py-3 flex items-center justify-between flex-wrap">
      <div className="flex items-center space-x-2">
        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <rect x="7" y="7" width="30" height="30" rx="8" ry="8" fill="white" />
          <path d="M12,12 L28,12 L28,28" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="4" stroke="black" strokeWidth="2" fill="none" />
        </svg>
        <h2 className="text-sm sm:text-md md:text-lg font-semibold text-zinc-100">
          Abstract | Help Center
        </h2>
      </div>

      <a
        href="/"
        className="bg-zinc-700 px-4 py-1.5 text-sm sm:text-md border text-zinc-300 font-semibold border-zinc-300 rounded-lg hover:bg-zinc-600 transition-colors"
      >
        Submit A Request
      </a>
    </div>
  );
};

export default Header;