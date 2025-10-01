import React, { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    alert("📊 Analytics Page — Soon Available!");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          📊 Analytics Page
        </h1>
        <p className="text-gray-500">This feature will be available soon. Stay tuned!</p>
      </div>
    </div>
  );
};

export default Analytics;
