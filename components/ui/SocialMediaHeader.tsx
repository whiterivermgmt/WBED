"use client";

import React from "react";
import { SiFacebook, SiGoogle, SiYelp } from "react-icons/si";

const SocialMediaHeader = () => {
  const socials = [
    {
      icon: <SiFacebook size={18} />,
      href: "https://www.facebook.com/p/Gerkin-Construction-LLC-100093552122319/",
      label: "Facebook",
    },
    {
      icon: <SiGoogle size={18} />,
      href: "https://www.google.com/search?q=gerkin+construction",
      label: "Google Reviews",
    },
    {
      icon: <SiYelp size={18} />,
      href: "https://www.yelp.com/biz/gerkin-construction-llc-bedford",
      label: "Yelp",
    },
  ];

  return (
    <div className="w-full z-50 backdrop-blur-md">
      <div className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-700/90 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 px-6 py-2 text-white">
          
          {/* Left Side: Schedule + Phone */}
          <div className="flex flex-col sm:flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 font-semibold text-left">
            <span>Schedule a Consultation</span>
            <a
              href="tel:8125831318"
              className="font-bold underline hover:text-gray-200 transition-colors duration-200"
            >
              (812)-583-1318
            </a>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex gap-3 items-center">
            {socials.map((social, idx) => (
              <div key={idx} className="relative group flex flex-col items-center">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-black transition-colors cursor-pointer p-1 rounded-full"
                >
                  {social.icon}
                </a>
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  {social.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaHeader;
