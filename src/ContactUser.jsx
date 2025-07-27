import React, { useEffect, useState } from "react";

const ContactedUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users", {
          method: "GET",
        }); // Change to your actual route
        const data = await res.json();
        if (res.ok) {
          setUsers(data.user);
        } else {
          setError(data.message || "Something went wrong");
        }
      } catch (err) {
        setError("Failed to fetch users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading users...</div>;
  if (error)
    return <div className="text-red-600 text-center mt-10">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">
        Contacted Users
      </h2>
      <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-indigo-600 text-white text-left">
            <tr>
              <th className="px-6 py-3">S_NO</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone-NO</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td className="p-4 text-gray-500" colSpan={4}>
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{user.name}</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                  <td className="px-4 py-2 border-b">{user.phone_no}</td>
                  <td className="px-4 py-2 border-b">{user.message}</td>
                  <td className="px-4 py-2 border-b">{user.submittedAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactedUsers;
