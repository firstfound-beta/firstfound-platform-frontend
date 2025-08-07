import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";
import firstfoundlogo from "../assets/firstfound.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = () => navigate("/signin");

  const handleSignOut = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate("/");
  };

  const handleDashboard = () => {
    setIsUserMenuOpen(false);
    navigate("/dashboard");
  };

  const handleLogoClick = () => navigate("/");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest(".user-menu-container")) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
      `}</style>

      <nav className="bg-[#f5e5d8] shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div
              className="flex items-center animate-slideInLeft cursor-pointer"
              onClick={handleLogoClick}
            >
              <img
                src={firstfoundlogo}
                alt="FirstFound Logo"
                className="h-10 w-10 rounded-full mr-2 shadow"
              />
              <span className="text-[#6b3e26] text-xl font-bold">
                FirstFound
              </span>
            </div>

            <div className="hidden md:flex space-x-6 items-center animate-fadeInUp">
              <a
                href="#"
                className="text-[#6b3e26] hover:text-[#a0522d] transition-all duration-300 hover:scale-105"
              >
                Explore
              </a>
              <a
                href="/launch"
                className="text-[#6b3e26] hover:text-[#a0522d] transition-all duration-300 hover:scale-105"
              >
                Launch Product
              </a>
              <Link
                to="/about"
                className="text-[#6b3e26] hover:text-[#a0522d] transition-all duration-300 hover:scale-105"
              >
                About
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4 animate-slideInRight">
              <input
                type="text"
                placeholder="Search products..."
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d2a679] transition-all duration-300 focus:scale-105"
              />

              {isLoggedIn ? (
                <div className="relative user-menu-container">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 bg-[#6b3e26] text-white px-3 py-1.5 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105"
                  >
                    <User size={16} />
                    <span className="text-sm">{user?.name || "User"}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isUserMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 animate-fadeInUp">
                      <button
                        onClick={handleDashboard}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <LayoutDashboard size={16} />
                        <span>Dashboard</span>
                      </button>
                      <hr className="my-1 border-gray-200" />
                      <button
                        onClick={handleSignOut}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        <LogOut size={16} />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="bg-[#6b3e26] text-white px-4 py-1.5 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#6b3e26] transition-transform duration-300 hover:scale-110"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-[#f5e5d8] animate-fadeInUp">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#6b3e26] hover:text-[#a0522d] transition-colors duration-300"
            >
              Explore
            </a>
            <a
              href="/launch"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#6b3e26] hover:text-[#a0522d] transition-all duration-300 hover:scale-105"
            >
              Launch Product
            </a>
            <a
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#6b3e26] hover:text-[#a0522d] transition-colors duration-300"
            >
              About
            </a>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d2a679] transition-all duration-300"
            />

            {isLoggedIn ? (
              <div className="space-y-2 pt-2 border-t border-[#d2a679]">
                <div className="flex items-center space-x-2 text-[#6b3e26] text-sm font-medium">
                  <User size={16} />
                  <span>{user?.name || "User"}</span>
                </div>
                <button
                  onClick={() => {
                    handleDashboard();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full text-left text-[#6b3e26] hover:text-[#a0522d] transition-colors duration-300"
                >
                  <LayoutDashboard size={16} />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full text-left text-red-600 hover:text-red-700 transition-colors duration-300"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  handleSignIn();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-[#6b3e26] text-white py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300"
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
