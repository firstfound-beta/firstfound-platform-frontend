import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import firstfoundlogo from "../assets/firstfound.png";
import pic from "../assets/pics_1.jpeg";
import picw from "../assets/p2.jpeg"


function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  const products = [
    {
      id: 1,
      name: "Smart IoT Device",
      category: "Tech",
      raised: "12.5L",
      target: "15L",
      progress: 85,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.8,
      backers: 245,
    },
    {
      id: 2,
      name: "Eco-Friendly Solution",
      category: "Sustainability",
      raised: "8.2L",
      target: "10L",
      progress: 82,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      rating: 4.9,
      backers: 189,
    },
    {
      id: 3,
      name: "Health Tech Innovation",
      category: "Healthcare",
      raised: "15.8L",
      target: "20L",
      progress: 79,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      rating: 4.7,
      backers: 312,
    },
    {
      id: 4,
      name: "EdTech Platform",
      category: "Education",
      raised: "6.5L",
      target: "8L",
      progress: 81,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      rating: 4.6,
      backers: 156,
    },
    {
      id: 5,
      name: "Food Innovation",
      category: "F&B",
      raised: "11.2L",
      target: "14L",
      progress: 80,
      image: pic,
      rating: 4.8,
      backers: 203,
    },
    {
      id: 6,
      name: "Smart Watch",
      category: "Wearable Tech",
      raised: "9.2L",
      target: "12L",
      progress: 77,
      image: picw,
      rating: 4.6,
      backers: 198,
    },
  ];
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
    }, 4000);
    return () => clearInterval(timer);
  }, [products.length]);

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

  const getVisibleProducts = () => {
    const startIndex = currentSlide * 3;
    return products.slice(startIndex, startIndex + 3);
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
      `}</style>


      <nav className="bg-[#f5e5d8] shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center animate-slideInLeft">
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
                href="#"
                className="text-[#6b3e26] hover:text-[#a0522d] transition-all duration-300 hover:scale-105"
              >
                Launch Product
              </a>
              <a
                href="#"
                className="text-[#6b3e26] hover:text-[#a0522d] transition-all duration-300 hover:scale-105"
              >
                For Investors
              </a>
              <a
                href="#"
                className="text-[#6b3e26] hover:text-[#a0522d] transition-all duration-300 hover:scale-105"
              >
                About
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4 animate-slideInRight">
              <input
                type="text"
                placeholder="Search products..."
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d2a679] transition-all duration-300 focus:scale-105"
              />
              <button
                onClick={handleSignIn}
                className="bg-[#6b3e26] text-white px-4 py-1.5 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Sign In
              </button>
            </div>
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

        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-[#f5e5d8] animate-fadeInUp">
            <a
              href="#"
              className="block text-[#6b3e26] hover:text-[#a0522d] transition-colors duration-300"
            >
              Explore
            </a>
            <a
              href="#"
              className="block text-[#6b3e26] hover:text-[#a0522d] transition-colors duration-300"
            >
              Launch Product
            </a>
            <a
              href="#"
              className="block text-[#6b3e26] hover:text-[#a0522d] transition-colors duration-300"
            >
              For Investors
            </a>
            <a
              href="#"
              className="block text-[#6b3e26] hover:text-[#a0522d] transition-colors duration-300"
            >
              About
            </a>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d2a679] transition-all duration-300"
            />
            <button
              onClick={handleSignIn}
              className="w-full bg-[#6b3e26] text-white py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        )}
      </nav>


      <section className="gradient-bg py-16 text-center px-4 relative overflow-hidden">
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
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-[#5c3a21] animate-fadeInUp">
            Discover India's next big thing before the rest of the world does
          </h1>
          <p
            className="text-lg mb-6 text-gray-700 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Explore and pre-order innovative products from India's top startups.
          </p>
          <button
            className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 pulse-button animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Explore Products
          </button>
        </div>
      </section>

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
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(products.length / 3) }).map(
                (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {products
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((product, index) => (
                          <div
                            key={product.id}
                            className="border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white card-hover"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="relative overflow-hidden rounded-t-lg">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
                              />
                              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                                <Star
                                  size={12}
                                  className="text-yellow-500 mr-1"
                                />
                                {product.rating}
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-bold text-[#4a2e19] mb-1">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-600 mb-2">
                                Category: {product.category}
                              </p>
                              <div className="flex items-center mb-2 text-xs text-gray-500">
                                <Users size={12} className="mr-1" />
                                {product.backers} backers
                              </div>
                              <div className="my-2 text-sm text-gray-700">
                                ₹{product.raised} raised of ₹{product.target}
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                                <div
                                  className="bg-gradient-to-r from-[#6b3e26] to-[#8b5c3c] h-2 rounded-full transition-all duration-1000 ease-out"
                                  style={{ width: `${product.progress}%` }}
                                ></div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-[#6b3e26]">
                                  {product.progress}% funded
                                </span>
                                <button className="bg-[#6b3e26] text-white px-4 py-1 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105">
                                  Pre-order Now
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>


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
        </div>
      </section>

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
              Turn your innovative idea into reality
            </h2>
            <p className="mb-6 text-gray-700">
              Validate your idea, raise working capital, build community,
              attract investors.
            </p>
            <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg pulse-button">
              Launch Your Campaign
            </button>
          </div>
        </div>
      </section>

      <section
        className="bg-white py-12 px-4 text-center"
        id="invest"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.invest
              ? "animate-slideInRight"
              : "opacity-0 translate-x-8"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <Award
              size={48}
              className="mx-auto mb-4 text-[#6b3e26] animate-float"
              style={{ animationDelay: "1s" }}
            />
            <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">
              Invest in Startups
            </h2>
            <p className="mb-6 text-gray-700">
              Get early access to curated deal flow and traction-backed
              startups.
            </p>
            <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Join Investor Network
            </button>
          </div>
        </div>
      </section>

      <section
        className="bg-[#fefaf6] py-12 px-4 max-w-6xl mx-auto"
        id="works"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.works ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-semibold text-center mb-8 text-[#6b3e26]">
            How It Works
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {["Discover", "Pre-order", "Track & Support"].map((step, index) => (
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
                  {step === "Discover"
                    ? "Browse innovative products by Indian startups."
                    : step === "Pre-order"
                    ? "Support startups by pre-ordering their products."
                    : "Follow progress and get updates from founders."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">
            What Our Users Say
          </h2>
          <div className="bg-gradient-to-r from-[#f5e5d8] to-[#fefaf6] p-8 rounded-lg max-w-2xl mx-auto">
            <p className="text-gray-600 italic text-lg">
              "Amazing platform connecting innovative startups with early
              adopters!"
            </p>
            <div className="mt-4 flex justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-500 fill-current"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-8 px-4 bg-[#f0f4f8] text-center"
        id="trusted"
        data-animate
      >
        <div
          className={`transition-all duration-800 ${
            isVisible.trusted ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg font-semibold mb-4 text-[#6b3e26]">
            Trusted By
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Sequoia", "Accel", "100X.VC"].map((logo, index) => (
              <div
                key={logo}
                className="w-32 h-12 bg-white shadow-lg rounded flex items-center justify-center card-hover animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm text-gray-500 font-semibold">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <footer className="bg-[#f5e5d8] text-[#5a3c2e] py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Explore",
              items: ["Products", "Categories", "Success Stories"],
            },
            {
              title: "For Startups",
              items: ["Launch Project", "How It Works"],
            },
            {
              title: "For Investors",
              items: ["Join Network", "Success Metrics"],
            },
            {
              title: "Company",
              items: ["About", "Blog", "Contact", "Support"],
            },
          ].map(({ title, items }, index) => (
            <div
              key={title}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="font-semibold mb-2">{title}</h4>
              <ul>
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm hover:text-[#6b3e26] transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-4 animate-fadeInUp">
  <img src={firstfoundlogo} alt="FirstFound Logo" className="h-12 w-12 rounded-full shadow" />
</div>
<div className="mt-6 text-center text-sm text-[#8c6b5c] animate-fadeInUp">
  © 2025 FirstFound. All rights reserved.
</div>

      </footer>
    </div>
  );
}

export default Homepage;
