import { useState } from "react";

const MultiImageUpload = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (images.length === 0 || !category) {
      alert("Please select images and enter a category");
      return;
    }

    const formData = new FormData();
    images.forEach((img, index) => {
      formData.append("image", img); // field name = 'images' in backend
    });
    formData.append("category", category);

    setUploading(true);
    try {
      const res = await fetch("http://localhost:3000/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        console.log(data.msg || data);
        alert("✅ Images uploaded successfully");
        setImages([]);
        setCategory("");
        setPreviews([]);
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
        <h2 className="text-2xl font-bold text-center mb-4">
          Upload Multiple Images
        </h2>
        <form onSubmit={handleUpload}>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            className="w-full p-2 mb-4 border rounded"
          />

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full mb-4"
          />

          {previews.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {previews.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Preview ${index}`}
                  className="w-24 h-24 object-cover rounded border"
                />
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MultiImageUpload;
