import { LocationMarkerIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Branch_stock() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <>
      <div className="ml-5 mr-5 sm:ml-70">
        <div className="flex items-center mt-3">
          {" "}
          {/* Flex container to align icon and text */}
          <LocationMarkerIcon className="h-5 w-5 mr-2" /> {/* Icon */}
          <h1 className="text-2xl font-bold ">Lucena</h1> {/* Heading */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {/* Product Category Card */}
          <div className="card bg-white rounded-lg shadow-md overflow-hidden max-w-2xl">
            <div className="flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="md:w-1/3">
                <img
                  src="/src/assets/image/light1.jpg" // Replace with your image path
                  className="w-full h-48 md:h-full object-cover p-3 rounded-3xl"
                  alt="LED Lights"
                />
              </div>
              {/* Product Details */}
              <div className="md:w-2/3 p-6">
                {/* Product Category Name */}
                <h5 className="text-xl font-bold mb-2">LED Lights </h5>
                <h6 className="text-sm font-bold mb-2">Category</h6>
                {/* Features */}
                <div className="flex items-center text-gray-600 mb-2">
                  {/* Heroicon for energy-efficient */}
                  <span>Energy-efficient and long-lasting</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  {/* Heroicon for colors and styles */}
                  <span>Available in various colors and styles</span>
                </div>
                {/* View Button */}
                <button
                  className="w-full md:w-auto cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={() => {
                    console.log("View LED Lights");
                    navigate("/branch_products"); // Navigate to the product table page
                  }}
                >
                  View Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branch_stock;
