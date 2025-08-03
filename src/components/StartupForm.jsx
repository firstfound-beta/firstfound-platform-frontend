import React, { useState } from "react";
import axios from "axios";

function StartupForm() {
  const [formData, setFormData] = useState({
    startupName: "",
    contactName: "",
    email: "",
    productDescription: "",
    category: "",
    website: "",
    pitchDeckUrl: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post( `${import.meta.env.VITE_BACKEND_URL}/startup/apply`, formData); // Adjust base URL if needed
      setMessage(res.data.message);
      setFormData({
        startupName: "",
        contactName: "",
        email: "",
        productDescription: "",
        category: "",
        website: "",
        pitchDeckUrl: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("There was an error submitting your application.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5e5d8] py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-[#6b3e26]">Launch Your Product</h1>

        {message && <p className="mb-4 text-sm text-green-600">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Startup Name" name="startupName" value={formData.startupName} onChange={handleChange} required />
          <Input label="Contact Name" name="contactName" value={formData.contactName} onChange={handleChange} required />
          <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          <Textarea label="Product Description" name="productDescription" value={formData.productDescription} onChange={handleChange} required />
          <Input label="Category" name="category" value={formData.category} onChange={handleChange} required />
          <Input label="Website (optional)" name="website" value={formData.website} onChange={handleChange} />
          <Input label="Pitch Deck URL (optional)" name="pitchDeckUrl" value={formData.pitchDeckUrl} onChange={handleChange} />

          <button
            type="submit"
            className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const Input = ({ label, name, value, onChange, type = "text", required = false }) => (
  <div>
    <label className="block text-[#6b3e26] font-medium mb-1">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
    />
  </div>
);

const Textarea = ({ label, name, value, onChange, required = false }) => (
  <div>
    <label className="block text-[#6b3e26] font-medium mb-1">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={4}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
    />
  </div>
);

export default StartupForm;
