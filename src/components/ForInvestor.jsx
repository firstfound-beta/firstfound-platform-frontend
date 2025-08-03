import React, { useEffect, useState } from "react";
import { Award, Users, TrendingUp, Star } from "lucide-react";
import firstfoundlogo from "../assets/firstfound.png";

function ForInvestor() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#fefaf6] text-gray-800 font-sans overflow-x-hidden">
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="gradient-bg py-20 text-center px-4 bg-[#f5e5d8]">
        <h1 className="text-4xl font-bold mb-4 text-[#5c3a21] animate-fadeInUp">
          Fuel India’s Innovation – Invest Early
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fadeInUp">
          Get exclusive access to India's most promising early-stage startups
          and be part of their journey from the ground up.
        </p>
      </section>

      {/* Why Invest Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto" id="why" data-animate>
        <div
          className={`transition-all duration-800 ${
            isVisible.why ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-semibold text-center mb-10 text-[#6b3e26]">
            Why Invest with FirstFound?
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: <TrendingUp size={36} className="mx-auto text-[#6b3e26]" />,
                title: "High-Growth Opportunities",
                desc: "Access to curated startups with strong traction and potential for high ROI.",
              },
              {
                icon: <Users size={36} className="mx-auto text-[#6b3e26]" />,
                title: "Community Driven",
                desc: "Join a passionate network of like-minded early adopters and investors.",
              },
              {
                icon: <Award size={36} className="mx-auto text-[#6b3e26]" />,
                title: "Expert Curation",
                desc: "Startups go through rigorous evaluation by our investment team.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow card-hover"
              >
                {icon}
                <h3 className="font-bold text-lg mt-4 mb-2 text-[#4a2e19]">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="bg-[#fff7f0] py-16 px-6" id="steps" data-animate>
        <div
          className={`transition-all duration-800 ${
            isVisible.steps ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-semibold text-center mb-10 text-[#6b3e26]">
            How to Join Our Investor Network
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {["Sign Up", "Complete KYC", "Start Investing"].map((step, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow card-hover"
              >
                <div className="w-12 h-12 mx-auto bg-[#6b3e26] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg text-[#4a2e19] mb-2">
                  {step}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step === "Sign Up"
                    ? "Register to gain access to investment deals."
                    : step === "Complete KYC"
                    ? "Verify your investor credentials securely."
                    : "Explore and fund startups of your choice."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6" id="testimonials" data-animate>
        <div
          className={`transition-all duration-800 ${
            isVisible.testimonials
              ? "animate-fadeInUp"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-semibold text-center mb-10 text-[#6b3e26]">
            What Our Investors Say
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                quote: "Investing with FirstFound gave me early access to India’s top innovations.",
                name: "Neha Kapoor",
                rating: 5,
              },
              {
                quote: "Loved the transparent process and curated startup list.",
                name: "Siddharth Jain",
                rating: 4,
              },
            ].map((t, index) => (
              <div
                key={index}
                className="mb-8 bg-[#fefaf6] p-6 rounded-lg shadow-md"
              >
                <p className="italic text-gray-600 mb-4">"{t.quote}"</p>
                <p className="font-semibold text-[#6b3e26]">{t.name}</p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < t.rating
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#f5e5d8] py-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#5c3a21] animate-fadeInUp">
          Ready to invest in India's future?
        </h2>
        <p className="text-gray-700 mb-6 animate-fadeInUp">
          Join our investor network today and access the next big ideas early.
        </p>
        <button className="bg-[#6b3e26] text-white px-6 py-2 rounded hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5e5d8] text-[#5a3c2e] py-8 px-4">
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
            <div key={title}>
              <h4 className="font-semibold mb-2">{title}</h4>
              <ul>
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm hover:text-[#6b3e26] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-6">
          <img
            src={firstfoundlogo}
            alt="FirstFound Logo"
            className="h-12 w-12 rounded-full shadow"
          />
        </div>
        <div className="text-center text-sm text-[#8c6b5c]">
          © 2025 FirstFound. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default ForInvestor;
