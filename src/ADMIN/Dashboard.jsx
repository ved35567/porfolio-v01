import { Outlet, Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // if using JWT
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-indigo-600">Dashboard</h2>
        <nav className="space-y-2">
          <Link to="upload" className="block p-2 rounded hover:bg-indigo-100">
            📤 Upload Image
          </Link>
          <Link to="profile" className="block p-2 rounded hover:bg-indigo-100">
            👤 Profile
          </Link>
          <Link to="contact" className="block p-2 rounded hover:bg-indigo-100">
            📧 Contact User
          </Link>
          <Link to="delete" className="block p-2 rounded hover:bg-indigo-100">
            🗑️ Delete Images
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-4 w-full bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600"
        >
          🔓 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
