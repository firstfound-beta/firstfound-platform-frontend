import React, { useState, useEffect } from "react";
import {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Award,
  Globe,
  Heart,
  Rocket,
  Shield,
  Star,
  Mail,
  Linkedin,
  Twitter,
  ChevronRight
} from "lucide-react";

function About() {
  const [isVisible, setIsVisible] = useState({});

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

  const stats = [
    { number: "500+", label: "Products Launched", icon: Rocket },
    { number: "₹50L+", label: "Funding Raised", icon: TrendingUp },
    { number: "10K+", label: "Early Supporters", icon: Users },
    { number: "95%", label: "Success Rate", icon: Award }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We focus on Indian innovators with globally scalable ideas.",
      icon: Lightbulb,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Verified & Trusted",
      description: "Every product is verified by our team before listing.",
      icon: Shield,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Community Driven",
      description: "Connect innovators with early adopters and investors.",
      icon: Users,
      color: "from-green-400 to-green-600"
    },
    {
      title: "Transparent Funding",
      description: "Clear breakdown of manufacturing and delivery funding needs.",
      icon: Globe,
      color: "from-orange-400 to-orange-600"
    }
  ];

  const team = [
    {
      name: "Priyanshu Kumar",
      role: "Founder",
      bio: "IIT Madras.",
      image: "https://t3.ftcdn.net/jpg/07/40/66/04/360_F_740660413_jMpbvqGDfKQfBfncRYnZRJT70rIRHIaX.jpg"
    },
    {
      name: "Suharsh Kumar",
      role: "COO",
      bio: "IIT Madras.",
      image: "https://t3.ftcdn.net/jpg/07/40/66/04/360_F_740660413_jMpbvqGDfKQfBfncRYnZRJT70rIRHIaX.jpg"
    },
    {
      name: "Abhijeet Kumar Shah",
      role: "Software Engineer(Founding Member)",
      bio: "NST Delhi.",
      image: "https://t3.ftcdn.net/jpg/07/40/66/04/360_F_740660413_jMpbvqGDfKQfBfncRYnZRJT70rIRHIaX.jpg"
    },
    {
      name: "Bhavani Shanker",
      role: "Software Engineer(Founding Member)",
      bio: "NST Delhi.",
      image: "https://t3.ftcdn.net/jpg/07/40/66/04/360_F_740660413_jMpbvqGDfKQfBfncRYnZRJT70rIRHIaX.jpg"
    }
  ];

  return (
    <div className="text-gray-800 font-sans bg-[#fefaf6] overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideInLeft { from { opacity:0; transform:translateX(-30px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInRight { from { opacity:0; transform:translateX(30px); } to { opacity:1; transform:translateX(0); } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .visible { opacity:1 !important; transform:translateY(0) !important; }
        .gradient-bg { background: linear-gradient(135deg, #fefaf6 0%, #f5e5d8 100%); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .pulse-button { animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow:0 0 0 0 rgba(107,62,38,0.7);} 70% { box-shadow:0 0 0 10px rgba(107,62,38,0);} 100% { box-shadow:0 0 0 0 rgba(107,62,38,0);} }
      `}</style>

      {/* Hero Section */}
      <section className="gradient-bg py-20 text-center px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-[#5c3a21] animate-fadeInUp">
            Launch Your Product with Originn
          </h1>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Submit your product, get verified by our team, and showcase it to our community for funding. 
            We guide you through the entire process from manufacturing to delivery.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <button className="bg-[#6b3e26] text-white px-8 py-3 rounded-lg hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-105 pulse-button">
              Submit Your Product
            </button>
            <button className="border-2 border-[#6b3e26] text-[#6b3e26] px-8 py-3 rounded-lg hover:bg-[#6b3e26] hover:text-white transition-all duration-300 hover:scale-105">
              Learn How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white" id="stats" data-animate>
        <div className={`max-w-6xl mx-auto transition-all duration-800 ${isVisible.stats ? "animate-fadeInUp" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-hover animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4 flex justify-center">
                  <stat.icon size={48} className="text-[#6b3e26] animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
                </div>
                <div className="text-3xl font-bold text-[#6b3e26] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-[#fefaf6]" id="mission" data-animate>
        <div className={`max-w-6xl mx-auto transition-all duration-800 ${isVisible.mission ? "animate-slideInLeft" : "opacity-0 translate-x-8"}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#6b3e26]">How It Works</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                1. Submit your product with details of manufacturing and delivery requirements.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                2. Our Originn team reviews your product to ensure quality, feasibility, and innovation standards.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                3. Once verified, your product is listed on our platform for crowdfunding campaigns to raise capital.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Product launch"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white" id="values" data-animate>
        <div className={`max-w-6xl mx-auto transition-all duration-800 ${isVisible.values ? "animate-fadeInUp" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#6b3e26]">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg card-hover animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${value.color}`}>
                    <value.icon className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#4a2e19]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-[#fefaf6]" id="team" data-animate>
        <div className={`max-w-6xl mx-auto transition-all duration-800 ${isVisible.team ? "animate-slideInRight" : "opacity-0 translate-x-8"}`}>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#6b3e26]">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6 card-hover animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold mb-1 text-[#4a2e19]">{member.name}</h3>
                <p className="text-[#6b3e26] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <Linkedin className="text-[#6b3e26] hover:text-[#8b5c3c] cursor-pointer transition-colors" size={20} />
                  <Twitter className="text-[#6b3e26] hover:text-[#8b5c3c] cursor-pointer transition-colors" size={20} />
                  <Mail className="text-[#6b3e26] hover:text-[#8b5c3c] cursor-pointer transition-colors" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
