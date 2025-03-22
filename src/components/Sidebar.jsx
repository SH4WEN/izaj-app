import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon, // Dashboard
  LocationMarkerIcon, // Branch
  CubeIcon, // Stock
  ClipboardListIcon, // Pending Request
  SwitchHorizontalIcon, // Transferred
  CogIcon, // Setting
  UserCircleIcon, // User Profile
} from "@heroicons/react/outline";

function Sidebar() {
  const navigate = useNavigate();

  // Retrieve the logged-in user's information (e.g., from localStorage or context)
  const user = JSON.parse(localStorage.getItem("user")); // Assuming you store user data in localStorage after login

  // Handle logout
  const handleLogout = () => {
    // Clear user data from localStorage or context
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // If you store a token

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="h-screen w-64 bg-gray-100 text-black fixed top-0 left-0 overflow-y-auto flex flex-col justify-between">
      {/* Header Section */}
      <div>
        <div className="flex flex-row items-center p-3">
          <div>
            <img
              src="/src/assets/image/logo.jpg"
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="ml-2">
            <div className="text-xl font-bold">IZAJ-LIGHTING</div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="p-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <ul className="space-y-2 mt-4">
            {/* Dashboard */}
            <li>
              <Link
                to="/dashboard"
                className="flex items-center w-full font-bold hover:text-orange-400 transition duration-300"
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                Dashboard
              </Link>
            </li>

            {/* Branch */}
            <li>
              <Link
                to="/branch_location"
                className="flex items-center w-full font-bold hover:text-orange-400 transition duration-300"
              >
                <LocationMarkerIcon className="h-5 w-5 mr-2" />
                Branch
              </Link>
            </li>

            {/* Branch Request */}
            <li>
              <a
                href="#"
                className="flex items-center w-full mt-5 font-bold hover:text-orange-400 transition duration-300"
              >
                <ClipboardListIcon className="h-5 w-5 mr-2" />
                Branch Request
              </a>
            </li>

            {/* Pending Request */}
            <li>
              <Link
                to="/pending_request"
                className="flex items-center w-full px-5 font-semibold hover:text-orange-400 transition duration-300"
              >
                <ClipboardListIcon className="h-5 w-5 mr-2" />
                Pending Request
              </Link>
            </li>

            {/* Transferred */}
            <li>
              <Link
                to="/transferred"
                className="flex items-center w-full px-5 font-semibold hover:text-orange-400 transition duration-300"
              >
                <SwitchHorizontalIcon className="h-5 w-5 mr-2" />
                Transferred
              </Link>
            </li>

            {/* Stock */}
            <div className="mt-15">
              <li>
                <Link
                  to="/all_stock"
                  className="flex items-center w-full mt-5 font-bold hover:text-orange-400 transition duration-300"
                >
                  <CubeIcon className="h-5 w-5 mr-2" />
                  Stock
                </Link>
              </li>

              {/* Setting */}
              <li>
                <a
                  href="#"
                  className="flex items-center w-full mt-3 font-bold hover:text-orange-400 transition duration-300"
                >
                  <CogIcon className="h-5 w-5 mr-2" />
                  Setting
                </a>
              </li>

              <li>
                <Link
                  to="/add-user"
                  className="flex items-center w-full mt-3 font-bold hover:text-orange-400 transition duration-300"
                >
                  <UserCircleIcon className="h-5 w-5 mr-2" />
                  User
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <footer className="p-4 border-t border-gray-300">
        <div className="flex flex-col items-center space-y-2">
          {/* Display the logged-in user's email or username */}
          {user && (
            <div className="text-sm font-semibold">
              {user.email || user.username}{" "}
              {/* Adjust based on your user object */}
            </div>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Sidebar;
