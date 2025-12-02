"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFlag,
  FaStore,
  FaRoad,
  FaStreetView,
  FaSign,
  FaBullhorn,
  FaClipboard,
  FaVectorSquare,
  FaLayerGroup,
  FaImage,
  FaCar
} from "react-icons/fa";

const signItems = [
  { title: "Custom Store Signs", icon: <FaStore size={20} /> },
  { title: "Directional Signs", icon: <FaRoad size={20} /> },
  { title: "Event Signage", icon: <FaStreetView size={20} /> },
  { title: "Warning & Safety Signs", icon: <FaSign size={20} /> },
  { title: "Outdoor Flags", icon: <FaFlag size={20} /> },
  { title: "Promotional Signs", icon: <FaBullhorn size={20} /> },
  { title: "Vehicle Wraps", icon: <FaCar size={20} /> },
  { title: "Custom Wall Graphics", icon: <FaClipboard size={20} /> },
  { title: "Vector Art Signage", icon: <FaVectorSquare size={20} /> },
  { title: "Layered & 3D Signs", icon: <FaLayerGroup size={20} /> },
];

const bannerItems = [
  { title: "Vinyl Banners", icon: <FaImage size={20} /> },
  { title: "Mesh Banners", icon: <FaLayerGroup size={20} /> },
  { title: "Retractable Banners", icon: <FaClipboard size={20} /> },
  { title: "Trade Show Displays", icon: <FaStore size={20} /> },
  { title: "Outdoor Advertising", icon: <FaRoad size={20} /> },
  { title: "Event Banners", icon: <FaStreetView size={20} /> },
  { title: "Custom Fabric Banners", icon: <FaFlag size={20} /> },
  { title: "Indoor Wall Banners", icon: <FaSign size={20} /> },
  { title: "Double-Sided Banners", icon: <FaBullhorn size={20} /> },
  { title: "Promotional Banners", icon: <FaVectorSquare size={20} /> },
];

const Page = () => {
  const renderSection = (
    title: string,
    text: string,
    img: string,
    items: typeof signItems,
    reverse = false
  ) => (
    <section className="bg-gray-50 py-12 lg:py-16">
      <Container>
        <div className={`flex flex-col lg:flex-row items-start gap-12 ${reverse ? "lg:flex-row-reverse" : ""}`}>
          {/* Image */}
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <Image
                src={img}
                alt={title}
                width={600}
                height={400}
                className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text + Pills */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: reverse ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              <p className="text-gray-700 text-lg">{text}</p>

              {/* Pills Grid */}
              <div className="flex flex-wrap gap-3 mt-4">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:scale-105 transition transform cursor-pointer whitespace-nowrap"
                  >
                    <div className="text-red-600">{item.icon}</div>
                    <span className="font-medium text-gray-800 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <section className="relative w-full py-10 bg-white flex flex-col items-center">
        <Container className="text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Signs & Banners
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 mb-6"
          >
            Custom signs and banners to make your brand stand out at events, stores, and promotions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition"
            >
              Get a Quote
            </a>
            <a
              href="/services"
              className="px-6 py-3 border border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              See All Services
            </a>
          </motion.div>
        </Container>
      </section>

      {/* Signs Section */}
      {renderSection(
        "Custom Signs",
        "We create high-quality signs for stores, events, safety, and promotions to make your message stand out.",
        "/services/banner1.jpg",
        signItems
      )}

      {/* Banners Section */}
      {renderSection(
        "Custom Banners",
        "Our banners are perfect for trade shows, events, promotions, and indoor/outdoor advertising.",
        "/services/banner.jpg",
        bannerItems,
        true
      )}
    </div>
  );
};

export default Page;
