import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react"; 
import firstfoundlogo from "../assets/firstfound.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#6b3e26] via-[#8b5c3c] to-[#6b3e26] text-white mt-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          {/* Left Section - About & Team */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#d2a679] rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                <img
                  src={firstfoundlogo}
                  alt="Origin Logo"
                  className="relative h-14 w-14 rounded-full shadow-xl ring-4 ring-white/20 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-[#d2a679] bg-clip-text text-transparent">
                Originn
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-200">
              Originn is dedicated to helping early-stage startups launch,
              connect with investors, and grow sustainably. Our team of
              innovators and strategists is here to guide your journey.
            </p>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#d2a679] mb-3">
                Our Team
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-200 hover:text-[#d2a679] cursor-pointer transition-colors duration-200 hover:translate-x-1 transform">
                  <div className="w-1.5 h-1.5 bg-[#d2a679] rounded-full"></div>
                  <span>Leadership Team</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200 hover:text-[#d2a679] cursor-pointer transition-colors duration-200 hover:translate-x-1 transform">
                  <div className="w-1.5 h-1.5 bg-[#d2a679] rounded-full"></div>
                  <span>Advisory Board</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200 hover:text-[#d2a679] cursor-pointer transition-colors duration-200 hover:translate-x-1 transform">
                  <div className="w-1.5 h-1.5 bg-[#d2a679] rounded-full"></div>
                  <span>Careers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Help & Policies */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#d2a679] mb-4">
              Help & Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 cursor-pointer hover:text-[#d2a679] transition-all duration-200 hover:translate-x-1 transform group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <Phone size={16} />
                </div>
                <span>Contact Us</span>
              </li>
              <li>
                <a
                  href="mailto:support@originn.com"
                  className="flex items-center gap-3 cursor-pointer hover:text-[#d2a679] transition-all duration-200 hover:translate-x-1 transform group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                    <Mail size={16} />
                  </div>
                  <span>support@originn.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin size={16} />
                </div>
                <span>Banglore, India</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/20">
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <a
                    href="mailto:ajtr200@gmail.com"
                    className="flex items-center gap-2 cursor-pointer hover:text-[#d2a679] transition-colors hover:translate-x-1 transform duration-200"
                  >
                    <Mail size={18} />
                    Send us an Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Privacy & Social Media */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#d2a679] mb-4">
              Privacy & Security
            </h4>

            <p className="text-sm text-gray-200 mb-4">
              Your privacy and security are our top priorities. We ensure your
              data is protected with industry-leading security measures.
            </p>

            <div className="pt-4 border-t border-white/20">
              <h5 className="font-semibold text-sm text-[#d2a679] mb-4">
                Stay Connected
              </h5>
              <p className="text-sm text-gray-200 mb-4">
                Follow us on social media and never miss an update on the latest
                startups and innovations.
              </p>

              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 group"
                  aria-label="Facebook"
                >
                  <Facebook
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-sky-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-sky-500/50 group"
                  aria-label="Twitter"
                >
                  <Twitter
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-700/50 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-pink-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-600/50 group"
                  aria-label="Instagram"
                >
                  <Instagram
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-300 flex items-center gap-2">
              © 2025 Origin. All rights reserved. Made with{" "}
              <Heart
                size={14}
                className="text-red-400 fill-current animate-pulse"
              />{" "}
              in India
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#d2a679] to-transparent"></div>
    </footer>
  );
};

export default Footer;
