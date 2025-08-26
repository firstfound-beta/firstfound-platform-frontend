import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiImage, FiMenu, FiX, FiUsers, FiBookmark, FiUserPlus } from 'react-icons/fi';
import { IoLogoBuffer } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <FiHome className="text-xl" /> },
    { name: 'User Management', path: '/admin/UserManagement', icon: <IoLogoBuffer className="text-xl" /> },
    { name: 'Startup Application', path: '/admin/StartupApplication', icon: <FiImage className="text-xl" /> },
    { name: 'Campaign Management', path: '/admin/CampaignManagement', icon: <FiUserPlus className="text-xl" /> },
    { name: 'Content Management', path: '/admin/ContentManagement', icon: <FiBookmark className="text-xl" /> },
    { name: 'Transactions', path: '/admin/Transactions', icon: <FiUsers className="text-xl" /> },
    { name: 'Analytics', path: '/admin/Analytics', icon: <FiUserPlus className="text-xl" /> },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#6b3e26] text-white shadow-lg transition-all hover:bg-[#5c3a21]"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-50 h-full bg-gradient-to-b from-[#fefaf6] to-[#f5e5d8] text-[#5c3a21] transition-all duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'} 
          md:translate-x-0 ${isOpen ? 'w-64' : 'w-20'} flex flex-col border-r border-[#e0cbb7]`}
      >
        {/* Toggle button for desktop */}
        <div className="hidden md:flex justify-end p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-[#e5d1c3] transition-colors"
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isOpen ? <FiX className="text-lg text-[#6b3e26]" /> : <FiMenu className="text-lg text-[#6b3e26]" />}
          </button>
        </div>

        {/* Logo/Sidebar header */}
        <div className={`flex items-center ${isOpen ? 'px-4 py-6' : 'justify-center py-6'}`}>
          {isOpen ? (
            <h2 className="text-2xl font-bold text-[#6b3e26]">Admin Panel</h2>
          ) : (
            <h2 className="text-xl font-bold text-[#6b3e26]">AP</h2>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-2 flex-1 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 
                    hover:bg-[#e5d1c3] hover:shadow-md group
                    ${location.pathname === item.path ? 'bg-[#d7bfa8] shadow-md font-medium' : ''}
                    ${isOpen ? 'justify-start space-x-3' : 'justify-center'}`}
                >
                  <span className={`${location.pathname === item.path ? 'text-[#6b3e26]' : 'text-[#8c5a3b]'} group-hover:text-[#6b3e26]`}>
                    {item.icon}
                  </span>
                  {isOpen && (
                    <span className="whitespace-nowrap text-sm">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        {isOpen && (
          <div className="p-4 bg-[#e5d1c3] text-center text-xs text-[#6b3e26] opacity-80">
            © 2025 Admin Panel
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
