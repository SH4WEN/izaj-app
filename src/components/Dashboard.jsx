import React from "react";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { useSidebar } from "./SidebarContext";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import {
  Package,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Lightbulb,
  AlertCircle,
  Clock,
} from "lucide-react";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

function Dashboard() {
  const { isCollapsed } = useSidebar();

  // Data for the Pie Chart
  const pieChartData = {
    labels: ["LED Bulbs", "Smart Lights", "Chandeliers"],
    datasets: [
      {
        label: "Stock Distribution",
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Data for the Line Chart
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Stock Movement",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
      },
    ],
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isCollapsed ? "ml-5" : "ml-1"
      } p-2 sm:p-4 `}
    >
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Stock Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-full">
              <Package className="text-amber-600" size={20} />
            </div>
            <h5 className="text-lg font-medium">Total Stock</h5>
          </div>
          <h6 className="text-2xl font-bold text-gray-800 mt-2">450</h6>
        </div>

        {/* Products Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Lightbulb className="text-blue-600" size={20} />
            </div>
            <h5 className="text-lg font-medium">Products</h5>
          </div>
          <h6 className="text-2xl font-bold text-gray-800 mt-2">50</h6>
        </div>

        {/* Categories Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-full">
              <Lightbulb className="text-green-600" size={20} />
            </div>
            <h5 className="text-lg font-medium">Categories</h5>
          </div>
          <h6 className="text-2xl font-bold text-gray-800 mt-2">12</h6>
        </div>

        {/* Branches Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-full">
              <Lightbulb className="text-purple-600" size={20} />
            </div>
            <h5 className="text-lg font-medium">Branches</h5>
          </div>
          <h6 className="text-2xl font-bold text-gray-800 mt-2">8</h6>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Pie Chart Card */}
        <div className="bg-white rounded-lg shadow overflow-hidden lg:col-span-1">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <PieChartIcon className="text-gray-500" size={20} />
              <h5 className="text-lg font-medium">Stock Distribution</h5>
            </div>
            <div className="h-64">
              <Pie
                data={pieChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
          <div className="p-4 bg-gray-50 flex items-center gap-2 text-sm text-gray-500">
            <Clock size={16} />
            <span>Last updated 3 mins ago</span>
          </div>
        </div>

        {/* Line Chart Card */}
        <div className="bg-white rounded-lg shadow overflow-hidden lg:col-span-2">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <LineChartIcon className="text-gray-500" size={20} />
              <h5 className="text-lg font-medium">Monthly Stock Movement</h5>
            </div>
            <div className="h-64">
              <Line
                data={lineChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
          <div className="p-4 bg-gray-50 flex items-center gap-2 text-sm text-gray-500">
            <Clock size={16} />
            <span>Last updated 3 mins ago</span>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-gray-500" size={20} />
            <h5 className="text-lg font-medium">Current Inventory</h5>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    id: "001",
                    name: "LED Bulb",
                    category: "Bulbs",
                    price: "$5.99",
                    stock: 100,
                    status: "in-stock",
                  },
                  {
                    id: "002",
                    name: "Smart Light Strip",
                    category: "Smart Lighting",
                    price: "$29.99",
                    stock: 50,
                    status: "in-stock",
                  },
                  {
                    id: "003",
                    name: "Chandelier",
                    category: "Decorative",
                    price: "$199.99",
                    stock: 10,
                    status: "low-stock",
                  },
                  {
                    id: "004",
                    name: "Floodlight",
                    category: "Outdoor",
                    price: "$49.99",
                    stock: 25,
                    status: "in-stock",
                  },
                  {
                    id: "005",
                    name: "Desk Lamp",
                    category: "Lamps",
                    price: "$39.99",
                    stock: 0,
                    status: "out-of-stock",
                  },
                ].map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.status === "in-stock"
                            ? "bg-green-100 text-green-800"
                            : product.status === "low-stock"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status === "in-stock"
                          ? "In Stock"
                          : product.status === "low-stock"
                          ? "Low Stock"
                          : "Out of Stock"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-4 bg-gray-50 flex items-center gap-2 text-sm text-gray-500">
          <Clock size={16} />
          <span>Last updated 3 mins ago</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
