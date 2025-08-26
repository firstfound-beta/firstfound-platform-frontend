import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin/dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate(from, { replace: true });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefaf6] to-[#f5e5d8] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-[#fefaf6] p-6 text-center">
            <h1 className="text-2xl font-bold text-[#5c3a21]">Originn Admin Panel</h1>
            <p className="text-[#6b3e26] mt-1">
              Enter your credentials to access the dashboard
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#6b3e26] focus:border-[#6b3e26]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#6b3e26] focus:border-[#6b3a21]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-lg shadow-sm text-sm font-medium text-white bg-[#6b3e26] hover:bg-[#8b5c3c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6b3e26] transition duration-150 ease-in-out"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="px-8 pb-6 text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our <a href="#" className="text-[#6b3e26] hover:underline">Terms of Service</a>
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Originn. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
