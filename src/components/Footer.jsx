import React from "react";
// import firstfoundlogo from "../assets/firstfoundlogo.png"; // Update the path to your logo
import firstfoundlogo from "../assets/firstfound.png"

const Footer = () => {
  const footerSections = [
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
  ];

  return (
    <footer className="bg-[#f5e5d8] text-[#5a3c2e] py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {footerSections.map(({ title, items }, index) => (
          <div
            key={title}
            className="animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h4 className="font-semibold mb-2">{title}</h4>
            <ul>
              {items.map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-[#6b3e26] transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-4 animate-fadeInUp">
        <img
          src={firstfoundlogo}
          alt="FirstFound Logo"
          className="h-12 w-12 rounded-full shadow"
        />
      </div>

      <div className="mt-6 text-center text-sm text-[#8c6b5c] animate-fadeInUp">
        © 2025 FirstFound. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
