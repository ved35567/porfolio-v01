import { useState, useEffect, useRef } from "react";

const API_UPLOAD_URL =import.meta.env.API_URL || "http://localhost:3000/image/upload";
const MAX_FILES = 10;
const MAX_FILE_SIZE_MB = 5;

function ImageUpload() {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState("");
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [uploadedData, setUploadedData] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length > MAX_FILES) {
      setError(`You can only upload up to ${MAX_FILES} images.`);
      return;
    }

    const oversized = selectedFiles.some((file) => file.size > MAX_FILE_SIZE_MB * 1024 * 1024);
    if (oversized) {
      setError(`Each file must be less than ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }

    setFiles(selectedFiles);
    setPreviews(selectedFiles.map((file) => URL.createObjectURL(file)));
    setError("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError("");
    setUploadedData(null);

    if (!files.length) {
      setError("Please select at least one image.");
      setUploading(false);
      return;
    }

    if (!category.trim()) {
      setError("Category is required.");
      setUploading(false);
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("image", file));
    formData.append("category", category);

    try {
      const response = await fetch(API_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const { error: errMsg } = await response.json();
        throw new Error(errMsg || "Upload failed");
      }

      const data = await response.json();
      setUploadedData(data);
      setFiles([]);
      setCategory("");
      setPreviews([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setError(err.message || "Failed to upload images.");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    return () => previews.forEach((url) => URL.revokeObjectURL(url));
  }, [previews]);

  return (
    <div style={styles.container}>
      <h2>Upload Multiple Images</h2>

      <form onSubmit={handleUpload} style={styles.form}>
        <div>
          <label>
            Images (max 10):
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              disabled={uploading}
              style={{ marginLeft: 10 }}
            />
          </label>
        </div>

        <div>
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={uploading}
              style={{ marginLeft: 10 }}
              placeholder="Optional"
            />
          </label>
        </div>

        {previews.length > 0 && (
          <div style={styles.previewGrid}>
            {previews.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt="preview"
                style={styles.previewImg}
              />
            ))}
          </div>
        )}

        {error && <div style={styles.error}>{error}</div>}

        <button
          type="submit"
          style={styles.uploadButton}
          disabled={uploading || !files.length}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {uploadedData && uploadedData.data && (
        <div style={styles.results}>
          <h3>Uploaded Images:</h3>
          {uploadedData.data.map((img, idx) => (
            <div key={img._id || idx} style={{ marginBottom: 10 }}>
              <a href={img.url} target="_blank" rel="noopener noreferrer">
                {img.url}
              </a>
              <br />
              <img
                src={img.url}
                alt={img.name}
                style={{ maxWidth: 200, display: "block", marginTop: 5 }}
              />
              <span>Category: {img.category || "(none)"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "30px auto",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 12,
    fontFamily: "system-ui, Arial, sans-serif",
  },
  form: { marginBottom: 20 },
  previewGrid: {
    display: "flex",
    flexWrap: "wrap",
    margin: "15px 0",
    gap: 10,
  },
  previewImg: {
    width: 80,
    height: 80,
    objectFit: "cover",
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  uploadButton: {
    marginTop: 12,
    padding: "10px 20px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  error: { color: "red", marginTop: 10, fontWeight: "bold" },
  results: { marginTop: 24 },
};

export default ImageUpload;
