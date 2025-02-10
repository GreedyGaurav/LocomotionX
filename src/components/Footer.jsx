import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        {/* Main Links Section */}
        <div className="flex flex-col sm:flex-row items-center text-sm sm:text-base space-y-4 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-0">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Developer Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <p className="text-sm">Developed by</p>
          <p className="text-lg font-semibold text-white">Gaurav Sharma</p>
          <div className="flex justify-center sm:justify-start mt-3 space-x-6">
            <a
              href="https://www.linkedin.com/in/greedygaurav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-400 hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/GreedyGaurav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.instagram.com/gaurav_sharma._18/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-400 hover:text-pink-600 transition"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto flex justify-center items-center mt-6 sm:mt-0">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} LocomotionX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
