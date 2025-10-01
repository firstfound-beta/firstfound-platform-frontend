import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Rocket, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Products } from "./products";

// Dummy startups
const dummyStartups = [ /* same as your current dummyStartups array */ ];

// Startup Card
const StartupCard = ({ startup }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
      onClick={() => navigate(`/startup/${startup.id}`)}
    >
      <div className="relative h-48 bg-gradient-to-br from-[#6b3e26] to-[#8b5c3c] flex items-center justify-center">
        {!startup.logo ? (
          <Rocket size={64} className="text-white opacity-50" />
        ) : (
          <img src={startup.logo} alt={startup.name} className="w-full h-full object-cover" />
        )}
        {startup.isFeatured && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
            <Star size={12} /> Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#6b3e26] mb-2">{startup.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{startup.description}</p>
        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center text-gray-500">
            <Users size={16} className="mr-1" /> {startup.backers} backers
          </div>
          <div className="text-[#6b3e26] font-semibold bg-[#fefaf6] px-2 py-1 rounded">{startup.category}</div>
        </div>
      </div>
    </div>
  );
};

// Featured Section Component
const FeaturedSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startupSlide, setStartupSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* Featured Startups */}
      <section className="py-12 px-4 max-w-7xl mx-auto bg-white" id="startups">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#6b3e26]">Featured Startups</h2>
          {dummyStartups.length > 3 && (
            <div className="flex space-x-2">
              <button onClick={() => setStartupSlide(prev => (prev - 1 + Math.ceil(dummyStartups.length / 3)) % Math.ceil(dummyStartups.length / 3))}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => setStartupSlide(prev => (prev + 1) % Math.ceil(dummyStartups.length / 3))}>
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyStartups.slice(startupSlide * 3, startupSlide * 3 + 3).map(startup => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 max-w-7xl mx-auto bg-[#fefaf6]" id="products">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#6b3e26]">Featured Products</h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">Loading...</div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <Products key={product.id} products={[product]} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default FeaturedSection;
