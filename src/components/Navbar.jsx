import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, LogOut, LayoutDashboard, ChevronDown, Search, Menu, X, Building2, Package } from "lucide-react";
import firstfoundlogo from "../assets/firstfound.png";
import { AuthContext } from "../context/AuthContext";

// Dummy startups data (same as Homepage)
const dummyStartups = [
  {
    id: 1,
    name: "TechNova",
    description: "TechNOVA delivers strategic insights into the application of cutting edge technology...",
    category: "Technology",
    isFeatured: true,
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFPkllq2S8KnQ/company-logo_200_200/company-logo_200_200/0/1631328833839?e=1762387200&v=beta&t=lvWkNi0TdaUX2_HIGHVsRWe_uuP32kF3ORqKw9TBDHE",
  },
  {
    id: 2,
    name: "HealthAI",
    description: "AI-powered health diagnostics making healthcare accessible to everyone in rural India.",
    category: "HealthTech",
    isFeatured: true,
    logo: "https://data.org/wp-content/uploads/2021/11/HealthAI.jpeg",
  },
  {
    id: 3,
    name: "FarmFresh Connect",
    description: "Connecting farmers directly with consumers for fresh, organic produce delivery.",
    category: "AgriTech",
    isFeatured: false,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHM-xOkr07Z0-3pVyCvJpktbqxsC6UhFcVFg&s",
  },
  {
    id: 4,
    name: "EduVerse",
    description: "Immersive VR learning experiences for students. Making education engaging and interactive.",
    category: "EdTech",
    isFeatured: true,
    logo: "https://play-lh.googleusercontent.com/f8gCpxWyfopYqGI_P_htWDM02nlE406ly9DbA_OdVHCJQJzKq4iu0-Ru7_gDV5vs9Co=w240-h480-rw",
  },
  {
    id: 5,
    name: "SmartHome India",
    description: "Affordable smart home automation solutions designed specifically for Indian households.",
    category: "IoT",
    isFeatured: false,
    logo: "https://www.casaio.de/wp-content/uploads/2010/05/Smmarthome-Wuerzburg-1024x683.jpg",
  },
  {
    id: 6,
    name: "CleanWater Tech",
    description: "Innovative water purification systems for communities lacking clean drinking water.",
    category: "Social Impact",
    isFeatured: true,
    logo: "https://www.graygroupintl.com/hubfs/Gray%20Group%20International/GGI%20-%20Assign%20and%20Sort%20(WebP)/Technology%20and%20Clean%20Water%20and%20Sanitation%20Advancing%20Access%20to%20Clean%20Water.webp",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [products, setProducts] = useState([]);
  const searchRef = useRef(null);
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Search in startups
    const startupResults = dummyStartups
      .filter((startup) =>
        startup.name.toLowerCase().includes(query) ||
        startup.description.toLowerCase().includes(query) ||
        startup.category.toLowerCase().includes(query)
      )
      .map((startup) => ({
        ...startup,
        type: "startup",
      }));

    // Search in products
    const productResults = products
      .filter((product) =>
        product.name?.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query)
      )
      .map((product) => ({
        ...product,
        type: "product",
      }));

    setSearchResults([...startupResults, ...productResults]);
    setShowSearchResults(true);
  }, [searchQuery, products]);

  // Close search results on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignIn = () => {
    navigate("/signin");
    setIsMenuOpen(false);
  };

  const handleSignOut = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
    navigate("/");
  };

  const handleDashboard = () => {
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
    navigate("/dashboard");
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    navigate("/");
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleSearchResultClick = (result) => {
    if (result.type === "startup") {
      navigate(`/startup/${result.id}`);
    } else if (result.type === "product") {
      navigate(`/product/${result.id}`);
    }
    setSearchQuery("");
    setShowSearchResults(false);
    setIsMenuOpen(false);
  };

  // Close user menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest(".user-menu-container")) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen]);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#f5e5d8] shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={handleLogoClick}
            >
              <img
                src={firstfoundlogo}
                alt="FirstFound Logo"
                className="h-10 w-10 rounded-full shadow"
              />
              <span className="text-[#6b3e26] text-xl font-bold ml-2 hidden sm:inline">
                Originn
              </span>
            </div>
          </div>

          {/* Desktop Search - Hidden on smaller screens */}
          <div className="hidden lg:flex relative items-center flex-1 max-w-md mx-8" ref={searchRef}>
            <Search className="absolute left-3 text-gray-400 pointer-events-none z-10" size={18} />
            <input
              type="text"
              placeholder="Search startups & products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowSearchResults(true)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6b3e26] focus:border-transparent transition-all duration-300"
            />
            
            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                {searchResults.map((result, index) => (
                  <div
                    key={`${result.type}-${result.id}-${index}`}
                    onClick={() => handleSearchResultClick(result)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      {result.logo ? (
                        <img
                          src={result.logo}
                          alt={result.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : result.image ? (
                        <img
                          src={result.image}
                          alt={result.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6b3e26] to-[#8b5c3c] flex items-center justify-center">
                          {result.type === "startup" ? (
                            <Building2 size={24} className="text-white" />
                          ) : (
                            <Package size={24} className="text-white" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-[#6b3e26] truncate">
                          {result.name}
                        </h4>
                        <span className="text-xs bg-[#f5e5d8] text-[#6b3e26] px-2 py-0.5 rounded-full flex-shrink-0">
                          {result.type === "startup" ? "Startup" : "Product"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {result.description}
                      </p>
                      {result.category && (
                        <span className="text-xs text-gray-500">
                          {result.category}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {showSearchResults && searchQuery && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
                <p className="text-gray-500 text-center">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-12">
            <Link
              to="/startup"
              className="text-[#6b3e26] text-sm lg:text-base font-medium hover:text-[#a0522d] transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Discover Startup
            </Link>
            <Link
              to="/preorder"
              className="text-[#6b3e26] text-sm lg:text-base font-medium hover:text-[#a0522d] transition-all duration-300 hover:scale-105"
            >
              Preorder
            </Link>
            <Link
              to="/launch"
              className="text-[#6b3e26] text-sm lg:text-base font-medium hover:text-[#a0522d] transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Launch Your Start
            </Link>
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center ml-4">
            {isLoggedIn ? (
              <div className="relative user-menu-container">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-[#6b3e26] text-white px-3 lg:px-4 py-2 rounded-lg shadow hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105"
                >
                  <User size={18} />
                  <span className="text-sm lg:text-base max-w-[100px] truncate">
                    {user?.name || "User"}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isUserMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <button
                      onClick={handleDashboard}
                      className="flex items-center space-x-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <LayoutDashboard size={18} />
                      <span>Dashboard</span>
                    </button>
                    <hr className="my-1 border-gray-200" />
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                    >
                      <LogOut size={18} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                className="bg-[#6b3e26] text-white px-4 lg:px-6 py-2 rounded-lg shadow hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm lg:text-base"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#6b3e26] p-2 rounded-lg hover:bg-[#e5d5c8] transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Shown below header on mobile */}
        <div className="md:hidden pb-3" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" size={18} />
            <input
              type="text"
              placeholder="Search startups & products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowSearchResults(true)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6b3e26] focus:border-transparent transition-all duration-300"
            />
            
            {/* Mobile Search Results */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-80 overflow-y-auto z-50">
                {searchResults.map((result, index) => (
                  <div
                    key={`${result.type}-${result.id}-${index}`}
                    onClick={() => handleSearchResultClick(result)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex-shrink-0">
                      {result.logo ? (
                        <img
                          src={result.logo}
                          alt={result.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      ) : result.image ? (
                        <img
                          src={result.image}
                          alt={result.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6b3e26] to-[#8b5c3c] flex items-center justify-center">
                          {result.type === "startup" ? (
                            <Building2 size={20} className="text-white" />
                          ) : (
                            <Package size={20} className="text-white" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-[#6b3e26] truncate text-sm">
                          {result.name}
                        </h4>
                        <span className="text-xs bg-[#f5e5d8] text-[#6b3e26] px-2 py-0.5 rounded-full flex-shrink-0">
                          {result.type === "startup" ? "Startup" : "Product"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 truncate">
                        {result.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {showSearchResults && searchQuery && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-3 z-50">
                <p className="text-gray-500 text-center text-sm">No results found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[120px] bg-[#f5e5d8] z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/startup"
              onClick={handleNavClick}
              className="block text-[#6b3e26] text-lg font-medium hover:text-[#a0522d] hover:bg-[#e5d5c8] px-4 py-3 rounded-lg transition-all duration-300"
            >
              Discover Startup
            </Link>
            <Link
              to="/preorder"
              onClick={handleNavClick}
              className="block text-[#6b3e26] text-lg font-medium hover:text-[#a0522d] hover:bg-[#e5d5c8] px-4 py-3 rounded-lg transition-all duration-300"
            >
              Preorder
            </Link>
            <Link
              to="/launch"
              onClick={handleNavClick}
              className="block text-[#6b3e26] text-lg font-medium hover:text-[#a0522d] hover:bg-[#e5d5c8] px-4 py-3 rounded-lg transition-all duration-300"
            >
              Launch Your Start
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className="block text-[#6b3e26] text-lg font-medium hover:text-[#a0522d] hover:bg-[#e5d5c8] px-4 py-3 rounded-lg transition-all duration-300"
            >
              About
            </Link>

            {/* Mobile User Section */}
            <div className="pt-4 border-t-2 border-[#d2a679]">
              {isLoggedIn ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-[#6b3e26] text-base font-semibold px-4 py-2 bg-[#e5d5c8] rounded-lg">
                    <User size={20} />
                    <span className="truncate">{user?.name || "User"}</span>
                  </div>
                  <button
                    onClick={handleDashboard}
                    className="flex items-center space-x-3 w-full text-left text-[#6b3e26] text-lg font-medium hover:text-[#a0522d] hover:bg-[#e5d5c8] px-4 py-3 rounded-lg transition-all duration-300"
                  >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-3 w-full text-left text-red-600 text-lg font-medium hover:text-red-700 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-300"
                  >
                    <LogOut size={20} />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="w-full bg-[#6b3e26] text-white py-3 rounded-lg shadow-lg hover:bg-[#8b5c3c] transition-all duration-300 font-medium text-lg"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;