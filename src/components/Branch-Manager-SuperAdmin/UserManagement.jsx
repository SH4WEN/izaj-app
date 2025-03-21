import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

function UserManagement() {
  const { userId } = useParams(); // Get the userId from the URL parameters
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal
  const [isEditMode, setIsEditMode] = useState(false); // State for edit mode
  const [editedUser, setEditedUser] = useState({}); // State for edited user data

  // Mock user data (replace this with actual data fetching logic)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Killua Zoldick",
      image: "/src/assets/image/user.png",
      location: "123 Main Street, Lucena City",
      contact: "(042) 123-4567",
      description: "A skilled assassin from the Zoldick family.",
    },
  ]);

  // Find the user by userId
  const user = users.find((u) => u.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  // Handle input changes in edit mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Handle updating the user
  const handleUpdate = () => {
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, ...editedUser } : u
    );
    setUsers(updatedUsers);
    setIsEditMode(false); // Exit edit mode
    toast.success("User updated successfully!"); // Show success alert
  };

  // Handle deleting the user
  const handleDelete = () => {
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
    setIsDeleteModalOpen(false); // Close the delete modal
    toast.success("User deleted successfully!"); // Show success alert
    setTimeout(() => {
      navigate("/add-user"); // Redirect to the user list page after deletion
    }, 1500); // Delay the redirect to allow the toast to be seen
  };

  return (
    <div className="ml-5 mr-5 sm:ml-70">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* User Image */}
          <img
            src={user.image}
            className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
            alt="User Image"
          />
          {/* User Details */}
          <div className="text-center">
            {isEditMode ? (
              // Edit Mode Form
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="location"
                  defaultValue={user.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Location"
                />
                <input
                  type="text"
                  name="contact"
                  defaultValue={user.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Contact"
                />
                <textarea
                  name="description"
                  defaultValue={user.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Description"
                />
              </div>
            ) : (
              // View Mode
              <>
                <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                <p className="text-gray-600 mb-2">
                  <strong>Location:</strong> {user.location}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Contact:</strong> {user.contact}
                </p>
                <p className="text-gray-700">
                  <strong>Description:</strong> {user.description}
                </p>
              </>
            )}
          </div>

          {/* Buttons Edit Mode */}
          <div className="flex justify-center space-x-4 mt-6">
            {isEditMode ? (
              // Save and Cancel Buttons (Edit Mode)
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditMode(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
              </>
            ) : (
              // Edit and Remove Buttons (View Mode)
              <>
                <button
                  onClick={() => setIsEditMode(true)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </>
            )}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-gradient-to-b from-black/30 to-black/70 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
              <p className="mb-4">Are you sure you want to delete this user?</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast Container */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default UserManagement;
