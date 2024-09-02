import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative py-4 px-8 flex justify-between items-center">
      {/* Gradient background for the last 20% */}
      <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-r from-cyan-600 to-[#1e6a8e] pointer-events-none" />

      {/* White background for the first 80% */}
      <div className="absolute inset-y-0 left-0 w-4/5 bg-white pointer-events-none" />

      <div className="relative z-10">
        <a href="/" className="font-bold text-lg text-[#1e6a8e]">
          LinkUp
        </a>
      </div>

      <nav className="hidden md:flex gap-4 relative z-10">
        <ul className="flex gap-4 font-bold text-[#1e6a8e]">
          <li>
            <a href="/home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/features" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About Us
            </a>
          </li>
        </ul>
      </nav>

      <button className="bg-white hidden md:flex text-[#1e6a8e] font-medium py-2 px-4 rounded-full hover:bg-blue-100 transition-all duration-300 relative z-10">
        Download
      </button>

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
              <a href="/home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
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
