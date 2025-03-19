import React from "react";

function Transffered() {
  return (
    <>
      <div className="ml-5 mr-5 sm:ml-70">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-5">
          <div className="p-6">
            <h5 className="text-xl font-bold mb-4">Transffered Item</h5>
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
    </>
  );
}

export default Transffered;
