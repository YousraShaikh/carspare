import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const DashBoard = () => {
  // Example product IDs (you should replace this with dynamic data from the backend)
  const sampleProductId = "123"; // Replace this with actual product data
  const sampleDeleteProductId = "456"; // Replace this with actual product data

  return (
    <div className="dashboard-container flex">
      {/* Main Content */}
      <div className="main-content flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

        {/* Product Management Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Product</h3>
            <Link to="/create-product">
              <button className="flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-md font-medium hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition">
                <FaPlus className="mr-2" /> Add Product
              </button>
            </Link>
          </div>

          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Product</h3>
            <Link to={`/update-product/${sampleProductId}`}>
              <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition">
                <FaEdit className="mr-2" /> Update Product
              </button>
            </Link>
          </div>

          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Delete Product</h3>
            <Link to={`/delete-product/${sampleDeleteProductId}`}>
              <button className="flex items-center justify-center bg-red-500 text-white px-4 py-3 rounded-md font-medium hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition">
                <FaTrash className="mr-2" /> Delete Product
              </button>
            </Link>
          </div>

          {/* Link to Manage Products */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Manage Products</h3>
            <Link to="/manage-products">
              <button className="flex items-center justify-center bg-purple-500 text-white px-4 py-3 rounded-md font-medium hover:bg-purple-600 focus:ring-2 focus:ring-purple-300 transition">
                Go to Products
              </button>
            </Link>
          </div>

          {/* Link to Manage Categories */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Manage Categories</h3>
            <Link to="/categories">
              <button className="flex items-center justify-center bg-yellow-500 text-white px-4 py-3 rounded-md font-medium hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 transition">
                Go to Categories
              </button>
            </Link>
          </div>

          {/* Link to Orders */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Orders</h3>
            <Link to="/orders">
              <button className="flex items-center justify-center bg-teal-500 text-white px-4 py-3 rounded-md font-medium hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 transition">
                View Orders
              </button>
            </Link>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Products</h3>
            <p className="text-2xl font-bold text-gray-600">120</p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Orders</h3>
            <p className="text-2xl font-bold text-gray-600">45</p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Categories</h3>
            <p className="text-2xl font-bold text-gray-600">8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
