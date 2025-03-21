import "./App.css";
import "./index.css";
// import { useState } from "react";
import {
  BellIcon,
  DocumentDownloadIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Branch_location from "./components/Branch/Branch_location";
import Pending_request from "./components/Branch_Request/Pending_request";
import Transffered from "./components/Branch_Request/Transffered";
import All_Stock from "./components/Stock_Components/All_Stock";
import ProductDetails from "./components/Stock_Components/ProductDetails";
import ProductTable from "./components/Branch/ProductTable";
import Request_product from "./components/Branch/Request_product";
import Awaiting_approval from "./components/Branch_Request/Awaiting_approval";
import Branch_category from "./components/Branch/Branch_category";
import Login from "./components/aut/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes (with Sidebar) */}
          <Route
            path="/*"
            element={
              <div>
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="mt-5 ml-70 mr-50 flex items-center">
                  {/* Search Input */}
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  {/* Notification Icon */}
                  <div className="ml-4 relative">
                    <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-500" />
                    <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>{" "}
                    {/* Notification dot */}
                  </div>

                  {/* Export Icons */}
                  <div className="ml-4 flex space-x-4">
                    <DocumentDownloadIcon
                      className="h-6 w-6 text-gray-600 cursor-pointer hover:text-green-500"
                      title="Export to Excel"
                    />
                    <DocumentTextIcon
                      className="h-6 w-6 text-gray-600 cursor-pointer hover:text-red-500"
                      title="Export to PDF"
                    />
                  </div>
                </div>

                {/* Nested Routes */}
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/branch_location"
                    element={<Branch_location />}
                  />
                  <Route path="/branch_products" element={<ProductTable />} />
                  <Route
                    path="/branch_category"
                    element={<Branch_category />}
                  />
                  <Route
                    path="/request_product/:productId"
                    element={<Request_product />}
                  />
                  <Route
                    path="/pending_request"
                    element={<Pending_request />}
                  />
                  <Route path="/transferred" element={<Transffered />} />
                  <Route
                    path="/awaiting_approval/:productId"
                    element={<Awaiting_approval />}
                  />
                  <Route path="/all_stock" element={<All_Stock />} />
                  <Route
                    path="/product/:productId"
                    element={<ProductDetails />}
                  />
                </Routes>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
