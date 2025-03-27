import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg relative z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold tracking-wide">
          <span className="text-yellow-400">Locomotion</span>
          <span className="text-red-800">X</span>
        </Link>

        <button
          className="sm:hidden text-white hover:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden sm:flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="text-white border border-gray-700 px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white border border-gray-700 px-4 py-2 rounded-md hover:bg-gray-800"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white border border-gray-700 px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white border border-gray-700 px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Contact
            </Link>
          </li>
          <li>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
