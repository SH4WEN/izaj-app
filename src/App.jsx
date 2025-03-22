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
