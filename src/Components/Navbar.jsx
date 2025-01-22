import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/category/${category}`);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Flowbite
          </span>
        </a>

        {/* Search bar and Action Buttons */}
        <div className="flex md:order-2 items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full p-2 pl-10 text-sm border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          {/* Login & Signup Links */}
          <a
            href="/login"
            className="text-sm text-gray-900 hover:text-blue-700 font-medium py-2 px-3"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-sm text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-2 font-medium"
          >
            Signup
          </a>

          {/* Cart Icon */}
          <a href="/cart" className="text-gray-900 flex items-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-1.5 9H5.25L3 3z"
              />
            </svg>
            <span className="ml-1">0</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </a>
            </li>

            {/* Dashboard Link */}
            <li>
              <a
                href="/dashboard"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Dashboard
              </a>
            </li>

            {/* Services Link */}
            <li>
              <a
                href="/services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Services
              </a>
            </li>

            {/* Car Spare Parts Categories Dropdown */}
            <li className="relative group">
              <button className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Categories
              </button>
              <ul className="absolute hidden group-hover:block bg-white border rounded-lg shadow-lg mt-2">
                <li>
                  <button
                    onClick={() => handleCategoryClick('engine')}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Engine
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick('tires')}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Tires
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick('electronics')}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Electronics
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick('brakes')}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Brakes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick('accessories')}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Accessories
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Displaying No Products Available message when category is selected */}
      {selectedCategory && (
        <div className="text-center p-4 mt-4 bg-gray-100 border rounded">
          <h3 className="text-xl font-semibold">
            No products available for {selectedCategory}
          </h3>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
