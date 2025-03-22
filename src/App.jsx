import "./App.css";
import "./index.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import AddUser from "./components/Branch-Manager-SuperAdmin/AddUser";
import UserManagement from "./components/Branch-Manager-SuperAdmin/UserManagement";
import Unauthorized from "./components/Unauthorized";
import ProtectedRoute from "./components/aut/ProtectedRoute";
import Login from "./components/aut/Login";

// Layout component that includes the Sidebar
const Layout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flex: 1 }}>{children}</div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route: Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/branch_location"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <Branch_location />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/branch_products"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <ProductTable />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/branch_category"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <Branch_category />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/request_product/:productId"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <Request_product />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pending_request"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <Pending_request />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/transferred"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <Transffered />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/awaiting_approval/:productId"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <Awaiting_approval />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/all_stock"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <All_Stock />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "branchManager", "superAdmin"]}
            >
              <Layout>
                <ProductDetails />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-user"
          element={
            <ProtectedRoute allowedRoles={["superAdmin"]}>
              <Layout>
                <AddUser />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-management/:userId"
          element={
            <ProtectedRoute allowedRoles={["superAdmin", "branchManager"]}>
              <Layout>
                <UserManagement />
              </Layout>
            </ProtectedRoute>
          }
        />
        {/* Public Route: Unauthorized Page */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Redirect to /dashboard if no route matches */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;

// import "./App.css";
// import "./index.css";
// import { useState } from "react";
// import {
//   BellIcon,
//   DocumentDownloadIcon,
//   DocumentTextIcon,
// } from "@heroicons/react/outline";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Branch_location from "./components/Branch/Branch_location";
// import Pending_request from "./components/Branch_Request/Pending_request";
// import Transffered from "./components/Branch_Request/Transffered";
// import All_Stock from "./components/Stock_Components/All_Stock";
// import ProductDetails from "./components/Stock_Components/ProductDetails";
// import ProductTable from "./components/Branch/ProductTable";
// import Request_product from "./components/Branch/Request_product";
// import Awaiting_approval from "./components/Branch_Request/Awaiting_approval";
// import Branch_category from "./components/Branch/Branch_category";
// import AddUser from "./components/Branch-Manager-SuperAdmin/AddUser";
// import UserManagement from "./components/Branch-Manager-SuperAdmin/UserManagement";
// import Unauthorized from "./components/Unauthorized";
// import ProtectedRoute from "./components/aut/ProtectedRoute";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           {/* Login Page */}
//           <Route path="/" element={<Login />} />;
//           <Route
//             path="/sidebar"
//             element={
//               <div>
//                 {/* Sidebar */}
//                    <Sidebar />
//                 {/* Main Content */}
//                 <div className="mt-5 ml-70 mr-50 flex items-center">
//                   {" "}
//                   {/* Search Input */}
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                   {/* Notification Icon */}
//                   <div className="ml-4 relative">
//                     <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-500" />
//                     <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>{" "}
//                     {/* Notification dot */}
//                   </div>
//                   {/* Export Icons */}
//                   <div className="ml-4 flex space-x-4">
//                     <DocumentDownloadIcon
//                       className="h-6 w-6 text-gray-600 cursor-pointer hover:text-green-500"
//                       title="Export to Excel"
//                     />
//                     <DocumentTextIcon
//                       className="h-6 w-6 text-gray-600 cursor-pointer hover:text-red-500"
//                       title="Export to PDF"
//                     />
//                   </div>
//                 </div>
//                 {/* Nested Routes */}
//                 <Routes>
//                   {/* Acccsess for Branch manager admin */}
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route
//                     path="/branch_location"
//                     element={<Branch_location />}
//                   />
//                   <Route path="/branch_products" element={<ProductTable />} />
//                   <Route
//                     path="/branch_category"
//                     element={<Branch_category />}
//                   />
//                   <Route
//                     path="/request_product/:productId"
//                     element={<Request_product />}
//                   />
//                   <Route
//                     path="/pending_request"
//                     element={<Pending_request />}
//                   />
//                   <Route path="/transferred" element={<Transffered />} />
//                   <Route
//                     path="/awaiting_approval/:productId"
//                     element={<Awaiting_approval />}
//                   />
//                   <Route path="/all_stock" element={<All_Stock />} />
//                   <Route
//                     path="/product/:productId"
//                     element={<ProductDetails />}
//                   />
//                   {/* User Management Page  Accsess only for the supper admin and branch manager*/}
//                   {/* <Route path="/add-user" element={<AddUser />} /> */}

//                   <Route
//                     path="/add-user"
//                     element={
//                       <ProtectedRoute allowedRoles={["superAdmin"]}>
//                         <AddUser />
//                       </ProtectedRoute>
//                     }
//                   />

//                   <Route
//                     path="/user-management/:userId"
//                     element={<UserManagement />}
//                   />
//                   {/* For Unauthorized */}
//                   <Route path="/anauthorized" element={<Unauthorized />} />
//                 </Routes>
//               </div>
//             }
//           />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
