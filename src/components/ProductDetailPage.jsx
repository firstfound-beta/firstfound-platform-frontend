import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProductHeader from './ProductHeader';
import ProductImagesAndActions from './ProductImagesAndActions';
import ProductStatsAndPrice from './ProductStatsAndPrice';
import ProductTabs from './ProductTabs';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ States
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [preorderMode, setPreorderMode] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [escrowData, setEscrowData] = useState(null);
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);

  // ✅ Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/products/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch product");

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ✅ Helpers
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);

  const getProductImage = (product) => product?.images?.[0] || "/placeholder.png";
  const handlePreOrder = () => setPreorderMode(true);
  const handleWatchDemo = () => console.log("Watch demo");
  const handleShare = () => console.log("Share");

  // ✅ Milestones from product JSON
  const milestones = product?.milestones || [];

  const getMilestoneStatus = (index) => {
    if (index < currentMilestoneIndex) return "completed";
    if (index === currentMilestoneIndex) return "in-progress";
    return "upcoming";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "green";
      case "in-progress": return "yellow";
      default: return "gray";
    }
  };

  // ✅ Conditional renders
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">Loading...</div>;
  }

  if (error || !product) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-lg">
        {error || "Product not found"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefaf6] to-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Header */}
        <ProductHeader product={product} onBack={() => navigate('/')} />

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-6 lg:mt-10">
          <ProductImagesAndActions 
            product={product}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            preorderMode={preorderMode}
            handlePreOrder={handlePreOrder}
            handleWatchDemo={handleWatchDemo}
            handleShare={handleShare}
            getProductImage={getProductImage}
          />

          <ProductStatsAndPrice
            product={product}
            formatCurrency={formatCurrency}
            milestones={milestones}
          />
        </div>

        {/* Tabs Section */}
        <div className="mt-10 lg:mt-14">
          <ProductTabs 
            product={product}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            formatCurrency={formatCurrency}
            milestones={milestones}
            escrowData={escrowData}
            currentMilestoneIndex={currentMilestoneIndex}
            getMilestoneStatus={getMilestoneStatus}
            getStatusColor={getStatusColor}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
