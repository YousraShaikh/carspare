import React, { useState } from "react";
import axios from "axios";

const CreateProductPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    stockQuantity: "",
    category: "",
    image: "",
  });

  // Assuming the token is stored in localStorage after login
  const token = localStorage.getItem("token");  // Or use another method to get the token
  console.log(token);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/product/create-product",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // Include the token here
          },
        }
      );
      console.log("Product created:", response.data);
      alert("Product created successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[350px] lg:w-[400px] md:ml-96 mt-8 lg:ml-[600px] rounded-xl shadow-lg p-4 space-y-4 bg-white"
    >
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        ></textarea>
      </div>
      <div>
        <label htmlFor="stockQuantity">Stock Quantity</label>
        <input
          type="number"
          id="stockQuantity"
          name="stockQuantity"
          value={formData.stockQuantity}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        >
          <option value="">Select a category</option>
          <option value="Engine">Engine</option>
          <option value="Tires">Tires</option>
          <option value="Electronics">Electronics</option>
          <option value="Brakes">Brakes</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div>
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-blue-500 rounded-md hover:scale-105 hover:bg-blue-700 text-white px-4 py-2"
        >
          Create Product
        </button>
      </div>
    </form>
  );
};

export default CreateProductPage;
