"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/locations/image.jpg",
  "/locations/image2.jpg",
  "/locations/image3.jpg",
  "/locations/image4.jpg",
];

const HomeBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // rotate every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden flex items-center justify-center">
      {/* Rotating Images */}
      <AnimatePresence>
        {heroImages.map((src, idx) =>
          idx === currentIndex ? (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={src}
                alt="Home Banner"
                fill
                className="object-cover object-center brightness-75"
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 lg:px-24 z-20 space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Copy Trolley – Your Local Printing & Design Experts
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-md max-w-2xl">
          Serving Bedford, Paoli, and surrounding areas with high-quality printing, design, shipping, and promotional services. <strong>FedEx Authorized Shipper</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/contact"
            className="bg-shop-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
