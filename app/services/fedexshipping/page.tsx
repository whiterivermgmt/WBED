"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTruck, FaBox, FaShippingFast, FaClipboardCheck, FaMapMarkedAlt,  FaGift, FaBoxes, FaWarehouse, FaReceipt, FaPen, FaClock } from "react-icons/fa";

const shippingItems1 = [
  { title: "FedEx Ground", icon: <FaTruck size={20} /> },
  { title: "FedEx Express", icon: <FaShippingFast size={20} /> },
  { title: "Overnight Shipping", icon: <FaClock size={20} /> },
  { title: "International Shipping", icon: <FaMapMarkedAlt size={20} /> },
  { title: "Package Tracking", icon: <FaClipboardCheck size={20} /> },
  { title: "Freight Services", icon: <FaBoxes size={20} /> },
  { title: "Drop-off Services", icon: <FaWarehouse size={20} /> },
  { title: "Packaging Assistance", icon: <FaBox size={20} /> },
  { title: "Gift Shipping", icon: <FaGift size={20} /> },
  { title: "Shipping Documentation", icon: <FaReceipt size={20} /> },
];

const shippingItems2 = [
  { title: "Same Day Delivery", icon: <FaShippingFast size={20} /> },
  { title: "Priority Overnight", icon: <FaTruck size={20} /> },
  { title: "FedEx Envelope", icon: <FaClipboardCheck size={20} /> },
  { title: "Pallet Services", icon: <FaBoxes size={20} /> },
  { title: "Signature Required", icon: <FaMapMarkedAlt size={20} /> },
  { title: "Custom Packaging", icon: <FaGift size={20} /> },
  { title: "Business Shipping Solutions", icon: <FaWarehouse size={20} /> },
  { title: "Return Shipping", icon: <FaBox size={20} /> },
  { title: "Label Printing", icon: <FaPen size={20} /> },
  { title: "Insurance Options", icon: <FaReceipt size={20} /> },
];

const Page = () => {
  const renderSection = (title: string, text: string, img: string, items: typeof shippingItems1, reverse = false) => (
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
            FedEx Shipping Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700"
          >
            Reliable shipping and packaging solutions for all your business or personal needs. Explore our FedEx services below.
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

      {/* Shipping Section 1 */}
      {renderSection(
        "FedEx Ground & Express",
        "We offer a variety of shipping options including ground, express, overnight, international, and package tracking services.",
        "/services/van.jpg",
        shippingItems1
      )}

      {/* Shipping Section 2 */}
      {renderSection(
        "Additional Shipping Solutions",
        "From same day delivery to business solutions, label printing, and insurance options, we handle all your shipping needs.",
        "/services/fedex.jpg",
        shippingItems2,
        true
      )}
    </div>
  );
};

export default Page;
