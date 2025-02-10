import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg relative z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          <span className="text-yellow-400">Locomotion</span>
          <span className="text-red-800">X</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-white hover:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links for Desktop */}
        <ul className="hidden sm:flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="text-white border border-gray-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:border-gray-600 hover:text-green-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white border border-gray-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:border-gray-600 hover:text-green-400 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white border border-gray-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:border-gray-600 hover:text-green-400 transition duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white border border-gray-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:border-gray-600 hover:text-green-400 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-800 w-full border-t border-gray-700">
          <ul className="flex flex-col space-y-2 py-4 px-4">
            <li>
              <Link
                to="/"
                className="block text-white border border-gray-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:border-gray-600 hover:text-green-400 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-white border border-gray-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:border-gray-600 hover:text-green-400 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-white border border-gray-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:border-gray-600 hover:text-green-400 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-white border border-gray-700 px-4 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:border-gray-600 hover:text-green-400 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
