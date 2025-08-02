import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 animate-fadeIn">
          <a
            href="https://seniorsense.netlify.app/"
            target="_blank"
            className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            More Info
          </a>
          <button
            
            className="w-full text-left block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            About
          </button>
          <div className="block px-4 py-2 text-gray-400 dark:text-gray-500 cursor-not-allowed">
            Coming Soon
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

