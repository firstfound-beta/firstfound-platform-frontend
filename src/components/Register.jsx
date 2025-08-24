import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/firstfound.png";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "India",
    role: "user", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_BACKEND_URL)
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("✅ Registered successfully!");
        navigate("/signin");
      } else {
        alert(
          `❌ Registration failed: ${data.message || "Something went wrong"}`
        );
      }
    } catch (err) {
      alert(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#fefaf6] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-xl p-8">
        <div className="flex justify-center items-center mb-6">
          <img
            src={logo}
            alt="FirstFound Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <span className="ml-3 text-2xl font-bold text-[#6b3e26]">
            Originn
          </span>
        </div>

        <h2 className="text-xl font-semibold text-center text-[#4a2e19] mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm text-[#6b3e26] font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm text-[#6b3e26] font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#6b3e26] font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#6b3e26] font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#6b3e26] font-medium">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-[#6b3e26] font-medium mb-1">
              Role
            </label>
            <div className="flex gap-4">
              {["user", "admin", "investor"].map((role) => (
                <label key={role} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={formData.role[0] === role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: [e.target.value] })
                    }
                  />
                  <span className="text-[#4a2e19] capitalize">{role}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6b3e26] text-white py-2 rounded-lg hover:bg-[#8b5c3c] transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/signin")}
            className="text-[#6b3e26] font-medium hover:underline"
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
