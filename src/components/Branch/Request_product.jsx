import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import light1 from "/src/assets/image/light1.jpg"; // Import the static image
import { useSidebar } from "../SidebarContext";

function Request_product() {
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
    description:
      "This is a detailed description of the LED Bulb This is a detailed description of the LED Bulb This is a detailed description of the LED Bulb This is a detailed description of the LED Bulb .",
  };

  // State to manage form data
  const [product, setProduct] = useState(initialProduct);

  // Handle input changes
  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setProduct((prevProduct) => ({
  //       ...prevProduct,
  //       [name]: value,
  //     }));
  //   };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the updated product data to an API
    console.log("Request Product Data:", product);
    alert("Request Successfully!");
  };

  // Handle "Back to All Stock" button click
  const handleBackToAllStock = () => {
    navigate("/branch_products"); // Navigate to the All Stock page
  };
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={`transition-all duration-300 ${
        isCollapsed ? "ml-5" : "ml-1"
      } p-2 sm:p-4 `}
    >
      <div className="ml-5 mr-5  p-6 max-w-4.5xl mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Request Product</h1>
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
            <div className="flex-2">
              <h3 className="text-3xl font-extrabold mb-2">{product.name}</h3>
              <h5 className="text-lg font-bold mb-2">{product.category}</h5>
              <h5 className="text-lg font-bold mb-2 text-green-500">
                {product.status}
              </h5>
              <h5 className="text-lg font-bold mb-2 text-green-500">
                {product.price}
              </h5>
              <p className="text-sm font-semibold mb-2">
                {product.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {/* Stock */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Request Stock ?
                  </label>
                  <input
                    type="number"
                    name="stock"
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
                  Requst Product
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
    </div>
  );
}

export default Request_product;
