import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/firstfound.png';

function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Signed in successfully!');
        localStorage.setItem('token', data.token); // 🟡 Save token
        localStorage.setItem('user', JSON.stringify(data.user)); // (optional)
        navigate('/'); // ✅ Redirect after login
      }
       else {
        alert(`❌ Sign-in failed: ${data.message || 'Invalid credentials'}`);
      }
    } catch (err) {
      alert(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#fefaf6] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <div className="flex justify-center items-center mb-6">
          <img src={logo} alt="FirstFound Logo" className="w-12 h-12 rounded-full shadow-md" />
          <span className="ml-3 text-2xl font-bold text-[#6b3e26]">FirstFound</span>
        </div>

        <h2 className="text-xl font-semibold text-center text-[#4a2e19] mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-[#6b3e26] font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#6b3e26] font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6b3e26] text-white py-2 rounded-lg hover:bg-[#8b5c3c] transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-[#6b3e26] hover:underline font-medium"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
