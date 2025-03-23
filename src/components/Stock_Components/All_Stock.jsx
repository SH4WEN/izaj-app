import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import light1 from "/src/assets/image/light1.jpg";

const CATEGORIES = ["Bulbs", "Lights", "Fixtures", "Accessories"];

function All_Stock() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      id: "001",
      name: "LED Bulb",
      category: "Bulbs",
      price: "Php 345.99",
      stock: 100,
      status: "In Stock",
      imageUrl: light1,
      detailsPage: "/product/001",
    },
    // Add more products as needed
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "In Stock",
    description: "",
  });

  // Handle input changes for the add product form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle form submission for adding a new product
  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    // Generate a unique ID for the new product (for demo purposes only)
    const newId = String(products.length + 1).padStart(3, "0");
    const productToAdd = { ...newProduct, id: newId, imageUrl: light1 }; // Add a default image for now
    setProducts([...products, productToAdd]); // Add the new product to the list
    setIsAddModalOpen(false); // Close the modal
    setNewProduct({
      // Reset the form
      id: "",
      name: "",
      category: "",
      price: "",
      stock: "",
      status: "In Stock",
      description: "",
    });
    alert("Product added successfully!");
  };

  // Handle product click to navigate to details page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <div className="ml-5 mr-5 sm:ml-70">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-5">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-bold">All Stock</h5>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Product
              </button>
            </div>
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
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td
                        className="px-4 py-2 text-sm text-gray-700 relative font-bold"
                        onClick={() => handleProductClick(product.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {product.id}
                      </td>
                      <td
                        className="px-4 py-2 text-sm text-gray-700 relative"
                        onClick={() => handleProductClick(product.id)}
                        style={{ cursor: "pointer" }}
                      >
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
                      <td className="px-4 py-2 text-sm text-green-600 font-medium">
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
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 to-black/70 z-50">
          <div className="bg-gray-100  rounded-lg shadow-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleAddProductSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="product-name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a category</option>
                    {CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Status */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    disabled={true}
                    name="status"
                    value={newProduct.status}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="In Stock">In Stock</option>
                  </select>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default All_Stock;
