"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFileAlt, FaRuler, FaDraftingCompass, FaLayerGroup, FaVectorSquare, FaShapes, FaPrint, FaPenNib, FaExpand, FaChalkboard } from "react-icons/fa";

const blueprintItems = [
  { title: "Architectural Blueprints", icon: <FaFileAlt size={20} /> },
  { title: "Engineering Drawings", icon: <FaDraftingCompass size={20} /> },
  { title: "CAD Printing", icon: <FaVectorSquare size={20} /> },
  { title: "Floor Plans", icon: <FaRuler size={20} /> },
  { title: "Site Plans", icon: <FaExpand size={20} /> },
  { title: "Technical Diagrams", icon: <FaShapes size={20} /> },
  { title: "Construction Drawings", icon: <FaPrint size={20} /> },
  { title: "Overlay & Layer Printing", icon: <FaLayerGroup size={20} /> },
  { title: "Plotting & Scaling", icon: <FaPenNib size={20} /> },
  { title: "Custom Blueprint Options", icon: <FaChalkboard size={20} /> },
];

const largeFormatItems = [
  { title: "Posters", icon: <FaLayerGroup size={20} /> },
  { title: "Banners", icon: <FaExpand size={20} /> },
  { title: "Signage", icon: <FaPrint size={20} /> },
  { title: "Event Graphics", icon: <FaFileAlt size={20} /> },
  { title: "Trade Show Displays", icon: <FaVectorSquare size={20} /> },
  { title: "Canvas Prints", icon: <FaShapes size={20} /> },
  { title: "Custom Wall Art", icon: <FaPenNib size={20} /> },
  { title: "Large Format Stickers", icon: <FaDraftingCompass size={20} /> },
  { title: "Floor Graphics", icon: <FaLayerGroup size={20} /> },
  { title: "Architectural Posters", icon: <FaRuler size={20} /> },
];

const Page = () => {
  const renderSection = (title: string, text: string, img: string, items: typeof blueprintItems, reverse = false) => (
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

          {/* Text */}
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
      <section className="relative w-full py-10 bg-white flex items-center">
        <Container className="text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Blueprints & Large Format Printing
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700"
          >
            Professional printing solutions for architects, engineers, businesses, and events. Explore our blueprint and large format services below.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex justify-center gap-4 flex-wrap"
          >
            <a href="/contact" className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition">
              Get a Quote
            </a>
            <a href="/services" className="px-6 py-3 border border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
              See All Services
            </a>
          </motion.div>
        </Container>
      </section>

      {/* Blueprints Section */}
      {renderSection(
        "Blueprints & Technical Printing",
        "We provide high-quality blueprint printing for architects, engineers, and construction professionals.",
        "/services/blueprint1.jpg",
        blueprintItems
      )}

      {/* Large Format Section */}
      {renderSection(
        "Large Format Printing",
        "From banners to posters, trade show displays to custom wall art, we handle all your large format printing needs.",
        "/services/printer.jpg",
        largeFormatItems,
        true
      )}
    </div>
  );
};

export default Page;
