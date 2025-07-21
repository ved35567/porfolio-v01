import SingleImageUpload from "./Images/SingleImageUpload";

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Or your auth key
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow"
          >
            Logout
          </button>
        </div>

        <div className="mt-10 text-gray-700">
          <p className="text-lg">
            👋 Welcome, Admin! This is your dashboard where you can manage content and monitor activity.
          </p>
        </div>
        <div>
            <SingleImageUpload/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
