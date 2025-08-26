import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-[#fefaf6] p-4 shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6b3e26]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
        <h1 className="text-[#6b3e26] text-xl font-bold tracking-tight">Originn</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        {/* Notification Button */}
        <button className="relative text-[#6b3e26] hover:text-[#8c5c3e] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {/* Optional: Notification Badge */}
          <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Logout Button */}
        <button 
          onClick={handleLogout} 
          className="bg-[#6b3e26] text-[#fefaf6] hover:bg-[#56311f] px-4 py-2 rounded-lg font-medium flex items-center space-x-2 shadow-sm hover:shadow-md transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default TopNav;
