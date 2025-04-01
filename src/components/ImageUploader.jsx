"use client";

import { useState } from "react";

export default function ImageUploader() {
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    const formData = new FormData(e.target);
    
    try { 
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setImageUrl(data.url);
      } else {
        console.error("Upload failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Select an image</label>
          <input 
            type="file" 
            name="file" 
            accept="image/*" 
            required 
            className="border p-2 w-full"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isUploading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isUploading ? "Uploading..." : "Upload Image"}
        </button>
      </form>
      
      {imageUrl && (
        <div className="mt-4">
          <p>Uploaded successfully:</p>
          <img src={imageUrl} alt="Uploaded" className="mt-2 max-w-full h-auto" />
        </div>
      )}
    </div>
  );
}