import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative md:pl-8 px-8 md:px-0 h-20 flex justify-between items-center bg-white">
      {/* Gradient background for the last 20% */}

      <div className="relative z-10">
        <NavLink to="/" className="font-bold text-2xl text-[#1e6a8e]">
          LinkUp
        </NavLink>
      </div>

      <nav className="hidden md:flex gap-4 relative z-10">
        <ul className="flex gap-4 font-bold text-[#1e6a8e]">
          <li>
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" className="hover:underline">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className="hover:underline">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="hover:underline">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="h-20 w-[256] relative hidden md:flex">
        <svg
          className="h-full"
          viewBox="0 0 256 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 0H42.0636L0 80H256V0Z"
            fill="url(#paint0_linear_17_3)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_17_3"
              x1="0"
              y1="40"
              x2="256"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#63A3B0" />
              <stop offset="0.506667" stopColor="#238ABE" />
            </linearGradient>
          </defs>
        </svg>
        <button className="bg-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[#1e6a8e] font-medium py-2 px-4 rounded-full hover:bg-blue-100 transition-all duration-300 z-10">
        Download
      </button>
      </div>

     

      <div className="md:hidden relative z-10">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-blue-500 p-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a to="/home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a to="/features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a to="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a to="/about" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
