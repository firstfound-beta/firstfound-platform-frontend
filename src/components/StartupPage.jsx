import { useState } from "react";
import { Search, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StartupPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCollege, setSelectedCollege] = useState("All");

  const navigate = useNavigate();

  const startups = [
    { id: 1, name: "NidyaTech", description: "AI-powered platform improving healthcare diagnostics.", features: ["AI Diagnostics", "Cloud-based Reports", "Fast Predictions"], category: "AI", college: "IIT Madras", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop" },
    { id: 2, name: "SmartKart", description: "Revolutionizing retail with cashier-less AI shopping.", features: ["Smart Carts", "Face Recognition Checkout", "AI Retail"], category: "Tech", college: "IIT Delhi", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
    { id: 3, name: "GreenNest", description: "Sustainable housing solutions with eco-materials.", features: ["Recycled Materials", "Solar Energy", "Affordable Housing"], category: "Sustainability", college: "IIT Bombay", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop" },
    { id: 4, name: "MediBot", description: "Robotics in surgery for precision healthcare.", features: ["Surgical Robots", "AI Guidance", "Remote Monitoring"], category: "Healthcare", college: "IIT Kharagpur", image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop" },
    { id: 5, name: "EduFlow", description: "Personalized AI-based learning assistant.", features: ["Adaptive Learning", "Progress Tracking", "Gamified Education"], category: "Education", college: "IIT Madras", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop" },
    { id: 6, name: "FoodFusion", description: "Smart F&B startup blending nutrition with taste.", features: ["AI Recipes", "Healthy Fast Food", "Meal Subscriptions"], category: "F&B", college: "IIT Delhi", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
    { id: 7, name: "CineVerse", description: "Next-gen entertainment with AR/VR storytelling.", features: ["Virtual Cinemas", "Interactive AR Movies", "Immersive VR Shows"], category: "Entertainment", college: "IIT Bombay", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop" },
    { id: 8, name: "RoboFarm", description: "AI-driven agriculture for higher crop yield.", features: ["Smart Irrigation", "Drone Monitoring", "Predictive Analytics"], category: "AI", college: "IIT Kharagpur", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop" },
    { id: 9, name: "HealthifyWear", description: "Wearable devices for real-time health monitoring.", features: ["Heart Rate Tracking", "Sleep Analysis", "Fitness AI"], category: "Wearable Tech", college: "IIT Madras", image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=300&fit=crop" },
    { id: 10, name: "ByteBank", description: "Blockchain-based secure digital banking.", features: ["Crypto Wallets", "Smart Contracts", "Instant Payments"], category: "Tech", college: "IIT Delhi", image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop" },
    { id: 11, name: "EcoRide", description: "Affordable EV bikes for urban transport.", features: ["Battery Swap", "IoT Monitoring", "Sustainable Mobility"], category: "Sustainability", college: "IIT Bombay", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop" },
    { id: 12, name: "NeuroNet", description: "Brain-computer interface for accessibility.", features: ["Neural Implants", "Assistive Tech", "AI Prosthetics"], category: "AI", college: "IIT Kharagpur", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop" },
    { id: 13, name: "AquaSmart", description: "IoT-powered water management for smart cities.", features: ["Leak Detection", "Water Quality AI", "Usage Analytics"], category: "Tech", college: "IIT Delhi", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop" },
    { id: 14, name: "SkillForge", description: "EdTech startup upskilling youth with AI tutors.", features: ["24/7 AI Mentor", "Skill Assessments", "Job Readiness"], category: "Education", college: "IIT Madras", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" },
    { id: 15, name: "MetaPlay", description: "Metaverse-based entertainment experiences.", features: ["VR Concerts", "Digital Avatars", "Virtual Commerce"], category: "Entertainment", college: "IIT Bombay", image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=400&h=300&fit=crop" },
  ];

  const categories = ["All","Tech","AI","Healthcare","Education","Entertainment","Sustainability","Wearable Tech","F&B"];
  const colleges = ["All","IIT Madras","IIT Delhi","IIT Bombay","IIT Kharagpur"];

  const filteredStartups = startups.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || s.category === selectedCategory;
    const matchesCollege = selectedCollege === "All" || s.college === selectedCollege;
    return matchesSearch && matchesCategory && matchesCollege;
  });

  return (
    <div className="min-h-screen bg-[#f5e5d8] px-6 py-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Left: Filters */}
        <div className="lg:col-span-1 bg-white shadow-lg rounded-2xl p-6 space-y-6 h-fit">
          <h2 className="text-xl font-semibold text-[#4a2e19]">Search & Filters</h2>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search startups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6b3e26] focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="font-medium text-[#6b3e26] mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-sm rounded-full border transition-all ${
                    selectedCategory === cat ? "bg-[#6b3e26] text-white" : "bg-[#f5e5d8] text-[#6b3e26] hover:bg-[#e6d2c4]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* College Filter */}
          <div>
            <h3 className="font-medium text-[#6b3e26] mb-2">Colleges</h3>
            <div className="space-y-2">
              {colleges.map((college) => (
                <label key={college} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={selectedCollege === college}
                    onChange={() => setSelectedCollege(college)}
                    className="text-[#6b3e26] focus:ring-[#6b3e26]"
                  />
                  <span className="text-sm text-gray-700">{college}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Startup List */}
        <div className="lg:col-span-3 space-y-6">
          <h1 className="text-3xl font-bold text-[#4a2e19] mb-4">Discover Startups 🚀</h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStartups.map((startup) => (
              <div key={startup.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                <img src={startup.image} alt={startup.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#4a2e19] mb-2">{startup.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{startup.description}</p>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mb-3">
                    {startup.features.map((f, i) => (<li key={i}>{f}</li>))}
                  </ul>
                  <span className="inline-block text-xs font-semibold bg-[#f5e5d8] text-[#6b3e26] px-3 py-1 rounded-full">{startup.college}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back Button: Fixed at bottom-left */}
      <button
        onClick={() => navigate("/")}
        className="fixed bottom-5 left-5 flex items-center bg-[#6b3e26] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#8b5c3c] transition-colors"
      >
        <ChevronLeft size={18} className="mr-2" />
        Back to Homepage
      </button>
    </div>
  );
}
