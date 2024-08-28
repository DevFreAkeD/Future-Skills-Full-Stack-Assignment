import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 px-6 sm:px-12 lg:px-24 pt-8 pb-24 text-zinc-100">
      <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-16">
        {/* Abstract Section */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Abstract</h3>
          <ul className="space-y-0">
            <li><a href="#" className="hover:underline">Branches</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Resources</h3>
          <ul className="space-y-0">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Release Notes</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Community</h3>
          <ul className="space-y-0">
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Dribble</a></li>
            <li><a href="#" className="hover:underline">Podcast</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Company</h3>
          <ul className="space-y-0 mb-3">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
          </ul>
          <h4 className="text-md font-semibold mb-1">Contact Us</h4>
          <span><a href="#" className="hover:underline">info@abstract.com</a></span>
        </div>

        {/* Copyright Section */}
        <div className="flex-1 flex flex-col mt-32 items-start md:items-end">
          <div className="flex-col">
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <rect x="7" y="7" width="37" height="37" rx="11" ry="11" fill="white" />
              <path d="M14,14 L36,14 L36,36" stroke="black" strokeWidth="3" fill="none" />
              <circle cx="25" cy="25" r="5" stroke="black" strokeWidth="3" fill="none" />
            </svg>

            <div className="ml-2">
              <span className="block text-md font-semibold">
                &copy; Copyright 2024
              </span>
              <span className="block text-md font-semibold">
                Abstract Studio Design, Inc.
              </span>
              <span className="block text-md font-semibold">
                All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;