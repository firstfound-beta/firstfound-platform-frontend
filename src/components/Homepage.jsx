import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Play,
} from "lucide-react";
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

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Testimonials data (keeping this static as it's not in your backend)
  const testimonials = [
    {
      quote:
        "Amazing platform connecting innovative startups with early adopters!",
      name: "Priya Sharma",
      rating: 5,
    },
    {
      quote:
        "Helped me discover and support some really cool products early on.",
      name: "Rahul Verma",
      rating: 4,
    },
    {
      quote: "A one-stop destination for innovation in India.",
      name: "Anjali Mehta",
      rating: 5,
    },
  ];

  const [testimonialSlide, setTestimonialSlide] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Auto-slide for products
  useEffect(() => {
    if (products.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [products.length]);

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
      `}</style>

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
            Early Stage Startups
          </h1>
          <p
            className="text-lg mb-6 text-gray-700 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Discover the next big ideas from India's most promising early-stage
            startups. Support their journey by pre-ordering today.
          </p>
          <Link
            to="/startup"
            className="inline-block bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 pulse-button animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Discover Startups
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        className="py-12 px-4 max-w-7xl mx-auto bg-[#fefaf6]"
        id="products"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.products ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#6b3e26]">
              Featured Products
            </h2>
            {products.length > 3 && (
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-[#6b3e26] text-white rounded-full hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-[#6b3e26] text-white rounded-full hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={20} />
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
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="flex justify-center mt-6 space-x-2">
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
                      />
                    )
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Launch Section */}
      {/* Launch Section */}
      <section
        className="bg-gradient-to-br from-[#f0f4f8] to-[#e8f2f7] py-12 px-4 text-center"
        id="launch"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.launch ? "animate-slideInLeft" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <TrendingUp
              size={48}
              className="mx-auto mb-4 text-[#6b3e26] animate-float"
            />
            <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">
              Launch Your Product
            </h2>
            <p className="mb-6 text-gray-700">
              Step 1: Fill out your product launch form. Our Origin team will
              review and verify your submission. Once verified, your startup and
              product will be featured on the main homepage.
            </p>
            <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg pulse-button">
              Submit Launch Form
            </button>
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section
        className="bg-white py-12 px-4 text-center"
        id="campaign"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.campaign
              ? "animate-slideInRight"
              : "opacity-0 translate-x-8"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <Award
              size={48}
              className="mx-auto mb-4 text-[#6b3e26] animate-float"
            />
            <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">
              Launch Campaign & Raise Funding
            </h2>
            <p className="mb-6 text-gray-700">
              Step 2: Once verified, you can start your campaign to raise
              funding. Backers can pre-order your product. All funds are held in
              an escrow account and released milestone by milestone.
            </p>
            <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Launch Your Campaign
            </button>
          </div>
        </div>
      </section>

      {/* Milestone / Escrow Section */}
      <section
        className="bg-[#fefaf6] py-12 px-4 max-w-6xl mx-auto"
        id="milestones"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.milestones
              ? "animate-fadeInUp"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-semibold text-center mb-8 text-[#6b3e26]">
            Milestones & Escrow Funding
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[
              "Raw Material Funding",
              "Manufacturing Funding",
              "Delivery / Launch Funding",
            ].map((step, index) => (
              <div
                key={index}
                className="flex-1 p-6 bg-white shadow-lg rounded-lg card-hover animate-scaleIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-[#6b3e26] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#4a2e19]">
                  {step}
                </h3>
                <p className="text-gray-600">
                  {step === "Raw Material Funding"
                    ? "Backers' pre-order funds are released from escrow to purchase raw materials."
                    : step === "Manufacturing Funding"
                    ? "After raw materials are ready, next portion of funds released for manufacturing."
                    : "Final funds released for product delivery once manufacturing is complete."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backer Pre-Order Section */}
      <section
        className="bg-gradient-to-br from-[#f0f4f8] to-[#e8f2f7] py-12 px-4 text-center"
        id="preorder"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.preorder
              ? "animate-slideInLeft"
              : "opacity-0 translate-x-8"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            {/* <ShoppingCart
              size={48}
              className="mx-auto mb-4 text-[#6b3e26] animate-float"
            /> */}
            <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">
              Backer Pre-Orders
            </h2>
            <p className="mb-6 text-gray-700">
              Step 3: Users (backers) can pre-order your product. Funds are
              safely held in escrow and released milestone by milestone.
            </p>
            <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Pre-Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-12 px-4 text-center bg-white"
        id="testimonials"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.testimonials
              ? "animate-fadeInUp"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-8 text-[#6b3e26]">
            What Our Users Say
          </h2>

          <div className="relative overflow-hidden max-w-xl mx-auto">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <div className="bg-gradient-to-r from-[#f5e5d8] to-[#fefaf6] p-8 rounded-lg shadow-md">
                    <p className="text-gray-600 italic text-lg">"{t.quote}"</p>
                    <p className="mt-4 font-semibold text-[#6b3e26]">
                      {t.name}
                    </p>
                    <div className="mt-2 flex justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${
                            i < t.rating
                              ? "text-yellow-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    testimonialSlide === i
                      ? "bg-[#6b3e26] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
