import React from "react";
import { Link } from "react-router-dom";
import car from "../assets/CAR.jpeg"; // Importing car image


const HomePage = () => {
  return (
    <div
      className="flex flex-col min-h-screen text-white relative"
      style={{
        backgroundImage: `url(${car})`,
        backgroundSize: "cover", // Full-screen background
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Header */}
      <header>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Header content intentionally left empty */}
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 z-10 relative">
        <h2 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-blue-300">CarSpareParts</span>
        </h2>
        <p className="text-lg max-w-2xl mb-8">
          Manage your account, reset your password, and access our exclusive
          features effortlessly. Start your journey with us today!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-8 py-4 bg-blue-500 text-white text-lg font-bold rounded shadow-md hover:bg-blue-600 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
