import React from "react";

const UserProfile = () => {
  const user = {
    name: "Vedvyas Sahu",
    email: "vedvyas@example.com",
    role: "Admin",
    avatar: "https://avatars.githubusercontent.com/u/9919?v=4", // replace with actual image
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center border">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 shadow-md"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <span className="inline-block mt-2 bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
          {user.role}
        </span>

        <div className="mt-6">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg shadow transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
