import React from "react";
import { useNavigate } from "react-router-dom";
import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/outline"; // Import icons from Heroicons
import { useSidebar } from "../SidebarContext";

function BranchLocation() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Branch data stored in a const array
  const branches = [
    {
      id: 1,
      name: "Lucena Branch",
      image: "/src/assets/image/lucena(7).jpg",
      location: "123 Main Street, Lucena City",
      contact: "(042) 123-4567",
      description:
        "This branch is located in the heart of Lucena City, offering a wide range of services to meet your needs. Visit us today!",
    },
  ];

  // // Handle View Click
  // const handleViewClick = (branchId) => {
  //   console.log(`View Branch ${branchId}`); // Log the branch ID
  //   navigate(`/branch_stock/${branchId}`); // Navigate to the desired route with branch ID
  // };
  const { isCollapsed } = useSidebar();

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "ml-5" : "ml-1"
        } p-2 sm:p-4 `}
      >
        {/* Branch Page */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {/* Map over the branches array to render branch cards */}
          {branches.map((branch) => (
            <div key={branch.id} className="col flex flex-col">
              <div className="card h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                {/* Branch Image */}
                <img
                  src={branch.image}
                  className="w-full h-48 object-cover"
                  alt="Branch Image"
                />
                {/* Branch Details */}
                <div className="p-6 flex-grow">
                  {/* Branch Name */}
                  <h5 className="text-xl font-bold mb-2">{branch.name}</h5>
                  {/* Location */}
                  <div className="flex items-center text-gray-600 mb-2">
                    <LocationMarkerIcon className="h-5 w-5 mr-2" />{" "}
                    {/* Heroicon for location */}
                    <span>{branch.location}</span>
                  </div>
                  {/* Contact Info */}
                  <div className="flex items-center text-gray-600 mb-2">
                    <PhoneIcon className="h-5 w-5 mr-2" />{" "}
                    {/* Heroicon for phone */}
                    <span>{branch.contact}</span>
                  </div>
                  {/* Description */}
                  <p className="text-gray-700">{branch.description}</p>
                </div>
                {/* View Button - Sticky to the bottom */}
                <div className="p-4 bg-gray-100 mt-auto">
                  <button
                    className="w-full md:w-auto cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => {
                      console.log("View LED Lights");
                      navigate("/branch_category"); // Navigate to the product table page
                    }}
                  >
                    View Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BranchLocation;
