import  { useState } from "react";

const SingleImageUpload = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image || !category) {
      alert("Please select an image and enter a category");
      return;
    }

    const formData = new FormData();
    formData.append("image", image); // must match backend field name
    formData.append("category", category);

    setUploading(true);
    try {
      const res = await fetch("https://backend-portfolio-v01.onrender.com/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Image uploaded successfully");
        setImage(null);
        setCategory("");
        setPreview(null);
      } else {
        alert(`❌ Upload failed: ${data.error}`);
        console.error(data.detail);
      }
    } catch (err) {
      alert("⚠️ Server error");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Upload a Single Image</h2>

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter image category"
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-4"
        />

        {preview && (
          <div className="mb-4">
            <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded border" />
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default SingleImageUpload;
