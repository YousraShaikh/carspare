import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // Access the 'id' from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/v1/product/${id}`
        );
        setProduct(response.data.product);
      } catch (err) {
        setError(
          err.response ? err.response.data.message : "An error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-red-100 text-red-800 p-4 rounded-lg shadow-md">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Product Details
        </h1>
        {product ? (
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-64 mb-8 rounded-lg"
            />
            <p className="text-gray-700 mb-2">
              <strong className="text-gray-900">ID:</strong> {product._id}
            </p>
            <p className="text-gray-700 mb-2">
              <strong className="text-gray-900">Name:</strong> {product.name}
            </p>
            <p className="text-gray-700 mb-2">
              <strong className="text-gray-900">Price:</strong> ${product.price}
            </p>
            <p className="text-gray-700 mb-2">
              <strong className="text-gray-900">Description:</strong>{" "}
              {product.description}
            </p>
            <Link to={`/update-product/${product._id}`}>
              <button
                className="w-full bg-blue-500 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition"
              >
                Update Product
              </button>
            </Link>
            <Link to={`/delete-product/${product._id}`}>
              <button
                className="w-full bg-red-500 text-white px-4 py-3 rounded-md font-medium hover:bg-red-600 focus:ring-2 focus:ring-red-300 transition"
              >
                Delete Product
              </button>
            </Link>
          </div>
        ) : (
          <div className="text-gray-500 text-center">No product found</div>
        )}
        <button
          onClick={() => window.history.back()}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
