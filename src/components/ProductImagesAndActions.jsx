import React from 'react';
import { Play, Package, Heart, Share2 } from 'lucide-react';

const ProductImagesAndActions = ({
  product,
  selectedImage,
  setSelectedImage,
  isLiked,
  setIsLiked,
  preorderMode,
  handlePreOrder,
  handleWatchDemo,
  handleShare,
  getProductImage,
}) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <img
          src={getProductImage(product, selectedImage)}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop";
          }}
        />
        {product.demoVideoUrl && (
          <button
            onClick={handleWatchDemo}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 rounded-xl transition-all group"
          >
            <div className="bg-white bg-opacity-90 p-4 rounded-full group-hover:scale-110 transition-transform">
              <Play size={32} className="text-[#6b3e26]" />
            </div>
          </button>
        )}
      </div>

      {/* Thumbnail images */}
      {product.images && product.images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {product.images.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index ? 'border-[#6b3e26]' : 'border-gray-200'
              }`}
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={handlePreOrder}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            preorderMode 
              ? 'bg-[#6b3e26] text-white hover:bg-[#8b5c3c] animate-pulse' 
              : 'bg-[#6b3e26] text-white hover:bg-[#8b5c3c]'
          }`}
        >
          <Package size={18} />
          {preorderMode ? 'Complete Pre-order' : 'Pre-order Now'}
        </button>

        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`p-3 rounded-lg border transition-colors ${
            isLiked ? 'bg-red-50 border-red-200 text-red-600' : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
        </button>

        <button
          onClick={handleShare}
          className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductImagesAndActions;
