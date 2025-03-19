import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import light1 from "/src/assets/image/light1.jpg"; // Import the static image

function Awaiting_approval() {
  const navigate = useNavigate(); // Hook for navigation

  // Static product data (replace with API fetch in a real application)
  const initialProduct = {
    id: "001",
    name: "LED Bulb",
    category: "Bulbs",
    price: "Php 599.99",
    quantity: 100,
    status: "Pending",
    imageUrl: light1,
    description:
      "This is a detailed description of the LED Bulb. This is a detailed description of the LED Bulb. This is a detailed description of the LED Bulb. This is a detailed description of the LED Bulb.",
  };

  const branch_location = {
    location: "Lucena",
  };

  // State to manage form data
  const [product, setProduct] = useState(initialProduct);
  const [branch, setLocation] = useState(branch_location);
  const [requestedStock, setRequestedStock] = useState(0); // State for requested stock

  // Handle input changes for requested stock
  const handleStockChange = (e) => {
    setRequestedStock(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the updated product data to an API
    console.log("Request Stock:", requestedStock);
    alert("Request Accepted!");
  };

  // Handle "Back to All Stock" button click
  const handleBackToAllStock = () => {
    navigate("/pending_request"); // Navigate to the All Stock page
  };

  return (
    <div className="p-6 max-w-4xl ml-80 mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">{branch.location}</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full md:w-1/3">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Product Details Form */}
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
            <h5 className="text-lg font-semibold mb-2 text-gray-600">
              {product.category}
            </h5>
            <h5 className="text-lg font-semibold mb-2 text-green-500">
              {product.status}
            </h5>
            <h5 className="text-lg font-semibold mb-2 text-blue-600">
              {product.price}
            </h5>
            <p className="text-sm text-gray-700 mb-4">
              Quantity: {product.quantity}
            </p>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleBackToAllStock}
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Awaiting_approval;
