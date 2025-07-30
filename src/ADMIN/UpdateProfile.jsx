import { useEffect, useState } from "react";

const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    profileImage: "",
    oldPassword: "",
    newPassword: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get existing user profile
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/upload/me`, {
          credentials: "include",
        });
        const data = await res.json();
        setProfile((prev) => ({
          ...prev,
          name: data.name || "",
          email: data.email || "",
          profileImage: data.profileImage || "",
        }));
        setPreview();
      } catch (err) {
        console.error("Failed to load profile", err);
      }
    };
    fetchProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    // Only append non-empty fields
    if (profile.name) formData.append("name", profile.name);
    if (profile.email) formData.append("email", profile.email);
    if (profile.oldPassword)
      formData.append("oldPassword", profile.oldPassword);
    if (profile.newPassword)
      formData.append("newPassword", profile.newPassword);
    if (imageFile) formData.append("profileImage", imageFile);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/upload/profile/update`, {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      const result = await res.json();
      if (res.ok) {
        alert("✅ Profile updated");
      } else {
        alert("❌ Failed: " + result.message);
      }
    } catch (err) {
      console.error("Update error", err);
      alert("⚠️ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Your Name"
        />
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Your Email"
        />

        <input
          type="password"
          value={profile.oldPassword}
          onChange={(e) =>
            setProfile({ ...profile, oldPassword: e.target.value })
          }
          className="w-full p-2 border rounded"
          placeholder="Old Password (only if changing password)"
        />

        <input
          type="password"
          value={profile.newPassword}
          onChange={(e) =>
            setProfile({ ...profile, newPassword: e.target.value })
          }
          className="w-full p-2 border rounded"
          placeholder="New Password"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />

        {preview && (
          <div className="flex justify-center mt-2">
            <img
              src={preview}
              alt="Preview"
              className="w-28 h-28 object-cover rounded-full border"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
