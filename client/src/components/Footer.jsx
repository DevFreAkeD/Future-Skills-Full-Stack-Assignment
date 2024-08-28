import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 px-24 pt-8 pb-24 text-zinc-100">
      <div className="flex justify-between">

        <div>
          <h3 className="text-xl font-semibold mb-4">Abstract</h3>
          <ul>
            <li><a href="#">Branches</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Release Notes</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Community</h3>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Dribble</a></li>
            <li><a href="#">Podcast</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="mb-3">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Legel</a></li>
          </ul>
          <h4 className="text-md font-semibold mb-1">Contact Us</h4>
          <span><a href="#">info@abstract.com</a></span>
        </div>

        <div>
        <div className="flex-col mt-36">
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