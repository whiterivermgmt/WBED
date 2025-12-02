"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Reviews from "@/components/ui/Reviews";

// About sections tailored for Copy Trolley
const sections = [
  {
    title: "Our Mission",
    text: "At Copy Trolley, our mission is to provide Bedford and surrounding communities with high-quality printing, copying, shipping, and design services. We help businesses and individuals bring their ideas to life efficiently and affordably.",
    img: "/locations/image.jpg",
  },
  {
    title: "Our Values",
    text: "Customer satisfaction, reliability, and creativity guide everything we do. We strive for clear communication, fast turnaround, and innovative solutions for every client.",
    img: "/locations/image4.jpg",
  },
  {
    title: "Our Services",
    text: "We specialize in printing, copying, graphic design, promotional products, signs, banners, and FedEx shipping. Every project is handled with precision and attention to detail to ensure excellent results.",
    img: "/locations/image2.jpg",
  },
  {
    title: "Community & Trust",
    text: "We are proud to serve Bedford, IN, and the surrounding areas. Building lasting relationships with our clients is at the heart of what we do. Your success is our success.",
    img: "/locations/image3.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-32">

      {/* Header Section */}
      <section className="bg-gray-50 py-24">
        <Container className="text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Copy Trolley
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trusted partner in printing, copying, shipping, and graphic design services in Bedford, IN.
          </motion.p>
        </Container>
      </section>

      {/* About Sections */}
      <section className="bg-white">
        <Container>
          <div className="space-y-24">
            {sections.map((section, index) => {
              const reverse = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-16 ${
                    reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="flex-1">
                    <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                      <Image
                        src={section.img}
                        alt={section.title}
                        width={600}
                        height={400}
                        className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">{section.title}</h3>
                      <p className="text-lg text-gray-700">{section.text}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <Reviews />

    </div>
  );
}
