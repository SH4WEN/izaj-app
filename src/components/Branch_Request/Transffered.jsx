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
      status: "Transferred",
      description: "Energy-efficient LED bulb with a lifespan of 25,000 hours.",
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
                    Product Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Category
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Price
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Quantity
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
                    <td className="px-4 font-bold py-2 text-sm text-gray-700">
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
                        product.status === "Transferred"
                          ? "text-green-600"
                          : product.status === "In-Transit"
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
                    selectedProduct.status === "Transferred"
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
