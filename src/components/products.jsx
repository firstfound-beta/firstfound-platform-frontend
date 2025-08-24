import { Star, Play, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Products({ products, slideIndex }) {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleWatchDemo = (demoVideoUrl, e) => {
    e.stopPropagation();
    if (demoVideoUrl) {
      window.open(demoVideoUrl, "_blank");
    }
  };

  const handlePreOrderClick = (e, productId) => {
    e.stopPropagation();
    navigate(`/product/${productId}?preorder=true`);
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)}Cr`;
    if (amount >= 100000) return `${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K`;
    return amount.toString();
  };

  const getProductImage = (product, index = 0) => {
    if (product.images && product.images.length > 0) return product.images[index];
    const fallbackImages = {
      Tech: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      Sustainability: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      Healthcare: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      Education: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      "F&B": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      "Wearable Tech": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    };
    const category = product.categories && product.categories[0];
    return fallbackImages[category] ||
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop";
  };

  return (
    <>
      {products
        .slice(slideIndex * 3, slideIndex * 3 + 3)
        .map((product, index) => (
          <div
            key={product._id}
            className="border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleProductClick(product._id)}
          >
            {/* Image section */}
            <div className="relative overflow-hidden">
              <img
                src={getProductImage(product)}
                alt={product.name}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop";
                }}
              />
              
              {/* Rating badge */}
              <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-md flex items-center">
                <Star size={12} className="mr-1 fill-white" />
                {product.rating.toFixed(1)}
              </div>

              {/* Demo button */}
              {product.demoVideoUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWatchDemo(product.demoVideoUrl, e);
                  }}
                  className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all shadow-md"
                >
                  <Play size={16} />
                </button>
              )}
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-[#4a2e19] group-hover:text-[#8b5c3c] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>

              {/* Categories */}
              {product.categories?.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {product.categories.slice(0, 2).map((category, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#f5e5d8] text-[#6b3e26] px-2 py-0.5 rounded-full font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              {/* Backers */}
              <div className="flex items-center text-xs text-gray-500">
                <Users size={12} className="mr-1" />
                {product.backersCount} backers
              </div>

              {/* Raised */}
              <div className="text-sm font-medium text-gray-700">
                ₹{formatCurrency(product.amountRaised)} raised
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#6b3e26] to-[#8b5c3c] h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${Math.min(product.percentageFunded, 100)}%` }}
                />
              </div>

              {/* Bottom row */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-[#6b3e26]">
                  {product.percentageFunded}% funded
                </span>
                <div className="flex space-x-2 items-center">
                  <span className="text-lg font-bold text-[#6b3e26]">
                    ₹{formatCurrency(product.price)}
                  </span>
                  <button
                    className="bg-[#6b3e26] text-white px-4 py-1.5 rounded-lg hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePreOrderClick(e, product._id);
                    }}
                  >
                    Pre-order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

