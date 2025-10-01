import React from "react";
import { TrendingUp, Award } from "lucide-react";

const LaunchSection = () => {
  const steps = [
    "Raw Material Funding",
    "Manufacturing Funding",
    "Delivery / Launch Funding",
  ];

  return (
    <>
      {/* Launch Section */}
      <section className="bg-gradient-to-br from-[#f0f4f8] to-[#e8f2f7] py-12 px-4 text-center">
        <TrendingUp size={48} className="mx-auto mb-4 text-[#6b3e26]" />
        <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">Launch Your Product</h2>
        <p className="mb-6 text-gray-700">Fill out your product launch form and get verified.</p>
        <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Submit Launch Form
        </button>
      </section>

      {/* Campaign Section */}
      <section className="bg-white py-12 px-4 text-center">
        <Award size={48} className="mx-auto mb-4 text-[#6b3e26]" />
        <h2 className="text-2xl font-semibold mb-4 text-[#6b3e26]">Launch Campaign & Raise Funding</h2>
        <p className="mb-6 text-gray-700">
          Start your campaign to raise funding. Funds are held in escrow and released milestone by milestone.
        </p>
        <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Launch Your Campaign
        </button>
      </section>

      {/* Milestones Section */}
      <section className="bg-[#fefaf6] py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-[#6b3e26] mb-8">Milestones & Escrow Funding</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 p-6 bg-white shadow-lg rounded-lg">
              <div className="w-12 h-12 bg-[#6b3e26] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{i + 1}</div>
              <h3 className="font-bold text-lg mb-2 text-[#4a2e19]">{step}</h3>
              <p className="text-gray-600">
                {i === 0
                  ? "Funds released for raw materials"
                  : i === 1
                  ? "Funds released for manufacturing"
                  : "Funds released for delivery"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LaunchSection;
