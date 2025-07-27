import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:3000/upload/me", {
          method: "GET",
          credentials: "include", // ✅ This is important to send cookies
        });

        if (!res.ok) {
          throw new Error("Unauthorized or Server Error");
        }

        const data = await res.json();
        setUser(data); // ✅ fetched user
      } catch (err) {
        console.error("Failed to fetch profile:", err.message);
      }
    };

    fetchProfile(); // ✅ Call the function
  }, []);

  if (!user) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center border">
        <img
          src={
            user.profileImage ||
            "https://avatars.githubusercontent.com/u/9919?v=4"
          }
          alt="Profile"
          className="w-64 h-64 rounded-full mx-auto border-4 border-indigo-500 shadow-md"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        {/* <span className="inline-block mt-2 bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
          {user.role || "User"}
        </span> */}

        {/* <div className="mt-6">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg shadow transition">
            Edit Profile
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default UserProfile;
