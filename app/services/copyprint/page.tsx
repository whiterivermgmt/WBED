"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCopy, FaPrint, FaFileAlt, FaFileInvoice, FaFileContract, FaBookOpen, FaStickyNote, FaEnvelope, FaLayerGroup, FaPen } from "react-icons/fa";

const copyItems = [
  { title: "Black & White Copies", icon: <FaCopy size={20} /> },
  { title: "Color Copies", icon: <FaPrint size={20} /> },
  { title: "Flyers & Brochures", icon: <FaFileAlt size={20} /> },
  { title: "Invoices & Forms", icon: <FaFileInvoice size={20} /> },
  { title: "Contracts & Agreements", icon: <FaFileContract size={20} /> },
  { title: "Manuals & Booklets", icon: <FaBookOpen size={20} /> },
  { title: "Sticky Notes & Labels", icon: <FaStickyNote size={20} /> },
  { title: "Envelopes", icon: <FaEnvelope size={20} /> },
  { title: "Stationery", icon: <FaLayerGroup size={20} /> },
  { title: "Custom Copy Options", icon: <FaPen size={20} /> },
];

const printItems = [
  { title: "Posters", icon: <FaLayerGroup size={20} /> },
  { title: "Business Cards", icon: <FaFileAlt size={20} /> },
  { title: "Brochures", icon: <FaPrint size={20} /> },
  { title: "Flyers", icon: <FaFileInvoice size={20} /> },
  { title: "Booklets", icon: <FaBookOpen size={20} /> },
  { title: "Labels & Stickers", icon: <FaStickyNote size={20} /> },
  { title: "Custom Stationery", icon: <FaEnvelope size={20} /> },
  { title: "Calendars", icon: <FaFileContract size={20} /> },
  { title: "Presentation Folders", icon: <FaPen size={20} /> },
  { title: "Marketing Materials", icon: <FaLayerGroup size={20} /> },
];

const Page = () => {
  const renderSection = (title: string, text: string, img: string, items: typeof copyItems, reverse = false) => (
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
            Copy & Print Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700"
          >
            Professional copying and printing solutions for your business, office, or personal needs. Explore our services below.
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

      {/* Copy Services Section */}
      {renderSection(
        "Copy Services",
        "We offer a variety of copy services including black & white, color, contracts, manuals, envelopes, and more.",
        "/services/machine.jpg",
        copyItems
      )}

      {/* Print Services Section */}
      {renderSection(
        "Print Services",
        "Our printing services include posters, brochures, flyers, booklets, marketing materials, and custom options for your business.",
        "/services/copy.jpg",
        printItems,
        true // reverse layout
      )}
    </div>
  );
};

export default Page;
