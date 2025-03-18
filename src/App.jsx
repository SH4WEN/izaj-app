import "./App.css";
// import { useState } from "react";

function App() {
  return (
    <>
      {/* side bar */}
      <div className="h-screen w-64 bg-gray-100 text-black fixed top-0 left-0 overflow-y-auto flex flex-col justify-between">
        {/* Header Section */}
        <div>
          <div className="flex flex-row items-center p-3">
            <div>
              <img
                src="/src/assets/image/logo.jpg"
                alt="Logo"
                className="w-12 h-12  rounded-full object-cover"
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
              className="w-full px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <ul className="space-y-2 mt-4">
              <li>
                <a
                  href="#"
                  className="block w-full font-bold hover:text-orange-400 transition duration-300"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block w-full font-bold hover:text-orange-400 transition duration-300"
                >
                  Branch
                </a>
              </li>
              <li>
                <select className="w-full px-4 py-2 hover:text-orange-400 cursor-pointer bg-gray-100 font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Lucena</option>
                  <option value="option1">Lucena</option>
                </select>
              </li>
              <li>
                <a
                  href="#"
                  className="block w-full mt-5 font-bold hover:text-orange-400 transition duration-300"
                >
                  Branch Request
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block w-full px-5 font-semibold hover:text-orange-400 transition duration-300"
                >
                  Pending Request
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block w-full px-5 font-semibold hover:text-orange-400 transition duration-300"
                >
                  Transferred
                </a>
              </li>

              <div className="mt-15">
                <li>
                  <a
                    href="#"
                    className="block w-full mt-5 font-bold hover:text-orange-400 transition duration-300"
                  >
                    Stock
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block w-full mt-3 font-bold hover:text-orange-400 transition duration-300"
                  >
                    Setting
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>

        {/* Footer Section */}
        <footer className="p-4 border-t border-gray-300">
          <div class="flex flex-row ...">
            <div>
              <img
                src="/src/assets/image/logo.jpg"
                alt=""
                className="w-10     rounded-full object-cover"
              />
            </div>
            <div>
              <div className="mt-3 ml-2  text-samall font-bold">
                Sarmiento Sherwin
              </div>
            </div>
          </div>
          {/* <div className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} IZAJ-LIGHTING. All rights
            reserved.
          </div> */}
        </footer>
      </div>

      {/* Home Page */}
      <div className="ml-5 mr-5 sm:ml-70">
        {/* Search Bar */}
        <div className="mt-5">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          {/* Total Card */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-bold">Totals</h5>
              <h6 className="text-xl text-green-500 font-bold">100</h6>
            </div>
          </div>

          {/* Repeat for other cards if needed */}
          {/* Example: */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-bold">Another Card</h5>
              <h6 className="text-xl text-blue-500 font-bold">50</h6>
            </div>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {/* First Card */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-bold">Analytics 1</h5>
              <h6 className="text-xl text-green-500 font-bold">100</h6>
            </div>
            <div className="p-4 bg-gray-100">
              <small className="text-gray-500">Last updated 3 mins ago</small>
            </div>
          </div>

          {/* Second Card (Spans 2 columns on medium screens and above) */}
          <div className="md:col-span-2 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-bold">Analytics 2</h5>
              <h6 className="text-xl text-green-500 font-bold">200</h6>
            </div>
            <div className="p-4 bg-gray-100">
              <small className="text-gray-500">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        {/* Table Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-5">
          <div className="p-6">
            <h5 className="text-xl font-bold mb-4">Lighting Products</h5>
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
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">001</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      LED Bulb
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Bulbs</td>
                    <td className="px-4 py-2 text-sm text-gray-700">$5.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">100</td>
                    <td className="px-4 py-2 text-sm text-green-600 font-medium">
                      In Stock
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">002</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Smart Light Strip
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Smart Lighting
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">$29.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">50</td>
                    <td className="px-4 py-2 text-sm text-green-600 font-medium">
                      In Stock
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">003</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Chandelier
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Decorative
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">$199.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">10</td>
                    <td className="px-4 py-2 text-sm text-yellow-600 font-medium">
                      Low Stock
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">004</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Floodlight
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Outdoor</td>
                    <td className="px-4 py-2 text-sm text-gray-700">$49.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">25</td>
                    <td className="px-4 py-2 text-sm text-green-600 font-medium">
                      In Stock
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">005</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Desk Lamp
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Lamps</td>
                    <td className="px-4 py-2 text-sm text-gray-700">$39.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">0</td>
                    <td className="px-4 py-2 text-sm text-red-600 font-medium">
                      Out of Stock
                    </td>
                  </tr>
                  {/* Row 6 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">006</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Ceiling Light
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Fixtures
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">$89.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">15</td>
                    <td className="px-4 py-2 text-sm text-yellow-600 font-medium">
                      Low Stock
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-4 bg-gray-100">
            <small className="text-gray-500">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

      {/* Branch page */}
      {/* <div className="ml-5 mr-5 sm:ml-70">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div class="col">
            <div class="card h-full bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/src/assets/image/room.jpg"
                class="w-full h-48 object-cover p-5"
                alt="..."
              />
              <div class="p-6">
                <h5 class="text-xl font-bold mb-2">Card title</h5>
                <p class="text-gray-700">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Branch Page */}
      <div className="ml-5 mr-5 sm:ml-70">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
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
                  onClick={() => {
                    // Add your onClick logic here, e.g., navigate to branch details
                    console.log("View Lucena Branch");
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      {/* Product Category Page */}
      <div className="ml-5 mr-5 sm:ml-70">
        <div className="grid grid-cols-2 gap-4 mt-5">
          {/* Product Category Card */}
          <div className="card bg-white rounded-lg shadow-md overflow-hidden max-w-2xl">
            <div className="flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="md:w-1/3">
                <img
                  src="/src/assets/image/light1.jpg" // Replace with your image path
                  className="w-full h-25 p-3 rounded-3xl md:h-full object-cover"
                  alt="LED Lights"
                />
              </div>
              {/* Product Details */}
              <div className="md:w-2/3 p-6">
                {/* Product Category Name */}
                <h5 className="text-xl font-bold mb-2">LED Lights</h5>
                {/* Description */}

                {/* Features */}
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Energy-efficient and long-lasting</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Available in various colors and styles</span>
                </div>
                {/* View Button */}
                <button
                  className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={() => {
                    // Add your onClick logic here, e.g., navigate to product category
                    console.log("View LED Lights");
                  }}
                >
                  View Products
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Table Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-5">
          <div className="p-6">
            <h5 className="text-xl font-bold mb-4">Lighting Products</h5>
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
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">001</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      LED Bulb
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Bulbs</td>
                    <td className="px-4 py-2 text-sm text-gray-700">$5.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">100</td>
                    <td className="px-4 py-2 text-sm text-green-600 font-medium">
                      In Stock
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">002</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Smart Light Strip
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Smart Lighting
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">$29.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">50</td>
                    <td className="px-4 py-2 text-sm text-green-600 font-medium">
                      In Stock
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">003</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Chandelier
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Decorative
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">$199.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">10</td>
                    <td className="px-4 py-2 text-sm text-yellow-600 font-medium">
                      Low Stock
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">004</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Floodlight
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Outdoor</td>
                    <td className="px-4 py-2 text-sm text-gray-700">$49.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">25</td>
                    <td className="px-4 py-2 text-sm text-green-600 font-medium">
                      In Stock
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">005</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Desk Lamp
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Lamps</td>
                    <td className="px-4 py-2 text-sm text-gray-700">$39.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">0</td>
                    <td className="px-4 py-2 text-sm text-red-600 font-medium">
                      Out of Stock
                    </td>
                  </tr>
                  {/* Row 6 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">006</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Ceiling Light
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Fixtures
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">$89.99</td>
                    <td className="px-4 py-2 text-sm text-gray-700">15</td>
                    <td className="px-4 py-2 text-sm text-yellow-600 font-medium">
                      Low Stock
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-4 bg-gray-100">
            <small className="text-gray-500">Last updated 3 mins ago</small>
          </div>
        </div>
        {/* from */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center">
            Request a Product
          </h3>
          <form
          // onSubmit={handleSubmit}
          >
            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                // value={productName}
                // onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                // value={quantity}
                // onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter quantity"
                required
              />
            </div>

            {/* Additional Notes */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                // value={notes}
                // onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any additional notes or details"
                rows="3"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                // onClick={resetForm}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* product update */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {/* Product Identity Card */}
          <div className="card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="md:w-1/3">
                <img
                  src="/src/assets/image/light1.jpg" // Replace with your image path
                  className="w-full h-48 p-3 rounded-3xl md:h-full object-cover"
                  alt="LED Lights"
                />
              </div>
              {/* Product Details */}
              <div className="md:w-2/3 p-6">
                {/* Product Name */}
                <h5 className="text-xl font-bold mb-2">LED Bulb - 10W</h5>
                {/* Product Description */}
                <p className="text-gray-600 mb-4">
                  A high-efficiency LED bulb with a lifespan of 25,000 hours.
                  Perfect for indoor lighting.
                </p>
                {/* Product Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Category: Bulbs</span>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      // value={quantity}
                      // onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter quantity"
                      required
                    />
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <button
                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => {
                      // Add your logic for updating stock
                      console.log("Update Stock");
                    }}
                  >
                    Update Stock
                  </button>
                  <button
                    className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                    onClick={() => {
                      // Add your logic for viewing details
                      console.log("View Details");
                    }}
                  >
                    View Details
                  </button>
                  <button
                    className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => {
                      // Add your logic for deleting the product
                      console.log("Delete Product");
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* productt update 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center">
            Update/Add Stock
          </h3>
          <form>
            {/* Product ID */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product ID
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product ID"
                required
              />
            </div>

            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select category</option>
                <option value="bulbs">Bulbs</option>
                <option value="chandeliers">Chandeliers</option>
                <option value="smart-lighting">Smart Lighting</option>
                <option value="outdoor-lighting">Outdoor Lighting</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"
                required
              />
            </div>

            {/* Stock Quantity */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter stock quantity"
                required
              />
            </div>

            {/* Supplier */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Supplier
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter supplier name"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
