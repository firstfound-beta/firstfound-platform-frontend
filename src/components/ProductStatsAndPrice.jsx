import React from "react";
import {
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Shield,
  Award,
  Truck,
} from "lucide-react";

const ProductStatsAndPrice = ({ product, formatCurrency, milestones }) => {
  // Calculate expected delivery date
  const totalEstimatedDays = milestones.reduce(
    (sum, m) => sum + m.estimatedDays,
    0
  );
  const expectedDelivery = new Date(
    Date.now() + totalEstimatedDays * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-IN", { month: "short", year: "numeric" });

  return (
    <div className="space-y-6">
      {/* Product Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
          <Star className="text-yellow-500 mx-auto mb-1" size={20} />
          <div className="font-semibold text-lg">{product.rating.toFixed(1)}</div>
          <div className="text-xs text-gray-500">Rating</div>
        </div>

        <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
          <Users className="text-blue-500 mx-auto mb-1" size={20} />
          <div className="font-semibold text-lg">{product.backersCount}</div>
          <div className="text-xs text-gray-500">Backers</div>
        </div>

        <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
          <TrendingUp className="text-green-500 mx-auto mb-1" size={20} />
          <div className="font-semibold text-lg">
            {product.percentageFunded}%
          </div>
          <div className="text-xs text-gray-500">Funded</div>
        </div>

        <div className="text-center p-4 bg-white rounded-xl shadow-sm border">
          <DollarSign className="text-purple-500 mx-auto mb-1" size={20} />
          <div className="font-semibold text-lg">
            {formatCurrency(product.amountRaised)}
          </div>
          <div className="text-xs text-gray-500">Raised</div>
        </div>
      </div>

      {/* Price and Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <div className="text-3xl font-bold text-[#6b3e26]">
              {formatCurrency(product.price)}
            </div>
            <div className="text-sm text-gray-500">Pre-order Price</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Expected Delivery</div>
            <div className="font-semibold text-[#6b3e26]">
              {expectedDelivery}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-[#6b3e26] hover:bg-[#5a3220] text-white py-3 rounded-xl font-semibold transition">
          Pre-order Now
        </button>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-3 text-xs text-gray-600 mt-6">
          <div className="flex items-center gap-1 justify-center sm:justify-start">
            <Shield size={14} className="text-green-500" />
            <span>Escrow Protected</span>
          </div>
          <div className="flex items-center gap-1 justify-center sm:justify-start">
            <Award size={14} className="text-blue-500" />
            <span>Quality Assured</span>
          </div>
          <div className="flex items-center gap-1 justify-center sm:justify-start">
            <Truck size={14} className="text-purple-500" />
            <span>Free Shipping</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatsAndPrice;
