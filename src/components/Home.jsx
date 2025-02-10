import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="absolute inset-0">
        <img
          src="home.jpg"
          alt="Background"
          className="w-full h-full object-cover filter blur-xs"
        />
      </div>
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Welcome to <span className="text-yellow-400">Locomotion</span>
          <span className="text-red-800">X</span>
        </h1>
        <Link to="/search">
          <button className="mt-5 px-6 py-3 bg-yellow-200 text-gray-900 text-2xl rounded-4xl font-semibold shadow-lg hover:bg-yellow-600 transition">
            Let's Begin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
