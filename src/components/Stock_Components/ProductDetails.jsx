import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import light1 from "/src/assets/image/light1.jpg"; // Import the static image
import { useSidebar } from "../SidebarContext";

function ProductDetails() {
  const { isCollapsed } = useSidebar();

  const { productId } = useParams(); // Extract productId from the URL
  const navigate = useNavigate(); // Hook for navigation

  // Static product data (replace with API fetch in a real application)
  const initialProduct = {
    id: "001",
    name: "LED Bulb",
    category: "Bulbs",
    price: "Php 599.99",
    stock: 100,
    status: "In Stock",
    imageUrl: light1,
    description: "This is a detailed description of the LED Bulb.",
  };

  // State to manage form data
  const [product, setProduct] = useState(initialProduct);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle form submission for updating
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the updated product data to an API
    console.log("Updated Product Data:", product);
    alert("Product updated successfully!");
    navigate("/all_stock"); // Navigate back to the All Stock page after deletion
  };

  // Handle "Back to All Stock" button click
  const handleBackToAllStock = () => {
    navigate("/all_stock"); // Navigate to the All Stock page
  };

  // Handle delete product
  const handleDeleteProduct = () => {
    // Confirmation alert
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirmed) {
      // Perform delete action (e.g., send a DELETE request to an API)
      console.log("Product deleted:", productId);
      alert("Product deleted successfully!");
      navigate("/all_stock"); // Navigate back to the All Stock page after deletion
    }
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isCollapsed ? "ml-5" : "ml-1"
      } p-2 sm:p-4 `}
    >
      {/* <div className="ml-5 mr-5 sm:ml-70 p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md"> */}
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="w-full md:w-80 h-auto">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Product Details Form */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  name="product-name"
                  value={product.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Stock */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Status */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="status"
                  value={product.status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Discontinued">Discontinued</option>
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4 float-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update Product
              </button>

              <button
                type="button"
                onClick={handleDeleteProduct}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete Product
              </button>
              <button
                type="button"
                onClick={handleBackToAllStock}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductDetails;
