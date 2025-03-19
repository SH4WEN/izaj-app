import React, { useState } from "react";

function Transffered() {
  // Sample product data
  const products = [
    {
      id: "001",
      name: "LED Bulb",
      category: "Bulbs",
      price: "$5.99",
      stock: 100,
      status: "In Stock",
      description: "Energy-efficient LED bulb with a lifespan of 25,000 hours.",
    },
    {
      id: "002",
      name: "Smart Light Strip",
      category: "Smart Lighting",
      price: "$29.99",
      stock: 50,
      status: "In Stock",
      description:
        "RGB smart light strip compatible with Alexa and Google Home.",
    },
    {
      id: "003",
      name: "Chandelier",
      category: "Decorative",
      price: "$199.99",
      stock: 10,
      status: "Low Stock",
      description: "Elegant chandelier for modern interiors.",
    },
    {
      id: "004",
      name: "Floodlight",
      category: "Outdoor",
      price: "$49.99",
      stock: 25,
      status: "In Stock",
      description: "Bright outdoor floodlight for security and illumination.",
    },
    {
      id: "005",
      name: "Desk Lamp",
      category: "Lamps",
      price: "$39.99",
      stock: 0,
      status: "Out of Stock",
      description: "Adjustable desk lamp for workspace lighting.",
    },
    {
      id: "006",
      name: "Ceiling Light",
      category: "Fixtures",
      price: "$89.99",
      stock: 15,
      status: "Low Stock",
      description: "Modern ceiling light fixture for homes and offices.",
    },
  ];

  // State to manage modal visibility and selected product
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle row click to open modal
  const handleRowClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true); // Open the modal
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="ml-5 mr-5 sm:ml-70">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-5">
        <div className="p-6">
          <h5 className="text-xl font-bold mb-4">Transferred Item</h5>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Product ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Category
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Price
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Stock
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleRowClick(product)}
                  >
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {product.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {product.name}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {product.category}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {product.price}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {product.stock}
                    </td>
                    <td
                      className={`px-4 py-2 text-sm font-medium ${
                        product.status === "In Stock"
                          ? "text-green-600"
                          : product.status === "Low Stock"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {product.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-4 bg-gray-100">
          <small className="text-gray-500">Last updated 3 mins ago</small>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 to-black/70 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">ID:</span> {selectedProduct.id}
              </p>
              <p>
                <span className="font-medium">Category:</span>{" "}
                {selectedProduct.category}
              </p>
              <p>
                <span className="font-medium">Price:</span>{" "}
                {selectedProduct.price}
              </p>
              <p>
                <span className="font-medium">Stock:</span>{" "}
                {selectedProduct.stock}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={
                    selectedProduct.status === "In Stock"
                      ? "text-green-600"
                      : selectedProduct.status === "Low Stock"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                >
                  {selectedProduct.status}
                </span>
              </p>
              <p>
                <span className="font-medium">Description:</span>{" "}
                {selectedProduct.description}
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transffered;
