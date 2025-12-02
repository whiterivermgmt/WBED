"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { headerData } from "@/Constants/data";
import { SiFacebook, SiGoogle, SiYelp } from "react-icons/si";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, FileText, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  const pathname = usePathname(); // current path

  // Extract services submenu from headerData
  const servicesData = headerData.find((item) => item.title === "Services")?.submenu || [];

  const socialLinks = [
    { href: "https://www.facebook.com/p/Copy-Trolley-100063464026096/", icon: <SiFacebook />, name: "Facebook" },
    { href: "https://www.google.com/search?q=copy+trolley", icon: <SiGoogle />, name: "Google" },
    { href: "https://www.yelp.com/biz/copy-trolley-bedford", icon: <SiYelp />, name: "Yelp" },
  ];

  return (
    <footer className="text-white mt-auto bg-[#383838]">
      <Container>
        <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo + Description + Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="cursor-pointer"
              >
                <Image
                  src="/logo/footer.jpg"
                  alt="Copy Trolley Logo"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-base">
              Copy Trolley provides high-quality printing and copying services for all your business and personal needs.
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((item, idx) => (
                <div key={idx} className="relative group">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition"
                  >
                    {React.cloneElement(item.icon, { className: "w-5 h-5 text-white" })}
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b border-red-600 inline-block pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base">
              {headerData.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={`transition-all font-medium hover:text-red-400 hover:-translate-y-1 inline-block ${
                      pathname === link.href ? "text-red-600 font-semibold" : "text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b border-red-600 inline-block pb-2">
              Our Services
            </h3>
            <ul className="space-y-3 text-base">
              {servicesData.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className={`transition-all font-medium hover:text-red-400 hover:-translate-y-1 inline-block ${
                      pathname === service.href ? "text-red-600 font-semibold" : "text-white"
                    }`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
<div className="flex flex-col gap-6 text-center md:text-left md:items-start">
  <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b border-red-600 inline-block pb-2">
    Contact Us
  </h3>

  {/* Bedford */}
  <div className="flex flex-col gap-2">
    <h4 className="font-semibold text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
      <MapPin className="w-5 h-5 text-red-600" /> Bedford
    </h4>
    <p className="text-white">2319 Mitchell Rd • Bedford, IN 47421</p>
    <div className="flex flex-col gap-1 text-white">
      <a href="tel:8122798978" className="flex items-center gap-2 hover:text-red-400 transition">
        <Phone className="w-4 h-4 text-red-600" /> 812-279-8978
      </a>
      <a href="mailto:bedfordtrolley@gmail.com" className="flex items-center gap-2 hover:text-red-400 transition">
        <Mail className="w-4 h-4 text-red-600" /> bedfordtrolley@gmail.com
      </a>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-red-600" /> M-F 9am - 5:30pm, Closed Sat & Sun
      </div>
    </div>
  </div>

  {/* Paoli */}
  <div className="flex flex-col gap-2">
    <h4 className="font-semibold text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
      <MapPin className="w-5 h-5 text-red-600" /> Paoli
    </h4>
    <p className="text-white">107 N Gospel St, Paoli, IN 47454</p>
    <div className="flex flex-col gap-1 text-white">
      <a href="tel:8127234912" className="flex items-center gap-2 hover:text-red-400 transition">
        <Phone className="w-4 h-4 text-red-600" /> 812-723-4912
      </a>
      <a href="mailto:paolitrolley@gmail.com" className="flex items-center gap-2 hover:text-red-400 transition">
        <Mail className="w-4 h-4 text-red-600" /> paolitrolley@gmail.com
      </a>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-red-600" /> M-F 9am - 4pm, Closed Sat & Sun
      </div>
    </div>
  </div>
</div>
</div>

        {/* Footer Bottom */}
        <div className="border-t border-white mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Copy Trolley</p>
          <p>
            Designed by{" "}
            <Link
              href="https://whiteriver.media"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-red-400"
            >
              White River Media
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
