import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Globe, 
  Users, 
  Calendar,
  Package,
  Info,
  TrendingUp,
  Home as HomeIcon,
  Award,
  Sparkles
} from "lucide-react";

// Dummy data
const dummyStartups = [
  {
    id: 1,
    name: "TechNova",
    tagline: "Innovating Tomorrow's Technology Today",
    description: "AI-powered SaaS tools",
    backers: 120,
    category: "Technology",
    institute: "MIT Innovation Hub",
    founded: "January 2024",
    location: "San Francisco, CA",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFPkllq2S8KnQ/company-logo_200_200/company-logo_200_200/0/1631328833839?e=1762387200&v=beta&t=lvWkNi0TdaUX2_HIGHVsRWe_uuP32kF3ORqKw9TBDHE",
    cover: "https://media.licdn.com/dms/image/v2/C4E1BAQF6WK7BC9CwcQ/company-background_10000/company-background_10000/0/1583937404353?e=1759860000&v=beta&t=aSgUnwTr5_IUzmEnoCD6Sc5cGy2EXvbqnQxW0NTISxE",
    social: {
      website: "https://technova.com",
      linkedin: "https://linkedin.com/company/technova",
      twitter: "https://twitter.com/technova",
      facebook: "https://facebook.com/technova",
    },
    about: {
      mission: "TechNOVA delivers strategic insights into the application of cutting edge technology in order for leaders to formulate their own plans. Our conferences, webinars, reports and roundtables deliver thought leadership, networking opportunities and inspiration to those creating a connected world and all businesses that have a place in that ecosystem.",
      vision: "To become the leading platform for technological innovation and enterprise solutions worldwide.",
      values: ["Innovation", "Integrity", "Collaboration", "Excellence"]
    },
    updates: [
      {
        id: 1,
        date: "January 2025",
        title: "Launched AI-powered SaaS tool suite",
        description: "Introduced our flagship product with advanced AI capabilities for enterprise clients."
      },
      {
        id: 2,
        date: "March 2025",
        title: "Partnered with MIT Innovation Hub",
        description: "Strategic partnership to accelerate research and development initiatives."
      },
      {
        id: 3,
        date: "July 2025",
        title: "Reached 100+ enterprise clients",
        description: "Milestone achievement in customer acquisition and market penetration."
      }
    ],
    products: [
      {
        id: 1,
        name: "TechNova AI Analytics",
        description: "Advanced analytics platform powered by machine learning",
        price: "$299/month"
      },
      {
        id: 2,
        name: "TechNova Cloud Platform",
        description: "Scalable cloud infrastructure for modern applications",
        price: "$499/month"
      },
      {
        id: 3,
        name: "TechNova Automation Suite",
        description: "End-to-end automation solutions for enterprises",
        price: "$799/month"
      }
    ],
    team: [
      {
        id: 1,
        name: "John Doe",
        role: "CEO & Co-Founder",
        bio: "10+ years in tech leadership, former VP at Google",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "CTO & Co-Founder",
        bio: "PhD in AI from MIT, pioneering ML research",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
      },
      {
        id: 3,
        name: "Michael Johnson",
        role: "Head of Product",
        bio: "Product visionary with 8+ years at leading startups",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
      }
    ]
  },
];

// Home Tab Component
const HomeTab = ({ startup }) => (
  <div className="space-y-8">
    {/* Welcome Banner */}
    <div className="bg-gradient-to-r from-[#6b3e26] to-[#8b5c3c] rounded-2xl p-8 text-white">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="text-yellow-300" size={32} />
        <h2 className="text-3xl font-bold">Welcome to {startup.name}</h2>
      </div>
      <p className="text-lg opacity-90">{startup.tagline}</p>
    </div>

    {/* Quick Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#6b3e26] transition-all hover:shadow-lg">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Users className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Backers</p>
            <p className="text-2xl font-bold text-[#6b3e26]">{startup.backers}+</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#6b3e26] transition-all hover:shadow-lg">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <Package className="text-green-600" size={24} />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Products</p>
            <p className="text-2xl font-bold text-[#6b3e26]">{startup.products?.length || 0}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#6b3e26] transition-all hover:shadow-lg">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Award className="text-purple-600" size={24} />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Category</p>
            <p className="text-lg font-bold text-[#6b3e26]">{startup.category}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Overview */}
    <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-sm">
      <h3 className="text-2xl font-bold text-[#6b3e26] mb-4">Overview</h3>
      <p className="text-gray-700 leading-relaxed mb-6">{startup.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 text-gray-700">
          <Calendar className="text-[#6b3e26]" size={20} />
          <span><strong>Founded:</strong> {startup.founded}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Info className="text-[#6b3e26]" size={20} />
          <span><strong>Institute:</strong> {startup.institute}</span>
        </div>
      </div>
    </div>
  </div>
);

// About Tab Component
const AboutTab = ({ startup }) => (
  <div className="space-y-8">
    <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-sm">
      <h3 className="text-2xl font-bold text-[#6b3e26] mb-4">Our Mission</h3>
      <p className="text-gray-700 leading-relaxed">{startup.about?.mission}</p>
    </div>

    <div className="bg-gradient-to-br from-[#fefaf6] to-[#f5e5d8] rounded-xl p-8 border-2 border-[#e5d5c8]">
      <h3 className="text-2xl font-bold text-[#6b3e26] mb-4">Our Vision</h3>
      <p className="text-gray-700 leading-relaxed">{startup.about?.vision}</p>
    </div>

    <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-sm">
      <h3 className="text-2xl font-bold text-[#6b3e26] mb-6">Our Values</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {startup.about?.values.map((value, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-[#6b3e26] to-[#8b5c3c] text-white rounded-lg p-4 text-center font-semibold hover:scale-105 transition-transform"
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Updates Tab Component
const UpdatesTab = ({ startup }) => (
  <div className="space-y-6">
    {startup.updates?.map((update, index) => (
      <div 
        key={update.id}
        className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#6b3e26] hover:shadow-lg transition-all relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#6b3e26] to-[#8b5c3c]"></div>
        <div className="ml-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-[#f5e5d8] rounded-lg">
              <TrendingUp className="text-[#6b3e26]" size={20} />
            </div>
            <span className="text-sm text-gray-500 font-medium">{update.date}</span>
          </div>
          <h3 className="text-xl font-bold text-[#6b3e26] mb-2">{update.title}</h3>
          <p className="text-gray-700 leading-relaxed">{update.description}</p>
        </div>
      </div>
    ))}
  </div>
);

// Products Tab Component
const ProductsTab = ({ startup }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {startup.products?.map((product) => (
      <div 
        key={product.id}
        className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#6b3e26] hover:shadow-xl transition-all group"
      >
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6b3e26] to-[#8b5c3c] rounded-xl mb-4 group-hover:scale-110 transition-transform">
          <Package className="text-white" size={32} />
        </div>
        <h3 className="text-xl font-bold text-[#6b3e26] mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-2xl font-bold text-[#6b3e26]">{product.price}</span>
          <button className="px-4 py-2 bg-[#6b3e26] text-white rounded-lg hover:bg-[#8b5c3c] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>
);

// Team Tab Component
const TeamTab = ({ startup }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {startup.team?.map((member) => (
      <div 
        key={member.id}
        className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#6b3e26] hover:shadow-xl transition-all text-center group"
      >
        <div className="relative inline-block mb-4">
          <img 
            src={member.avatar} 
            alt={member.name}
            className="w-32 h-32 rounded-full border-4 border-[#f5e5d8] group-hover:border-[#6b3e26] transition-colors"
          />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#6b3e26] to-[#8b5c3c] rounded-full flex items-center justify-center">
            <Award className="text-white" size={20} />
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#6b3e26] mb-1">{member.name}</h3>
        <p className="text-[#8b5c3c] font-semibold mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
      </div>
    ))}
  </div>
);

const StartupPageOne = () => {
  const { id } = useParams();
  const startup = dummyStartups.find((s) => s.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("Home");

  if (!startup) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Startup not found</h2>
          <p className="text-gray-600">The startup you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { name: "Home", icon: HomeIcon },
    { name: "About", icon: Info },
    { name: "Updates", icon: TrendingUp },
    { name: "Products", icon: Package },
    { name: "Team", icon: Users }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Home":
        return <HomeTab startup={startup} />;
      case "About":
        return <AboutTab startup={startup} />;
      case "Updates":
        return <UpdatesTab startup={startup} />;
      case "Products":
        return <ProductsTab startup={startup} />;
      case "Team":
        return <TeamTab startup={startup} />;
      default:
        return <HomeTab startup={startup} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fefaf6] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Cover Section */}
          <div className="relative h-64 md:h-80 lg:h-96">
            <img
              src={startup.cover}
              alt="cover"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Social Media Icons - Behind Cover */}
            {/*  */}

            {/* Logo - Overlapping Cover */}
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img
                  src={startup.logo}
                  alt={startup.name}
                  className="w-32 h-32 rounded-2xl border-4 border-white shadow-2xl"
                />
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Featured
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="px-8 pt-20 pb-8 border-b-2 border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-[#6b3e26] mb-2">
                  {startup.name}
                </h1>
                <p className="text-gray-600 text-lg mb-3">
                  {startup.tagline}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="px-4 py-2 bg-[#f5e5d8] text-[#6b3e26] rounded-full font-semibold">
                    {startup.category}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                {startup.social.website && (
                  <a
                    href={startup.social.website}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white border-2 border-gray-300 rounded-xl shadow hover:border-[#6b3e26] hover:shadow-lg transition-all hover:scale-105"
                    title="Website"
                  >
                    <Globe size={24} className="text-gray-700" />
                  </a>
                )}
                {startup.social.linkedin && (
                  <a
                    href={startup.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white border-2 border-gray-300 rounded-xl shadow hover:border-blue-700 hover:shadow-lg transition-all hover:scale-105"
                    title="LinkedIn"
                  >
                    <Linkedin size={24} className="text-blue-700" />
                  </a>
                )}
                {startup.social.twitter && (
                  <a
                    href={startup.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white border-2 border-gray-300 rounded-xl shadow hover:border-sky-500 hover:shadow-lg transition-all hover:scale-105"
                    title="Twitter"
                  >
                    <Twitter size={24} className="text-sky-500" />
                  </a>
                )}
                {startup.social.facebook && (
                  <a
                    href={startup.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white border-2 border-gray-300 rounded-xl shadow hover:border-blue-600 hover:shadow-lg transition-all hover:scale-105"
                    title="Facebook"
                  >
                    <Facebook size={24} className="text-blue-600" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b-2 border-gray-200 overflow-x-auto no-scrollbar bg-[#fefaf6]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap transition-all border-b-4 font-semibold ${
                    activeTab === tab.name
                      ? "border-[#6b3e26] text-[#6b3e26] bg-white"
                      : "border-transparent text-gray-600 hover:text-[#6b3e26] hover:bg-white/50"
                  }`}
                >
                  <Icon size={20} />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8 bg-[#fefaf6]">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupPageOne;