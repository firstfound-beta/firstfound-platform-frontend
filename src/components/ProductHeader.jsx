import React from 'react';
import { ArrowLeft, Award, Package, Globe } from 'lucide-react';

const ProductHeader = ({ product, onBack }) => {
  return (
    <div className="animate-fadeIn">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-[#6b3e26] hover:text-[#8b5c3c] font-medium transition-colors mb-6 lg:mb-8"
      >
        <ArrowLeft size={20} />
        <span>Back to Products</span>
      </button>

      {/* Title & description */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-[#4a2e19] tracking-tight mb-3">
          {product.name}
        </h1>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-3xl">
          {product.description}
        </p>

        {/* Categories */}
        {product.categories && product.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {product.categories.map((category, index) => (
              <span
                key={index}
                className="bg-[#f5e5d8] text-[#6b3e26] px-3 py-1 rounded-full text-xs lg:text-sm font-medium shadow-sm"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Founder / company info */}
        {(product.founderName || product.companyName) && (
          <div className="mt-8">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
              About the Founder
            </h3>

            <div className="bg-gray-50 border border-gray-200 p-5 lg:p-6 rounded-xl space-y-3 shadow-sm">
              {product.founderName && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Award size={20} className="text-[#6b3e26]" />
                  <span className="font-medium">{product.founderName}</span>
                </div>
              )}

              {product.companyName && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Package size={20} className="text-[#6b3e26]" />
                  <span>{product.companyName}</span>
                </div>
              )}

              {product.website && (
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-[#6b3e26]" />
                  <a
                    href={product.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductHeader;
