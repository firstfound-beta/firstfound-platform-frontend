import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Play,
  Building2,
  Rocket,
} from "lucide-react";
import healthai from "../assets/images.png"
import firstfoundlogo from "../assets/firstfound.png";
import { Link, useNavigate } from "react-router-dom";
import { Products } from "./products";

// API service for products
const ProductService = {
  async getAllProducts() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/products`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};

// Dummy startups data
const dummyStartups = [
  {
    id: 1,
    name: "TechNova",
    description:
      "TechNOVA delivers strategic insights into the application of cutting edge technology in order for leaders to formulate their own plans. Our conferences, webinars, reports and roundtables deliver thought leadership, networking opportunities and inspiration to those creating a connected world and all businesses that have a place in that ecosystem.",
    category: "Technology",
    isFeatured: true,
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFPkllq2S8KnQ/company-logo_200_200/company-logo_200_200/0/1631328833839?e=1762387200&v=beta&t=lvWkNi0TdaUX2_HIGHVsRWe_uuP32kF3ORqKw9TBDHE",
    cover: "https://media.licdn.com/dms/image/v2/C4E1BAQF6WK7BC9CwcQ/company-background_10000/company-background_10000/0/1583937404353?e=1759860000&v=beta&t=aSgUnwTr5_IUzmEnoCD6Sc5cGy2EXvbqnQxW0NTISxE",
    social: {
      website: "https://technova.com",
      linkedin: "https://linkedin.com/company/technova",
      twitter: "https://twitter.com/technova",
      facebook: "https://facebook.com/technova",
    },
  },
  {
    id: 2,
    name: "HealthAI",
    description:
      "AI-powered health diagnostics making healthcare accessible to everyone in rural India.",
    category: "HealthTech",
    isFeatured: true,
    logo: "https://data.org/wp-content/uploads/2021/11/HealthAI.jpeg",
  },
  {
    id: 3,
    name: "FarmFresh Connect",
    description:
      "Connecting farmers directly with consumers for fresh, organic produce delivery.",
    category: "AgriTech",
    isFeatured: false,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHM-xOkr07Z0-3pVyCvJpktbqxsC6UhFcVFg&s",
  },
  {
    id: 4,
    name: "EduVerse",
    description:
      "Immersive VR learning experiences for students. Making education engaging and interactive.",
    category: "EdTech",
    isFeatured: true,
    logo: "https://play-lh.googleusercontent.com/f8gCpxWyfopYqGI_P_htWDM02nlE406ly9DbA_OdVHCJQJzKq4iu0-Ru7_gDV5vs9Co=w240-h480-rw",
  },
  {
    id: 5,
    name: "SmartHome India",
    description:
      "Affordable smart home automation solutions designed specifically for Indian households.",
    category: "IoT",
    isFeatured: false,
    logo: "https://www.casaio.de/wp-content/uploads/2010/05/Smmarthome-Wuerzburg-1024x683.jpg",
  },
  {
    id: 6,
    name: "CleanWater Tech",
    description:
      "Innovative water purification systems for communities lacking clean drinking water.",
    category: "Social Impact",
    isFeatured: true,
    logo: "https://www.graygroupintl.com/hubfs/Gray%20Group%20International/GGI%20-%20Assign%20and%20Sort%20(WebP)/Technology%20and%20Clean%20Water%20and%20Sanitation%20Advancing%20Access%20to%20Clean%20Water.webp",
  },
];


// Startup Card Component
const StartupCard = ({ startup }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border-2 border-black h-full flex flex-col"
      onClick={() => navigate(`/startup/${startup.id}`)}
    >
      <div className="relative h-72 bg-gradient-to-br from-[#6b3e26] to-[#8b5c3c] flex items-center justify-center">
        {startup.logo ? (
          <img
            src={startup.logo}
            alt={startup.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Building2 size={64} className="text-white opacity-50" />
        )}
        {startup.isFeatured && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-md">
            <Star size={14} className="fill-current" />
            Featured
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-[#6b3e26] mb-3">
          {startup.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {startup.description}
        </p>
        <div className="flex items-center justify-end text-sm mt-auto">
          <div className="text-[#6b3e26] font-semibold bg-[#fefaf6] px-3 py-1.5 rounded-lg border border-[#e5d5c8]">
            {startup.category}
          </div>
        </div>
        {startup.fundingGoal && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Funding Progress</span>
              <span className="font-semibold text-[#6b3e26]">
                {Math.round(
                  ((startup.fundingRaised || 0) / startup.fundingGoal) * 100
                )}
                %
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#6b3e26] to-[#8b5c3c] h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    ((startup.fundingRaised || 0) / startup.fundingGoal) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹{(startup.fundingRaised / 1000).toFixed(0)}K raised</span>
              <span>₹{(startup.fundingGoal / 1000).toFixed(0)}K goal</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startupSlide, setStartupSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [products, setProducts] = useState([]);
  const [startups] = useState(dummyStartups); // Using dummy data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await ProductService.getAllProducts();
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        setError("Failed to load products");
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Auto-slide for products
  useEffect(() => {
    if (products.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [products.length]);

  // Auto-slide for startups
  useEffect(() => {
    if (startups.length > 0) {
      const timer = setInterval(() => {
        setStartupSlide((prev) => (prev + 1) % Math.ceil(startups.length / 3));
      }, 4500);
      return () => clearInterval(timer);
    }
  }, [startups.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(products.length / 3)) %
        Math.ceil(products.length / 3)
    );
  };

  const nextStartupSlide = () => {
    setStartupSlide((prev) => (prev + 1) % Math.ceil(startups.length / 3));
  };

  const prevStartupSlide = () => {
    setStartupSlide(
      (prev) =>
        (prev - 1 + Math.ceil(startups.length / 3)) %
        Math.ceil(startups.length / 3)
    );
  };

  return (
    <div className="text-gray-800 font-sans bg-[#fefaf6] overflow-x-hidden">
      <style jsx>{`
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .carousel-container {
          transition: transform 0.5s ease-in-out;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #fefaf6 0%, #f5e5d8 100%);
        }

        .card-hover {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .pulse-button {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(107, 62, 38, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(107, 62, 38, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(107, 62, 38, 0);
          }
        }

        .loading-spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #6b3e26;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="gradient-bg py-16 text-center px-4 relative overflow-hidden">
        {/* Animated background bubbles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#6b3e26] rounded-full animate-float"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-[#d2a679] rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#a0522d] rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-[#5c3a21] animate-fadeInUp">
            Discover and Try The Next Big Thing!
          </h1>
         
        
        </div>
      </section>

      {/* Featured Startups Section */}
      <section
        className="py-16 px-4 max-w-7xl mx-auto bg-white "
        id="startups"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.startups ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <Rocket size={32} className="text-[#6b3e26]" />
              <h2 className="text-3xl font-bold text-[#6b3e26]">
                Featured Startups
              </h2>
            </div>
            {startups.length > 3 && (
              <div className="flex space-x-3">
                <button
                  onClick={prevStartupSlide}
                  className="p-3 bg-[#6b3e26] text-white rounded-full hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Previous startups"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextStartupSlide}
                  className="p-3 bg-[#6b3e26] text-white rounded-full hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Next startups"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>

          {startups.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No startups available at the moment.
              </p>
            </div>
          )}

          {startups.length > 0 && (
            <>
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${startupSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(startups.length / 3) }).map(
                    (_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          {startups
                            .slice(slideIndex * 3, slideIndex * 3 + 3)
                            .map((startup) => (
                              <StartupCard key={startup.id} startup={startup} />
                            ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {startups.length > 3 && (
                <div className="flex justify-center mt-8 space-x-3">
                  {Array.from({ length: Math.ceil(startups.length / 3) }).map(
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() => setStartupSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          startupSlide === index
                            ? "bg-[#6b3e26] scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to startup slide ${index + 1}`}
                      />
                    )
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        className="py-16 px-4 max-w-7xl mx-auto bg-[#fefaf6]"
        id="products"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.products ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#6b3e26]">
              Featured Products
            </h2>
            {products.length > 3 && (
              <div className="flex space-x-3">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-[#6b3e26] text-white rounded-full hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Previous products"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 bg-[#6b3e26] text-white rounded-full hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Next products"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="loading-spinner"></div>
              <span className="ml-4 text-[#6b3e26]">Loading products...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#6b3e26] text-white px-4 py-2 rounded hover:bg-[#8b5c3c] transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No products available at the moment.
              </p>
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <>
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(products.length / 3) }).map(
                    (_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          <Products
                            products={products}
                            slideIndex={slideIndex}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {products.length > 3 && (
                <div className="flex justify-center mt-8 space-x-3">
                  {Array.from({ length: Math.ceil(products.length / 3) }).map(
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-[#6b3e26] scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to product slide ${index + 1}`}
                      />
                    )
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      

     
    </div>
  );
}

export default Homepage;