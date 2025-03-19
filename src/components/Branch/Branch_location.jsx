import React from "react";
import { useNavigate } from "react-router-dom";

function Branch_location() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleViewClick = () => {
    console.log("View Lucena Branch"); // Add your onClick logic here
    navigate("/branch_stock"); // Navigate to the desired route
  };
  return (
    <>
      {/* Branch Page */}
      <div className="ml-5 mr-5 sm:ml-70">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {/* Branch Card */}
          <div className="col">
            <div className="card h-full bg-white rounded-lg shadow-md overflow-hidden">
              {/* Branch Image */}
              <img
                src="/src/assets/image/lucena(7).jpg"
                className="w-full h-48 object-cover"
                alt="Branch Image"
              />
              {/* Branch Details */}
              <div className="p-6">
                {/* Branch Name */}
                <h5 className="text-xl font-bold mb-2">Lucena Branch</h5>
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>123 Main Street, Lucena City</span>
                </div>
                {/* Contact Info */}
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>(042) 123-4567</span>
                </div>
                {/* Description */}
                <p className="text-gray-700">
                  This branch is located in the heart of Lucena City, offering a
                  wide range of services to meet your needs. Visit us today!
                </p>
              </div>
              {/* View Button */}
              <div className="p-4 bg-gray-100 ">
                <button
                  className="w-full bg-blue-500 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={handleViewClick} // Use the onClick handler
                >
                  View
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          {/* Branch Card */}
          <div className="col">
            <div className="card h-full bg-white rounded-lg shadow-md overflow-hidden">
              {/* Branch Image */}
              <img
                src="/src/assets/image/lucena(7).jpg"
                className="w-full h-48 object-cover"
                alt="Branch Image"
              />
              {/* Branch Details */}
              <div className="p-6">
                {/* Branch Name */}
                <h5 className="text-xl font-bold mb-2">Lucena Branch</h5>
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>123 Main Street, Lucena City</span>
                </div>
                {/* Contact Info */}
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>(042) 123-4567</span>
                </div>
                {/* Description */}
                <p className="text-gray-700">
                  This branch is located in the heart of Lucena City, offering a
                  wide range of services to meet your needs. Visit us today!
                </p>
              </div>
              {/* View Button */}
              <div className="p-4 bg-gray-100 ">
                <button
                  className="w-full bg-blue-500 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={handleViewClick} // Use the onClick handler
                >
                  View
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Branch_location;
